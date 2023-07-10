import React from "react";

function Sidebar() {
  return (
    <div className=" w-full max-w-[300px]">
      <nav className=" bg-[#e0f0ff] rounded h-[calc(100vh-110px)] py-4 overflow-y-scroll">
        <ul className="flex flex-col text-lg text-[#4A55A2] gap-1 px-3">
        <button className=" py-2 hover:bg-[#7895cb] hover:text-[#e0f0ff] transition-all text-left px-3 rounded">Frontend</button>
        <button className=" py-2 hover:bg-[#7895CB] hover:text-[#e0f0ff] transition-all text-left px-3 rounded">Backend</button>
        <button className=" py-2 hover:bg-[#7895CB] hover:text-[#e0f0ff] transition-all text-left px-3 rounded">Full-Stack</button>
        <button className=" py-2 hover:bg-[#7895CB] hover:text-[#e0f0ff] transition-all text-left px-3 rounded">Mobile</button>
        <button className=" py-2 hover:bg-[#7895CB] hover:text-[#e0f0ff] transition-all text-left px-3 rounded">UI/UX</button>
        <button className=" py-2 hover:bg-[#7895CB] hover:text-[#e0f0ff] transition-all text-left px-3 rounded">Game Dev</button>
        <button className=" py-2 hover:bg-[#7895CB] hover:text-[#e0f0ff] transition-all text-left px-3 rounded">Level Design</button>
        <button className=" py-2 hover:bg-[#7895CB] hover:text-[#e0f0ff] transition-all text-left px-3 rounded">Environment</button>
        <button className=" py-2 hover:bg-[#7895CB] hover:text-[#e0f0ff] transition-all text-left px-3 rounded">DevOps</button>
        <button className=" py-2 hover:bg-[#7895CB] hover:text-[#e0f0ff] transition-all text-left px-3 rounded">Data Science</button>
        <button className=" py-2 hover:bg-[#7895CB] hover:text-[#e0f0ff] transition-all text-left px-3 rounded">Machine Learning</button>
        <button className=" py-2 hover:bg-[#7895CB] hover:text-[#e0f0ff] transition-all text-left px-3 rounded">Cybersecurity</button>
        <button className=" py-2 hover:bg-[#7895CB] hover:text-[#e0f0ff] transition-all text-left px-3 rounded">Blockchain</button>
        <button className=" py-2 hover:bg-[#7895CB] hover:text-[#e0f0ff] transition-all text-left px-3 rounded">E-Commerce</button>
        <button className=" py-2 hover:bg-[#7895CB] hover:text-[#e0f0ff] transition-all text-left px-3 rounded">Chatbots</button>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
