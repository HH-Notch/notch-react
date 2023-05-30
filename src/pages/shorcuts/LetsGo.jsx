import React from "react";

export default function LetsGo() {
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
                우리는 집에서 나설 때 습관적으로 이어폰을 끼고 듣고 싶은 노래를
                재생하기 & 지도 어플로 목적지까지 가는 길 찾기 행동을 합니다.
                피곤한 아침, 내가 좋아하는 음악을 들으며 목적지까지 가는 길을
                바로 확인해 하루를 기분 좋게 시작해보세요.
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
              <p className="text-lg font-medium">◼ 목적지까지 길찾기</p>
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
                  1. 원하는 플리의 youtube 영상을 틀어서 공유 버튼을 눌러 url을
                  복사해주세요.
                </p>
                <p className="text-lg font-medium">
                  2. Music 버튼 > Edit > 플리 이름과 복사한 url을 적어서
                  추가해주세요.
                </p>
                <p className="text-lg font-medium">
                  3. 🚌 > Edit > 자주 가는 목적지 이름과 주소를 추가하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
