const ChatToFilePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  return <div>ChatToFilePage: {id}</div>;
};

export default ChatToFilePage;
