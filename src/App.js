import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alldata, setAllData] = useState([]);

  const submitform = (event) => {
    event.preventDefault();
    const data = { email: email, password: password };
    setAllData([...alldata, data]);
    console.log("{ email }, { password }");
  };

  return (
    <>
      <form action="" onSubmit={submitform}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          autoComplete="off"
          value={email}
          placeholder="Enter your Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}></input>

        <label htmlFor="password">Password</label>
        <input
          name="password"
          id="password"
          autoComplete="off"
          value={password}
          placeholder="Enter the Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"></input>
        <button>Submit</button>
      </form>

      <div>
        {alldata.map((val) => {
          return (
            <div>
              <p>{val.email}</p>
              <p>{val.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
