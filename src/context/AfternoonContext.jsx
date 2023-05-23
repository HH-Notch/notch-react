import { createContext, useState } from "react";

export const AfternoonContext = createContext();

export function AfternoonProvider({ children }) {
  const [defaultMode, setDefaultMode] = useState(true);
  const offDefaultMode = () => setDefaultMode(false);
  const onDefaultMode = () => setDefaultMode(true);

  const [studyMusicListMode, setStudyMusicListMode] = useState(false);
  const onStudyMusicListMode = () => setStudyMusicListMode(true);
  const offStudyMusicListMode = () => setStudyMusicListMode(false);
  const [studyMusicListEditMode, setStudyMusicListEditMode] = useState(false);
  const onStudyMusicListEditMode = () => setStudyMusicListEditMode(true);
  const offStudyMusicListEditMode = () => setStudyMusicListEditMode(false);

  const goToDefault = () => {
    onDefaultMode();
    offStudyMusicListMode();
    offStudyMusicListEditMode();
  };
  const goToStudyMusicList = () => {
    offDefaultMode();
    onStudyMusicListMode();
    offStudyMusicListEditMode();
  };
  const goToStudyMusicListEdit = () => {
    offDefaultMode();
    offStudyMusicListMode();
    onStudyMusicListEditMode();
  };

  return (
    <AfternoonContext.Provider
      value={{
        defaultMode,
        onDefaultMode,
        offDefaultMode,
        studyMusicListMode,
        onStudyMusicListMode,
        offStudyMusicListMode,
        studyMusicListEditMode,
        onStudyMusicListEditMode,
        offStudyMusicListEditMode,
        goToDefault,
        goToStudyMusicList,
        goToStudyMusicListEdit,
      }}
    >
      {children}
    </AfternoonContext.Provider>
  );
}
