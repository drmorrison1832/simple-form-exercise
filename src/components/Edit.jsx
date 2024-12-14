const Edit = (props) => {
  const editStatus = props.edit[0];
  const setEditStatus = props.edit[1];

  return (
    <>
      <p>edit</p>
      <button
        onClick={() => {
          setEditStatus(true);
        }}
      >
        Edit your information
      </button>
    </>
  );
};

export default Edit;
