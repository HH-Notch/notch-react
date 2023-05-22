import { createContext, useState } from "react";

export const MorningContext = createContext();

export function MorningProvider({ children }) {
  const [defaultMode, setDefaultMode] = useState(true);
  const offDefaultMode = () => {
    setDefaultMode(false);
  };
  const onDefaultMode = () => {
    setDefaultMode(true);
  };

  const [musicListMode, setMusicListMode] = useState(true);
  const onMusicListMode = () => {
    setMusicListMode(true);
  };
  const offMusicListMode = () => {
    setMusicListMode(false);
  };

  const [musicEditMode, setMusicEditMode] = useState(true);
  const onMusicEditMode = () => setMusicEditMode(true);
  const offMusicEditMode = () => setMusicEditMode(false);

  return (
    <MorningContext.Provider
      value={{
        defaultMode,
        onDefaultMode,
        offDefaultMode,
        musicListMode,
        onMusicListMode,
        offMusicListMode,
        musicEditMode,
        onMusicEditMode,
        offMusicEditMode,
      }}
    >
      {children}
    </MorningContext.Provider>
  );
}
