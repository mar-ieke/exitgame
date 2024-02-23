import React, { useState } from "react";
import Confetti from "react-confetti";

const App = () => {
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (pass1 === "password1" && pass2 === "password2") {
      setIsLoggedIn(true);
    } else {
      setError("Satz mit X, das war wohl nix");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <p>Einführung</p>
          <input
            type="password"
            placeholder="Erstes Passwort"
            value={pass1}
            onChange={(e) => setPass1(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Zweites Passwort"
            value={pass2}
            onChange={(e) => setPass2(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>Abtauchen!</button>
          {error && <p>{error}</p>}
        </div>
      ) : (
        <div>
          <p>Platzhalter</p>
          <Confetti />
          <button onClick={handleLogout}>Ausloggen</button>
        </div>
      )}
    </div>
  );
};

export default App;
