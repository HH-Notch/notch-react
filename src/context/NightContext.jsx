import { createContext, useState } from "react";

export const NightContext = createContext();

export function NightProvider({ children }) {
  const [defaultMode, setDefaultMode] = useState(true);
  const offDefaultMode = () => setDefaultMode(false);
  const onDefaultMode = () => setDefaultMode(true);

  const [sleepMusicListMode, setSleepMusicListMode] = useState(false);
  const onSleepMusicListMode = () => setSleepMusicListMode(true);
  const offSleepMusicListMode = () => setSleepMusicListMode(false);
  const [sleepMusicListEditMode, setSleepMusicListEditMode] = useState(false);
  const onSleepMusicListEditMode = () => setSleepMusicListEditMode(true);
  const offSleepMusicListEditMode = () => setSleepMusicListEditMode(false);

  const goToDefault = () => {
    onDefaultMode();
    offSleepMusicListMode();
    offSleepMusicListEditMode();
  };
  const goToSleepMusicList = () => {
    offDefaultMode();
    onSleepMusicListMode();
    offSleepMusicListEditMode();
  };
  const goToSleepMusicListEdit = () => {
    offDefaultMode();
    offSleepMusicListMode();
    onSleepMusicListEditMode();
  };

  return (
    <NightContext.Provider
      value={{
        defaultMode,
        onDefaultMode,
        offDefaultMode,
        sleepMusicListMode,
        onSleepMusicListMode,
        offSleepMusicListMode,
        sleepMusicListEditMode,
        onSleepMusicListEditMode,
        offSleepMusicListEditMode,
        goToDefault,
        goToSleepMusicList,
        goToSleepMusicListEdit,
      }}
    >
      {children}
    </NightContext.Provider>
  );
}
