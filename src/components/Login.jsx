import { useState } from "react";
// Getting user input below 3:35

export default function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Your email is ${enteredEmail}`);
  }

  function handleEmailChange(event) {
    setEnteredEmail(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleEmailChange}
            value={enteredEmail}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
        {/* Removed type and onClick */}
        {/* listener will be above in the Form */}
      </p>
    </form>
  );
}
