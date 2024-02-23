import React, { useState } from "react";
import Confetti from "react-confetti";

const App = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (password1 === "pass1" && password2 === "pass2") {
      setIsLoggedIn(true);
    } else {
      setError(true);
    }
  };

  const renderContent = () => {
    if (!isLoggedIn) {
      return (
        <div>
          <p>
            Nicht schlecht, ihr Flachwasserpfeifen seid wahrlich clever! Doch
            wie steht es um den Teamspirit der Crew? Piratinnen, Piraten,
            Meerjungfrauen und Wassermänner, nur wo ihr getrennt seid, werdet
            ihr zusammen weiterkommen! P.S.: Und wisst ihr eigentlich, was das
            Lieblingsessen von Piraten ist?
          </p>
          <input
            type="password"
            placeholder="Erstes Passwort"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
          <input
            type="password"
            placeholder="Zweites Passwort"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <button onClick={handleLogin}>Abtauchen!</button>
          {error && <p>Satz mit X, das war wohl nix</p>}
        </div>
      );
    } else {
      return (
        <div>
          <p>Luftballons können kaputt gehen...</p>
          <Confetti />
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
};

export default App;
