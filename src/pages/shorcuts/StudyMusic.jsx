import React from "react";

export default function StudyMusic() {
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
                여러분도 공부나 업무를 할 때 자주 듣는 플리를 가슴에 품고
                지내시나요? 때론 새로운 플리를 찾으러 유튜브에 들어갔는데 찾는
                것에 시간을 보내느라, 혹은 재밌어 보이는 영상이 있어 그걸 보다가
                공부/업무는 30분 뒤에 시작하는 당신을 위해 준비했습니다.
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
              <p className="text-lg font-medium">◼ study music</p>
              <p className="text-lg font-medium">◼ Study Music Playlist</p>
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
                  2. [✍🏻🎧] > Edit > 플리 이름과 복사한 url을 추가해주세요.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-semibold mb-3 bg-lime-200 px-2 py-1  ">
                ⯎ Tip
              </p>
              <div className="flex flex-col px-2">
                <p className="text-lg font-lg-medium">
                  [ 아이폰 > 설정 > 집중모드 > 방해금지모드 ]로 들어가서
                  방해금지모드일 때 알림 허용할 어플, 사람을 설정해보세요.
                  공부에 집중할 수 있는 환경을 만들 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
