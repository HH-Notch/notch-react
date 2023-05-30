import React from "react";

export default function TodayReminder() {
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
                우리는 해야할 일과 캘린더 일정을 확인하는 행동을 하루에 몇번이나
                할까요? 또한 할일과 일정을 기록해두는 서비스가 서로 다른 경우가
                대부분입니다. 2개의 어플을 확인해야 하는 것을 한번의 클릭으로
                해결합니다.
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
              <p className="text-lg font-medium">
                ◼ 일정/todo 다시 브리핑 받기
              </p>
            </div>
          </div>
          <div className="flex flex-col basis-2/3 p-3">
            <div className="flex flex-col mb-6">
              <p className="text-2xl font-semibold mb-3 bg-lime-200 px-2 py-1">
                ⯎ How to use
              </p>
              <div className="flex flex-col px-2">
                <p className="text-lg font-medium">
                  언제든 미리 알림과 캘린더에 데이터가 추가되면, 단축어 클릭시
                  그 데이터를 알려줍니다. 단지 일정/todo 다시 브리핑 받기
                  스위치를 켜주세요 !{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-semibold mb-3 bg-lime-200 px-2 py-1  ">
                ⯎ Tip
              </p>
              <div className="flex flex-col px-2">
                <p className="text-lg font-lg-medium">
                  (추천 상황) 에어팟을 끼고 지내다가 문득 리마인드 받기 원할 때
                  이 단축어를 사용해보세요 ! 👍🏻
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
