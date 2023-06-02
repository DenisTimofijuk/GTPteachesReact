import style from "../style/TeamCard.module.css";
import TeamAvatar from "./TeamAvatar";

function TeamCard({
  name,
  membersCount,
  handleCardClick,
}: {
  name: string;
  membersCount: number;
  handleCardClick: () => void;
}) {
  return (
    <div className={style["team-card"]} onClick={handleCardClick}>
      <div>
        <TeamAvatar></TeamAvatar>
      </div>
      <div className={style["team-details"]}>
        <div className={style["team-name"]}>{name}</div>
        <div className={style["team-members"]}>Viso narių: {membersCount}</div>
      </div>
    </div>
  );
}

export default TeamCard;
