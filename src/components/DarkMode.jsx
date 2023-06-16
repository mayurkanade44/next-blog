"use client";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const DarkMode = () => {
  const { mode, toggle } = useContext(ThemeContext);
  return (
    <div
      className="w-12 h-6 border-2 border-gray-400 rounded-3xl flex item-center justify-between p-0.5 relative cursor-pointer"
      onClick={toggle}
    >
      <div className="text-xs">🌙</div>
      <div className="text-xs">🔆</div>
      <div
        className="w-4 h-4 bg-green-500 rounded-full absolute"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};
export default DarkMode;
