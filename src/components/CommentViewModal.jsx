const CommentViewModal = (props) => {
  const { viewComment, setViewComment, comment } = props;
  const handleCloseBtn = () => {
    setViewComment(!viewComment);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center xs:max-md:p-2">
      <div className="bg-white text-black rounded-lg lg:p-6 md:p-6 md:w-1/2 lg:w-1/2 xs:max-md:p-2 xs:max-sm:w-max">
        {comment ? (
          <p>{comment}</p>
        ) : (
          <p>No comments on this post, add a comment ...</p>
        )}

        <button
          className="px-4 py-2 bg-yellow-400 text-black rounded mt-8 hover:bg-black hover:text-white"
          onClick={handleCloseBtn}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CommentViewModal;
