import React from "react";
import qr from "../../assets/images/qr_code/readyforTomorrow.png";

export default function WhatIsPrepareNextDay() {
  return (
    <>
      <div className="flex flex-col p-3 ">
        <div className="w-full flex">
          <div className="flex flex-col basis-3/4 p-3">
            <div className="flex flex-col ">
              <p className="text-2xl font-semibold mb-3 bg-lime-200 px-2 py-1 ">
                {" "}
                ⯎ Concept
              </p>
              <p className="text-lg font-medium px-2">
                생산성을 유지한다는 것은 오늘 할 일이 무엇인지 아는 것 이상으로
                다음에 무엇이 올지, 현재의 설정이 다음의 것과 어떻게 상호
                작용하는지 아는 것입니다. 규칙적인 수면습관을 사수하면서 생산성
                있게 하루를 마무리할 수 있게 합니다.
              </p>
            </div>
          </div>
          <div className="flex basis-1/4 py-3 pr-3">
            <img src={qr} alt="" className="w-full" />
          </div>
        </div>
        <div className="w-full flex">
          <div className="flex flex-col basis-1/3 p-3">
            <div className="text-2xl font-semibold mb-3 bg-lime-200 px-2 py-1">
              ⯎ Notch
            </div>
            <div className="flex flex-col px-2">
              <p className="text-lg font-medium">◼ 매일 이정도는 자야합니다</p>
            </div>
          </div>
          <div className="flex flex-col basis-2/3 p-3 ">
            <div className="flex flex-col mb-6">
              <p className="text-2xl font-semibold mb-3 bg-lime-200 px-2 py-1">
                ⯎ How to use
              </p>
              <div className="flex flex-col px-2">
                <p className="text-lg font-medium">
                  1. 다음날 계획된 첫번째 일정의 시간을 기준으로 목표 수면
                  시간을 충족하기 위해 몇시에 자야하는지 알려줍니다.
                </p>
                <p className="text-lg font-medium">
                  2. 계획된 일정이 없다면, 원하는 시간을 입력 받아서 몇시에
                  자야하는지 알려줍니다.
                </p>
                <p className="text-lg font-medium">
                  3. 원한다면 다음날 계획된 첫번째 일정의 시간을 기준으로 알람을
                  생성할 수 있습니다.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-semibold mb-3 bg-lime-200 px-2 py-1  ">
                ⯎ Tip
              </p>
              <div className="flex flex-col overflow-scroll ">
                <p className="text-lg font-lg-medium px-2">
                  일반적으로 일상 생활을 잘 유지하기 위해서 하루 6~8시간 정도의
                  수면을 취하는 것이 좋습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
