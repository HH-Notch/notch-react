import { createContext, useState } from "react";

export const MorningContext = createContext();

export function MorningProvider({ children }) {
  const [defaultMode, setDefaultMode] = useState(true);
  const offDefaultMode = () => setDefaultMode(false);
  const onDefaultMode = () => setDefaultMode(true);

  const [musicListMode, setMusicListMode] = useState(false);
  const onMusicListMode = () => setMusicListMode(true);
  const offMusicListMode = () => setMusicListMode(false);
  const [musicEditMode, setMusicEditMode] = useState(false);
  const onMusicEditMode = () => setMusicEditMode(true);
  const offMusicEditMode = () => setMusicEditMode(false);

  const [destListMode, setDestListMode] = useState(false);
  const onDestListMode = () => setDestListMode(true);
  const offDestListMode = () => setDestListMode(false);
  const [destEditMode, setDestEditMode] = useState(false);
  const onDestEditMode = () => setDestEditMode(true);
  const offDestEditMode = () => setDestEditMode(false);

  const goToDefault = () => {
    onDefaultMode();
    offMusicListMode();
    offMusicEditMode();
    offDestListMode();
    offDestEditMode();
  };
  const goToMusicList = () => {
    offDefaultMode();
    onMusicListMode();
    offMusicEditMode();
    offDestListMode();
    offDestEditMode();
  };
  const goToMusicEdit = () => {
    offDefaultMode();
    offMusicListMode();
    onMusicEditMode();
    offDestListMode();
    offDestEditMode();
  };

  const goToDestList = () => {
    offDefaultMode();
    offMusicListMode();
    offMusicEditMode();
    onDestListMode();
    offDestEditMode();
  };

  const goToDestEdit = () => {
    offDefaultMode();
    offMusicListMode();
    offMusicEditMode();
    offDestListMode();
    onDestEditMode();
  };

  const [weatherBrief, setWeatherBrief] = useState(true);
  const handleWeatherBrief = () => {
    setWeatherBrief((prev) => !prev);
  };

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
        destListMode,
        onDestListMode,
        offDestListMode,
        destEditMode,
        onDestEditMode,
        offDestEditMode,
        goToDefault,
        goToMusicList,
        goToMusicEdit,
        goToDestList,
        goToDestEdit,
        weatherBrief,
        setWeatherBrief,
        handleWeatherBrief,
      }}
    >
      {children}
    </MorningContext.Provider>
  );
}
