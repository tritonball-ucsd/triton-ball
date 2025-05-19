import "./board.css"

interface BoardMember {
    name: string;
    year: string;
    major: string;
    role: string;
    image: string;
  }
  
  function BoardCard({ member }: { member: BoardMember }) {
    return (
      <div className="board-card">
        <img src={member.image} alt={member.name} style={{ width: "225px", height: "225px", objectFit: "cover" }} />
        <h3>{member.name}</h3>
        <p>{member.year}, {member.major}</p>
        <p>{member.role}</p>
      </div>
    );
  }
  
  export default BoardCard;
  