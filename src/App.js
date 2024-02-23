import React, { useState } from "react";
import Confetti from "react-confetti";
import "./App.css"; // Import CSS file for styling

const App = () => {
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (pass1 === "ja" && pass2 === "ok") {
      setIsLoggedIn(true);
    } else {
      setError("So werdet ihr den Schatz niemald finden!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      {!isLoggedIn ? (
        <div className="login-container">
          <p className="intro">
            Nicht schlecht, ihr Flachwasserpfeifen seid wahrlich clever! Doch
            wie steht es um den Teamspirit der Crew? Piratinnen, Piraten,
            Meerjungfrauen und Wassermänner, nur wo ihr getrennt seid, werdet
            ihr zusammen weiterkommen! P.S.: Und wisst ihr eigentlich, was das
            Lieblingsessen von Piraten ist?
          </p>
          <input
            type="password"
            className="password-input"
            placeholder="Erstes Passwort"
            value={pass1}
            onChange={(e) => setPass1(e.target.value)}
          />
          <br />
          <input
            type="password"
            className="password-input"
            placeholder="Zweites Passwort"
            value={pass2}
            onChange={(e) => setPass2(e.target.value)}
          />
          <br />
          <button className="login-button" onClick={handleLogin}>
            Abtauchen!
          </button>
          {error && <p className="error-message">{error}</p>}
        </div>
      ) : (
        <div className="loggedin-container">
          <p className="loggedin-text">Luftballons können kaputt gehen...</p>
          <Confetti />
          <button className="logout-button" onClick={handleLogout}>
            Fertig!
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
