import "./App.css";
import DateTime from "./components/DateTime";
import GoogleSearchBar from "./components/SearchBar";
import Morning from "./components/Morning";
import Block from "./components/Block";
import Profile from "./components/Profile";
import Afternoon from "./components/Afternoon";
import Night from "./components/Night";

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
        <Block blockName="아침(Start)">
          <Morning />
        </Block>

        <Block blockName="오후(Focus)">
          <Afternoon />
        </Block>

        <Block blockName="저녁(Review)">
          <Night />
        </Block>
      </div>
    </div>
  );
}

export default App;
