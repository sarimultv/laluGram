const CommentModal = (props) => {
  const {
    isOpen,
    setIsOpen,
    numberOfComment,
    setNumberOfComment,
    commentInput,
    setComment,
  } = props;

  const handleCloseBtn = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmitBtn = () => {
    setIsOpen(!isOpen);
    if (commentInput.current.value) setComment(commentInput.current.value);
    return setNumberOfComment(numberOfComment + 1);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center xs:max-md:p-2">
      <div className="bg-white text-black rounded-lg lg:p-6 md:p-6 md:w-1/2 lg:w-1/2 xs:max-md:p-2 xs:max-sm:w-max">
        <textarea
          ref={commentInput}
          rows={5}
          className="rounded-lg border border-black p-2 outline-gray-700 w-full bg-transparent"
          type="text"
          placeholder="Add a comment ..."
        />

        <button
          className="px-4 py-2 bg-yellow-400 text-black rounded mr-2 hover:bg-black hover:text-white"
          onClick={handleSubmitBtn}
        >
          Submit
        </button>
        <button
          className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-black hover:text-white"
          onClick={handleCloseBtn}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CommentModal;
