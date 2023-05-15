import "./App.css";
import DateTime from "./components/DateTime";
import GoogleSearchBar from "./components/SearchBar";
import MorningBlock from "./components/MorningBlock";
import Block from "./components/Block";
import Profile from "./components/Profile";
import Morning from "./components/Morning";

function App() {
  return (
    <div className="bg-lime-100 w-screen h-screen flex flex-col p-5">
      <div className="flex justify-end">
        <Profile />
      </div>
      <DateTime />
      <div className="flex justify-center items-center my-5">
        <GoogleSearchBar />
      </div>
      <div className="flex justify-center items-center">
        <Block />
        <MorningBlock />
        <Morning />
        <Block />
      </div>
    </div>
  );
}

export default App;
