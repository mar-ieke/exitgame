import React, { useState } from "react";
import Confetti from "react-confetti";

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
    <div>
      {!isLoggedIn ? (
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
          <p>Luftballons können kaputt gehen...</p>
          <Confetti />
          <button onClick={handleLogout}>Fertig!</button>
        </div>
      )}
    </div>
  );
};

export default App;
