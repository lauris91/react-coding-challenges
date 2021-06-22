import React, { useState } from "react";

export default function App({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark-mode" : ""}`}>
      {React.cloneElement(children, {
        darkMode: darkMode,
        setDarkMode: () => setDarkMode(!darkMode),
      })}
    </div>
  );
}
