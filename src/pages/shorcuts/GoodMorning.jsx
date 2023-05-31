import React from "react";
import qr from "../../assets/images/qr_code/goodmorning.png";
export default function GoodMorning() {
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
                하루를 맞이하며 매일 아침 외출 전 꼭 하는 행동에는 '날씨
                확인하기'와 '오늘 해야 할일 확인하기'가 빠질 수 없습니다.
                수면모드 해제 자동화와 함께 사용하길 추천합니다.{" "}
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
              <p className="text-lg font-medium">◼ 날씨 브리핑</p>
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
                  1. 원하는 플리의 youtube 영상을 틀어서 공유 버튼을 눌러 url을
                  복사해주세요.
                </p>
                <p className="text-lg font-medium">
                  2. Music 버튼 > Edit > 플리 이름과 복사한 url을 적어서
                  추가해주세요.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-semibold mb-3 bg-lime-200 px-2 py-1  ">
                ⯎ Tip
              </p>
              <div className="flex flex-col px-2">
                <p className="text-lg font-lg-medium">
                  1. [ 자동화 : 수면 모드가 해제될 때 ⇒ 굿모닝 단축어 실행 ]을
                  하시면 기상 알람이 중단될 때 자동으로 굿모닝 단축어를 사용할
                  수 있습니다.
                </p>
                <p className="text-lg font-medium">
                  2. youtube premium을 사용하시는 분에게 최적화 되어있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
