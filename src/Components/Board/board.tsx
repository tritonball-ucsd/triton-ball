import "./board.css";
import three from "../../assets/3-sports.png";
import BOARD from "../../data/board.json";
import BoardCard from "./boardcard";

function Board() {
  return (
    <>
      <div className="board-title">
        <div className="three-image">
          <img src={three} alt="Board visual" />
        </div>
        <h1>MEET OUR BOARD</h1>
      </div>
      <div className="board-grid">
        {BOARD.map((member, index) => (
          <BoardCard key={index} member={member} />
        ))}
      </div>
    </>
  );
}

export default Board;
