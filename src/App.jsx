import { useState } from "react";

const App = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    if (!email) {
      alert("Email is required!");
    }
  };
  return (
    <main className={`flex items-center justify-center h-[100vh] flex-col`}>
      <div>
        <p>Email: {formValues.email}</p>
        <p>Password: {formValues.password}</p>
      </div>
      <div>
        <input
          type="email"
          onChange={(e) =>
            setFormValues({ email: e.target.value, ...formValues })
          }
        />
      </div>
      <div>
        <input
          type="password"
          onChange={(e) =>
            setFormValues({ password: e.target.value, ...formValues })
          }
        />
      </div>

      <button onClick={() => handleSubmit()}>submit</button>
    </main>
  );
};

export default App;
