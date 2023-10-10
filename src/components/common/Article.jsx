import React from "react";

export default function Article({ data, center }) {
  return (
    <div className="p-7 border-2 rounded-3xl">
      <img src={data.img} className="w-full max-md:p-5" alt="food" />
      <div className="pt-0 p-4">
        <div className="flex flex-col gap-3 my-5">
          <h3 className="md:text-xl text-heading font-bold max-md:text-center">
            {data.title}
          </h3>
          <p className="max-md:text-xs max-md:leading-5 md:leading-7">
            {data.content}
          </p>
        </div>
        <div className="mt-2 max-md:flex max-md:justify-center">
          <button
            className="border-2 md:border border-button text-button font-bold font-source-sans
              px-8 md:px-6 max-md:text-xs py-2 rounded-full"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
