import React from "react";

export default function WhenHaveToSleep() {
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
                새벽 늦게 자는 날이 많은 사람들을 위해서 만들었습니다. 비록
                할일이 많아 늦게 자지만, 그럼에도 수면 싸이클을 확보하여
                조금이나마 질 좋은 잠을 잤으면 합니다. 이 단축어는 Notch의
                세팅과 연결되어 있지 않은 보너스 블록입니다. 자동화된 삶을
                구성하기 위한 기능을 따로 제작하여 제공하며, 추후 Notch
                시스템과도 연동될 확장성을 추구합니다.
              </p>
            </div>
          </div>
          <div className="flex basis-1/4 py-3 pr-3">
            <img alt="" className="w-full" />
          </div>
        </div>
        <div className="w-full flex">
          <div className="flex flex-col p-3">
            <div className="flex flex-col mb-6">
              <p className="text-2xl font-semibold mb-3 bg-lime-200 px-2 py-1">
                ⯎ How to use
              </p>
              <div className="flex flex-col px-2">
                <p className="text-lg font-medium">
                  1. 일어나야 하는 시간을 입력해주세요.
                </p>
                <p className="text-lg font-medium">
                  2. 수면 싸이클에 맞추어 3시간부터 9시간까지 1시간 반 단위로
                  구성된 희망하는 수면시간을 선택해주세요.
                </p>
                <p className="text-lg font-medium">
                  2. 수면 싸이클에 맞추어 3시간부터 9시간까지 1시간 반 단위로
                  구성된 희망하는 수면시간을 선택해주세요.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-semibold mb-3 bg-lime-200 px-2 py-1  ">
                ⯎ Tip
              </p>
              <div className="flex flex-col px-2">
                <p className="text-lg font-lg-medium">
                  밤샘이 각인날 .. 그럼에도 수면 사이클을 확보하고 싶은 당신에게
                  적극 추천합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
