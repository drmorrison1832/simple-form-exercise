const Edit = (props) => {
  const editStatus = props.edit[0];
  const setEditStatus = props.edit[1];

  const [name, setName] = props.variablesGlobal.nameGlobal;
  const [email, setEmail] = props.variablesGlobal.emailGlobal;
  const [password, setPassword] = props.variablesGlobal.passwordGlobal;

  return (
    <>
      <h1>Results</h1>
      <div>
        <p>Nom : {name}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
      </div>
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
