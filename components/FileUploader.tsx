"use client";

import { useToast } from "@/hooks/use-toast";
import useSubscription from "@/hooks/useSubscription";
import useUpload, { StatusText } from "@/hooks/useUpload";
import {
  CheckCircleIcon,
  CircleArrowDown,
  HammerIcon,
  RocketIcon,
  SaveIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { type ReactNode, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const FileUploader = () => {
  const { progress, status, fileId, handleUpload } = useUpload();
  const { isOverFileLimit, filesLoading } = useSubscription();
  const { toast } = useToast();

  const router = useRouter();

  useEffect(() => {
    if (fileId) {
      router.push(`/dashboard/files/${fileId}`);
    }
  }, [fileId, router]);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      // Do something with the files
      console.log(acceptedFiles);

      const file = acceptedFiles[0];
      if (file) {
        if (!isOverFileLimit && !filesLoading) {
          await handleUpload(file);
        } else {
          toast({
            variant: "destructive",
            title: "Free Plan File Limit Reached",
            description:
              "You have reached the maximum number of files allowed for your account. Please upgrade to add more documents.",
          });
        }
      } else {
        // TODO: handle no file case
      }
    },
    [filesLoading, handleUpload, isOverFileLimit, toast]
  );

  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      accept: {
        "application/pdf": [".pdf"],
      },
    });

  const uploadInProgress =
    progress !== null && progress >= 0 && progress <= 100;

  const statusIcons: Record<StatusText, ReactNode> = {
    [StatusText.UPLOADING]: (
      <RocketIcon className="h-20 w-20 text-indigo-600" />
    ),
    [StatusText.UPLOADED]: (
      <CheckCircleIcon className="h-20 w-20 text-indigo-600" />
    ),
    [StatusText.SAVING]: <SaveIcon className="h-20 w-20 text-indigo-600" />,
    [StatusText.GENERATING]: (
      <HammerIcon className="h-20 w-20 text-indigo-600" />
    ),
  };

  return (
    <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto">
      {uploadInProgress && (
        <div className="mt-32 flex flex-col justify-center items-center gap-5">
          {progress < 100 && (
            <div
              className="radial-progress bg-indigo-300 text-white border-indigo-600 border-4"
              role="progressbar"
              style={{
                // @ts-expect-error without daisy ui
                "--value": progress,
                "--size": "12rem",
                "--thickness": "1.3rem",
              }}
            >
              {progress} %
            </div>
          )}

          {statusIcons[status!]}

          <p className="text-indigo-600 animate-pulse">
            {String(status ?? "")}
          </p>
        </div>
      )}

      {!uploadInProgress && (
        <div
          {...getRootProps()}
          className={`p-10 border-indigo-600 text-indigo-600 border-2 border-dashed mt-10 w-[90%] rounded-lg h-96 flex items-center justify-center ${
            isFocused || isDragAccept ? "bg-indigo-300" : "bg-indigo-100"
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <input {...getInputProps()} />
            {isDragActive ? (
              <>
                <RocketIcon className="h-20 w-20 animate-ping" />
                <p>Drop the files here ...</p>
              </>
            ) : (
              <>
                <CircleArrowDown className="h-20 w-20 animate-bounce" />
                <p>Drag n drop some files here, or click to select files</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
