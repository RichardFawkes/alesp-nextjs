import React, { useState } from "react";

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div>
      <button onClick={handleToggle}>Alternar tema</button>
      <div
        style={{
          backgroundColor: isDarkTheme ? "#333" : "#fff",
          color: isDarkTheme ? "#fff" : "#333",
          height: "100vh",
          width: "100%",
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        <h1>{isDarkTheme ? "Modo Escuro" : "Modo Claro"}</h1>
        <p>Clique no botão acima para alternar o tema.</p>
      </div>
    </div>
  );
};

export default ThemeToggle;
