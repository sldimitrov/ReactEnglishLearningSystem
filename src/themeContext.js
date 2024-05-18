import React from "react";
import { useState, useContext } from "react";

const WordsContext = React.createContext();

export function useWordsContext() {
  return useContext(WordsContext);
}

export function ThemeProvider({ children }) {
  /* This function packs all the required state and combines it into a useful ThemeProvider.
   That allow components to use state very comfortable by just importing it. */
  const [newWords, setNewWords] = useState([]);

  return (
    <WordsContext.Provider value={[newWords, setNewWords]}>
      {children}
    </WordsContext.Provider>
  );
}
