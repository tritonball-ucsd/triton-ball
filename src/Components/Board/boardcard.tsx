import "./board.css";

interface BoardMember {
  name: string;
  year: string;
  major: string;
  role: string;
  image: string; // path from board.json (e.g., "Board/john.png")
}

function BoardCard({ member }: { member: BoardMember }) {
  return (
    <div className="board-card">
      <img
        src={`${import.meta.env.BASE_URL}${member.image}`} // ✅ correct for both local + hosted
        alt={member.name}
        style={{
          width: "225px",
          height: "225px",
          objectFit: "cover",
        }}
      />
      <h3>{member.name}</h3>
      <p>
        {member.year}, {member.major}
      </p>
      <p>{member.role}</p>
    </div>
  );
}

export default BoardCard;
