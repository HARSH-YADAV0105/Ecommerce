import React from "react";

const MoreButton = ({ content }) => {
  return (
    <div>
      <div className="ViewAllButton-Outer flex justify-center items-center">
        <button className="rounded-[62px] px-[54px] py-[16px] border border-black/10 text-[16px]">
          {content}
        </button>
      </div>
    </div>
  );
};

export default MoreButton;
