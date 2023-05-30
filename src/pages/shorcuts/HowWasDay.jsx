import React from "react";

export default function HowWasDay() {
  return (
    <>
      <div className="h-full flex flex-col p-3">
        <div className="w-full flex">
          <div className="flex flex-col basis-3/4 p-3">
            <div className="flex flex-col ">
              <p className="text-2xl font-semibold mb-3 bg-lime-200 px-2 py-1 ">
                {" "}
                ⯎ Concept
              </p>
              <p className="text-lg font-medium px-2">
                매일 매일이 바쁜 하루, 그저 할일 체크박스를 지워버리는 식으로
                하루가 스쳐갈 때도 많습니다. 항상 완벽한 하루를 보내는 것은
                어렵지만 괜찮습니다. 오늘보다 더 멋진 내일을 만들어보세요.
              </p>
            </div>
          </div>
          <div className="flex basis-1/4 py-3 pr-3">
            <img alt="" className="w-full" />
          </div>
        </div>
        <div className="w-full flex">
          <div className="flex flex-col basis-1/3 p-3">
            <div className="text-2xl font-semibold mb-3 bg-lime-200 px-2 py-1">
              ⯎ Notch
            </div>
            <div className="flex flex-col px-2">
              <p className="text-lg font-medium">◼ 건강 정보 브리핑</p>
              <p className="text-lg font-medium">◼ 오늘 todo 달성률</p>
              <p className="text-lg font-medium">◼ 내일 일정 브리핑</p>
            </div>
          </div>
          <div className="flex flex-col basis-2/3 p-3">
            <div className="flex flex-col mb-6">
              <p className="text-2xl font-semibold mb-3 bg-lime-200 px-2 py-1">
                ⯎ How to use
              </p>
              <div className="flex flex-col px-2">
                <p className="text-lg font-medium">
                  1. 단축어 다운 받은 후, 단축어 로직을 열어서 "건강 정보"에
                  사용자의 디바이스를 등록해주세요.
                </p>
                <p className="text-lg font-medium">
                  2. 단축어 실행시 Siri 음성 기능으로 오늘 하루가 어땠는지 보고
                  받으세요.
                </p>
                <p className="text-lg font-medium">
                  3. 오늘 하루 어땠는지 팝업으로도 남겨드립니다.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-semibold mb-3 bg-lime-200 px-2 py-1  ">
                ⯎ Tip
              </p>
              <div className="flex flex-col px-2">
                <p className="text-lg font-lg-medium">
                  오늘 todo 달성률이 100%일 때 어떤 알람이 재생되는지
                  기대해주세요 !!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
