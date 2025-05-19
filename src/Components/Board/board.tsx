import React, { useState, useEffect } from "react";
import "./board.css";
import three from "../../assets/3-sports.png";
import BOARD from "../../data/board.json";
import BoardCard from "./boardcard";

function Board() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const MEMBERS_PER_TAB = 2;
  const totalTabs = Math.ceil(BOARD.length / MEMBERS_PER_TAB);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleMembers = BOARD.slice(
    activeTab * MEMBERS_PER_TAB,
    activeTab * MEMBERS_PER_TAB + MEMBERS_PER_TAB
  );

  return (
    <>
      <div className="board-title" id="board">
        <div className="three-image">
          <img src={three} alt="Board visual" />
        </div>
        <h1>MEET OUR BOARD</h1>
      </div>

      {/* 🔁 Only show tabs on mobile */}
      {isMobile && (
        <div className="tab-controls">
          {Array.from({ length: totalTabs }, (_, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={activeTab === i ? "active-tab" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      <div className="board-grid">
        {(isMobile ? visibleMembers : BOARD).map((member, index) => (
          <BoardCard key={index} member={member} />
        ))}
      </div>
    </>
  );
}

export default Board;
