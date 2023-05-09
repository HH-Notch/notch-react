import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function GoogleSearchBar() {
  return (
    <>
      <form action="https://www.google.com/search" method="GET">
        <div
          className="bg-white rounded-full px-3 flex  items-center"
          style={{ width: "580px" }}
        >
          <AiOutlineSearch className="text-xl mx-3" />

          <input
            className="focus:outline-none mr-3 pb-1 text-base"
            type="text"
            name="q"
            placeholder="Google 검색 또는 URL 입력"
            style={{ width: "500px", height: "50px" }}
          />
        </div>
      </form>
    </>
  );
}
