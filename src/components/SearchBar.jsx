import React from "react";

export default function GoogleSearchBar() {
  return (
    <>
      <div className="bg-black">
        <form action="https://www.google.com/search" method="GET">
          <input
            className="w-40 h-20 bg-slate-300 rounded-full "
            type="text"
            name="q"
            placeholder="Google 검색 또는 URL 입력"
          />
        </form>
      </div>

      <div className="w-40 h-20 bg-black text-white">야호</div>
    </>
  );
}
