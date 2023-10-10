import React from "react";

export default function Article({ data, center }) {
  return (
    <div className="p-7 border max-md:border-[#373737] md:border-2 rounded-3xl">
      <img src={data.img} className="w-full max-md:p-5" alt="food" />
      <div className="pt-0 p-4">
        <div className="flex flex-col gap-3 my-5">
          <h3 className="font-poppins md:text-xl text-heading font-bold max-md:text-center max-md:leading-9">
            {data.title}
          </h3>
          <p className="font-open-sans max-md:text-xs max-md:leading-6 md:leading-7">
            {data.content}
          </p>
        </div>
        <div className="mt-2 max-md:flex max-md:justify-center">
          <button
            className="border-2 md:border border-button text-button tracking-[0.33px] md:tracking-wide 
            font-bold px-8 md:px-6 max-md:text-xs py-2 rounded-full font-source-sans"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
