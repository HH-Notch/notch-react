import React from "react";
import qr from "../../assets/images/qr_code/diary.png";

export default function Diary() {
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
                "일기를 쓰고 싶은데, 내가 오늘을 보내며 쌓인 데이터들도 같이
                정리하고 싶어."와 같은 생각 해본적 있으신가요? 건강 정보, 할일,
                사진을 KPT 형식의 일기와 함께 기록할 수 있습니다. 침대에 누워
                음성 또는 텍스트로 일기를 남겨보세요. 작성이 완료시 꿀잠 잘 수
                있는 수면 사운드가 재생됩니다.{" "}
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
              <p className="text-lg font-medium">◼ 건강 정보 브리핑</p>
              <p className="text-lg font-medium">◼ 오늘 todo 달성률</p>
              <p className="text-lg font-medium">◼ 일기쓰기</p>
              <p className="text-lg font-medium">
                ◼ Deep Sleep Sound & Sleep Playlist
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
                  1. typing / recording 중 한가지 버전으로 일기를 기록할 수
                  있습니다.
                </p>
                <p className="text-lg font-medium">
                  2. 일기에 사진을 첨부할 수 있으니 단축어 실행시 원하는 옵션을
                  선택하세요 !
                </p>
              </div>
            </div>
            <div className="flex flex-col px-2">
              <p className="text-2xl font-semibold mb-3 bg-lime-200 px-2 py-1  ">
                ⯎ Tip
              </p>
              <div className="flex flex-col">
                <p className="text-lg font-lg-medium">
                  1. 누워서 음성으로 일기를 적을 수 있다는게 얼마나 행복하세요 ~
                </p>
                <p className="text-lg font-medium">
                  2. 메모장에 쌓이는 일기를 원하는 폴더에 저장해보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
