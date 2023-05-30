import React from "react";

export default function Nap() {
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
                잠이 부족한 당신을 위해 준비했습니다. 자꾸만 졸게 되고 집중력이
                흐려질 때에는 꾸벅 꾸벅 졸기보단 짧은 낮잠으로 집중력과 효율을
                회복해보세요.
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
              <p className="text-lg font-medium">◼ 낮잠이 필요해 Nap</p>
              <p className="text-lg font-medium">◼ 오늘의 할일 브리핑</p>
              <p className="text-lg font-medium">◼ Music & Music Playlist</p>
            </div>
          </div>
          <div className="flex flex-col basis-2/3 p-3">
            <div className="flex flex-col mb-6">
              <p className="text-2xl font-semibold mb-3 bg-lime-200 px-2 py-1">
                ⯎ How to use
              </p>
              <div className="flex flex-col px-2">
                <p className="text-lg font-medium">
                  1. 10분, 15분, 26분, 30분 낮잠 가이드 영상 중 본인에게
                  맞는것을 선택해보세요. 브레이너제이의 수면여행 채널에 있는
                  낮잠 영상 재생으로 연결됩니다.
                </p>
                <p className="text-lg font-medium">
                  2. 편안한 낮잠을 위해서 낮잠이 시작될 때 방해금지 모드가
                  활성화됩니다. 낮잠 시간이 지난 후에는 자동으로 방해금지 모드를
                  해제합니다.
                </p>
                <p className="text-lg font-medium">
                  3. 단축어 실행시 선택한 낮잠 시간이 끝날 때 알람이 울릴 수
                  있도록 알람을 생성합니다.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-semibold mb-3 bg-lime-200 px-2 py-1  ">
                ⯎ Tip
              </p>
              <div className="flex flex-col px-2">
                <p className="text-lg font-lg-medium">
                  낮잠은 오후 1-3시 사이에 취하시기를 권장합니다 😴
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
