import React, { useState } from "react";
import BlockItem from "./BlockItem";
import { ThemeProvider } from "@material-tailwind/react";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

export default function Night() {
  const [reviewToday, setReviewToday] = useState({
    id: "reviewToday",
    text: "오늘 할일 수행률",
    on: false,
  });
  const handleReviewToday = () => {
    console.log("reviewToday.on", reviewToday.on);
    setReviewToday((prev) => ({ ...prev, on: !prev.on }));
  };

  const [aboutTomorrow, setAboutTomorrow] = useState({
    id: "aboutTomorrow",
    text: "오늘 할일 수행률",
    on: false,
  });
  const handleAboutTomorrow = () => {
    console.log("aboutTomorrow.on", aboutTomorrow.on);
    setAboutTomorrow((prev) => ({ ...prev, on: !prev.on }));
  };

  const [health, setHealth] = useState({
    id: "health",
    text: "몇 걸음 걸었을까",
    on: false,
  });
  const handleHealth = () => {
    console.log("health.on", health.on);
    setHealth((prev) => ({ ...prev, on: !prev.on }));
  };

  const [question, setQuestion] = useState({
    id: "question",
    text: "생각해 볼 질문",
    on: false,
  });
  const handleQuestion = () => {
    console.log("question.on", question.on);
    setQuestion((prev) => ({ ...prev, on: !prev.on }));
  };

  const [brainer, setBrainer] = useState({
    id: "brainer",
    text: "브레이너제이 수면 영상",
    on: false,
    video_name: "",
    video_url: "",
  });
  const handleBrainer = () => {
    console.log("brainer.on", brainer.on);
    setBrainer((prev) => ({ ...prev, on: !prev.on }));
  };
  const [brainerOptions, setBrainerOptions] = useState([
    { name: "옵션 1", url: "주소 1" },
    { name: "옵션 2", url: "주소 2" },
    { name: "옵션 3", url: "주소 3" },
  ]);
  const handleBrainerOption = (event) => {
    const selectedIndex = event.target.selectedIndex;
    setBrainer((prev) => ({
      ...prev,
      video_name: brainerOptions[selectedIndex].name,
      video_url: brainerOptions[selectedIndex].url,
    }));
    console.log("brainer 값은?", brainer);
  };
  const handleBrainerAddOption = () => {
    // const newOption = {name: }
    // option을 form으로 입력 받는거 구현한 다음에 할 수 있음
    console.log("야호");
  };

  const customLabelTheme = {
    switch: {
      styles: {
        base: {
          root: {
            // blockItem CSS
            display: "flex",
            alignItems: "items-center",
            flexDirection: "flex-row-reverse",
            justifyContent: "justify-between",
            marginBottom: "mb-3",
          },
        },
      },
    },
  };

  const containerProps = {
    className: "mr-2",
  };

  const labelProps = { className: "" };

  return (
    <>
      <ThemeProvider
        style={{ justifyContent: "space-between" }}
        value={customLabelTheme}
      >
        <BlockItem
          id={health.id}
          checked={health.on}
          onChangeFunc={handleHealth}
          text={health.text}
          containerProps={containerProps}
          labelProps={labelProps}
          // select_destination=""
        />
        <BlockItem
          id={reviewToday.id}
          checked={reviewToday.on}
          onChangeFunc={handleReviewToday}
          text={reviewToday.text}
          containerProps={containerProps}
          labelProps={labelProps}
          // select_destination=""
        />
        <BlockItem
          id={aboutTomorrow.id}
          checked={aboutTomorrow.on}
          onChangeFunc={handleAboutTomorrow}
          text={aboutTomorrow.text}
          containerProps={containerProps}
          labelProps={labelProps}
          // select_destination=""
        />
        <BlockItem
          id={question.id}
          checked={question.on}
          onChangeFunc={handleQuestion}
          text={question.text}
          containerProps={containerProps}
          labelProps={labelProps}
          // select_destination=""
        />
        <BlockItem
          id={brainer.id}
          checked={brainer.on}
          onChangeFunc={handleBrainer}
          text={brainer.text}
          containerProps={containerProps}
          labelProps={labelProps}
          select_brainer={
            <>
              <div className="flex">
                <div>
                  <select onChange={handleBrainerOption}>
                    {brainerOptions.map((option, index) => (
                      <option
                        key={index}
                      >{`${option.name}-${option.url}`}</option>
                    ))}
                  </select>
                </div>
                <button onClick={handleBrainerAddOption}>
                  <AiFillPlusCircle className="text-xl" />
                </button>

                <button onClick={handleBrainerAddOption}>
                  <AiFillMinusCircle className="text-xl" />
                </button>
                {/* <IconButton variant="outlined"></IconButton> */}
              </div>
            </>
          }
        />
      </ThemeProvider>
    </>
  );
}
