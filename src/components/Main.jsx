import React, { useEffect, useState } from "react";
import { sideVector, hero, logo, about, arrow } from "../assets";
import Article from "./common/Article";
import { articles } from "../data";

export default function Main() {
  const [currentArticles, setCurrentArticles] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setTotalPages(articles.length / 3);
    setCurrentArticles(articles.slice((currentPage - 1) * 3, currentPage * 3));
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <>
      <header
        className="absolute top-0 pt-[18px] md:pt-[33px] w-full max-w-[1440px]
      flex max-md:flex-row-reverse justify-between items-center z-10"
      >
        <img
          src={logo}
          className="max-md:hidden w-[107px] ml-[100px]"
          alt="logo"
        />
        {/* max-md:text-[11px]  */}
        <button
          className="max-md:text-sm font-[600] px-5 md:py-3 font-source-sans
        mr-5 md:mr-[41px] border border-white text-white rounded-full max-md:leading-10"
        >
          Get In Touch
        </button>
      </header>
      <main>
        <section
          className="flex flex-col-reverse md:flex-row md:justify-between 
        md:items-center"
        >
          <div
            className="md:pl-[100px] p-20 max-md:text-center
          max-md:items-center max-md:justify-center md:w-[50%]"
          >
            <h1
              className="font-source-sans text-heading font-bold 
            text-4xl md:text-[62px] md:leading-[69px] md:max-w-[375px]"
            >
              Discover the <span className="text-red">Best</span> Food and
              Drinks
            </h1>
            {/* max-md:text-[11px] */}
            <p className="max-md:text-sm font-open-sans mt-6 md:max-w-[370px]">
              Naturally made Healthcare Products for the better care & support
              of your body.
            </p>
            <button
              className="max-md:text-sm px-5 py-2 md:px-6 md:py-[14px] font-open-sans md:font-bold 
            text-white mt-10 bg-red rounded-full max-md:leading-8 font-extrabold"
            >
              Explore Now!
            </button>
          </div>
          <div className="relative self-start md:w-[50%] md:w-max-[50vw]">
            <img
              src={sideVector}
              alt="svg design "
              className="absolute top-0 object-cover"
            />
            <img src={hero} alt="pizza object-cover" />
          </div>
        </section>

        <section className="flex justify-around md:my-36 mb-36 about-bg">
          <div className="max-md:hidden w-[50%] flex justify-center">
            <img src={about} alt="wooden spoon" />
          </div>
          <div className="md:w-[50%] flex flex-col items-start max-md:text-center max-md:items-center py-36 px-16">
            <h2 className="text-heading font-poppins text-2xl md:text-5xl mb-5 ">
              About Us
            </h2>
            <p className="font-open-sans max-md:text-sm mb-4 md:mb-5 max-md:leading-6 max-w-[455px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. t has survived
              not only five centuries.
            </p>
            <button
              className="font-source-sans text-white bg-red font-bold
            px-8 md:px-6  py-2 rounded-full max-md:text-sm tracking-[0.33px] md:tracking-wide"
            >
              Read More
            </button>
          </div>
        </section>

        <section className="px-[50px] md:px-[100px] pb-14 md:pb-16">
          <h2
            className="text-heading font-poppins md:font-source-sans tracking-wide 
            text-3xl md:text-6xl md:leading-loose max-md:text-center"
          >
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-10 my-10">
            {currentArticles.map((article, index) => (
              <Article key={index} data={article} />
            ))}
          </div>
          <div className="w-full flex justify-center gap-4">
            <button onClick={prevPage}>
              <img
                src={arrow}
                alt="left arrow"
                className={`max-md:w-4 ${
                  currentPage === 1 ? "opacity-60" : ""
                }`}
              />
            </button>
            <span className="font-source-sans text-sm md:text-2xl text-button">{`${currentPage}/${totalPages}`}</span>
            <button onClick={nextPage}>
              <img
                src={arrow}
                alt="left arrow"
                className={`max-md:w-4 rotate-180 ${
                  currentPage === totalPages ? "opacity-60" : ""
                }`}
              />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
