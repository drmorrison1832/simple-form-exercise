import "./App.css";
import { useState } from "react";
import Register from "./components/Register";
import Edit from "./components/Edit";

const App = () => {
  const [editStatus, setEditStatus] = useState(true);
  const edit = [editStatus, setEditStatus];

  const [name, setName] = useState("");
  const nameGlobal = [name, setName];

  const [email, setEmail] = useState("");
  const emailGlobal = [email, setEmail];

  const [password, setPassword] = useState("");
  const passwordGlobal = [password, setPassword];

  const [confirmPassword, setConfirmPassword] = useState("");
  const confirmPasswordGlobal = [confirmPassword, setConfirmPassword];

  return (
    <main>
      <div className="container">
        {editStatus ? (
          <Register
            edit={edit}
            variablesGlobal={{
              nameGlobal,
              emailGlobal,
              passwordGlobal,
              confirmPasswordGlobal,
            }}
          />
        ) : (
          <Edit
            edit={edit}
            variablesGlobal={{
              nameGlobal,
              emailGlobal,
              passwordGlobal,
              confirmPasswordGlobal,
            }}
          />
        )}
      </div>
    </main>
  );
};

export default App;
