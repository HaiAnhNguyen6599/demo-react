// import React, { useState } from "react";

// const LoginForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const correctName = "anh";
//   const correctEmail = "anhthfpt98@gmail.com";
//   const correctPassword = "123";

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (name === correctName && email === correctEmail && password === correctPassword) {
//       setIsLoggedIn(true);
//       setErrorMessage("");
//     } else {
//       setErrorMessage("Invalid name, email, or password.");
//       setIsLoggedIn(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Login Form</h2>
//       {isLoggedIn ? (
//         <h3 style={styles.welcome}>Welcome, {name}!</h3>
//       ) : (
//         <form onSubmit={handleLogin} style={styles.form}>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             style={styles.input}
//           />
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={styles.input}
//           />
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={styles.input}
//           />
//           <button type="submit" style={styles.button}>Login</button>
//           {errorMessage && <div style={styles.error}>{errorMessage}</div>}
//         </form>
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: "400px",
//     margin: "30px auto",
//     textAlign: "center",
//     fontFamily: "Arial, sans-serif",
//   },
//   title: {
//     fontSize: "26px",
//     marginBottom: "20px",
//     color: "#333",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   input: {
//     width: "80%",
//     padding: "10px",
//     margin: "10px 0",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     fontSize: "16px",
//   },
//   button: {
//     width: "50%",
//     padding: "10px",
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
//   error: {
//     color: "red",
//     marginTop: "10px",
//   },
//   welcome: {
//     fontSize: "22px",
//     color: "#4CAF50",
//   },
// };

// export default LoginForm;

import React, { useState } from "react";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const correctName = "anh";
  const correctEmail = "hai@gmail.com";
  const correctPassword = "123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      name === correctName &&
      email === correctEmail &&
      password === correctPassword
    ) {
      setIsLoggedIn(true);
      setErrorMessage("");
    } else {
      setIsLoggedIn(false);
      setErrorMessage("Invalid name, email or passowrd");
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      {isLoggedIn ? (
        <div>Welcome, {name}</div>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          ></input>
          <br></br>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          ></input>
          <br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          ></input>
          <button type="submit">Login</button>
          <br></br>
          {errorMessage && <div>{errorMessage}</div>}
        </form>
      )}
    </div>
  );
};

export default LoginForm;
