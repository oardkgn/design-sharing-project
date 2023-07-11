import React from "react";

function Sidebar() {
  return (
    <div className="">
      <div className=" w-full min-w-full hidden md:block max-w-[28%] lg:max-w-[20%]">
        <nav className="  bg-[#e0f0ff] rounded h-[calc(100vh-110px)] py-4 overflow-y-scroll">
          <ul className="flex flex-col text-sm lg:text-lg text-[#4A55A2] gap-1 px-3">
            <button className="categoryBtn">Frontend</button>
            <button className="categoryBtn">Backend</button>
            <button className="categoryBtn">Full-Stack</button>
            <button className="categoryBtn">Mobile</button>
            <button className="categoryBtn">UI/UX</button>
            <button className="categoryBtn">Game Dev</button>
            <button className="categoryBtn">Level Design</button>
            <button className="categoryBtn">Environment</button>
            <button className="categoryBtn">DevOps</button>
            <button className="categoryBtn">Data Science</button>
            <button className="categoryBtn">Machine Learning</button>
            <button className="categoryBtn">Cybersecurity</button>
            <button className="categoryBtn">Blockchain</button>
            <button className="categoryBtn">E-Commerce</button>
            <button className="categoryBtn">Chatbots</button>
          </ul>
        </nav>
      </div>
      <div className=" md:hidden">
        <nav className="  pt-4  pb-3  bg-[#e0f0ff] rounded overflow-x-scroll">
          <ul className="flex text-sm min-w-fit  lg:text-lg text-[#4A55A2] gap-1 px-3">
            <button className="categoryBtn">Frontend</button>
            <button className="categoryBtn">Backend</button>
            <button className="categoryBtn">Full-Stack</button>
            <button className="categoryBtn">Mobile</button>
            <button className="categoryBtn">UI/UX</button>
            <button className="categoryBtn">Game Dev</button>
            <button className="categoryBtn">Level Design</button>
            <button className="categoryBtn">Environment</button>
            <button className="categoryBtn">DevOps</button>
            <button className="categoryBtn">Data Science</button>
            <button className="categoryBtn">Machine Learning</button>
            <button className="categoryBtn">Cybersecurity</button>
            <button className="categoryBtn">Blockchain</button>
            <button className="categoryBtn">E-Commerce</button>
            <button className="categoryBtn">Chatbots</button>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
