import "./App.css";
import DateTime from "./components/DateTime";
import GoogleSearchBar from "./components/SearchBar";
import Block from "./components/Block";

function App() {
  return (
    <div className="">
      <div className="flex flex-col justify-center">
        <DateTime />
        <GoogleSearchBar />
        <Block></Block>
      </div>
    </div>
  );
}

export default App;
