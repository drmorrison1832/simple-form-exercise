import { useState } from "react";

const Register = (props) => {
  const editStatus = props.edit[0];
  const setEditStatus = props.edit[1];

  const [name, setName] = props.variablesGlobal.nameGlobal;

  const [email, setEmail] = props.variablesGlobal.emailGlobal;

  const [password, setPassword] = props.variablesGlobal.passwordGlobal;
  const [confirmPassword, setConfirmPassword] =
    props.variablesGlobal.confirmPasswordGlobal;

  const handleChange = (event) => {
    const { id, value } = event.target;
    switch (id) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirm-password":
        setConfirmPassword(value);
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.defaultPrevented);
    setEditStatus(false);
    alert("sent");
  };

  return (
    <>
      <h1>Create account</h1>

      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          placeholder="Jean Dupont"
          type="text"
          name="Name"
          value={name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="jeandupont@lereacteur.io"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          placeholder="admin"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <label htmlFor="confirm-password">Confirm password</label>
        <input
          id="confirm-password"
          placeholder="admin"
          type="password"
          name="confirm-password"
          value={confirmPassword}
          onChange={handleChange}
        />

        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
