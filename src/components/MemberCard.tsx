import MemberAvatar from "./MemberAvatar";
import style from "../style/MemberCard.module.css";

function MemberCard({
  name,
  teamName,
  handleCardClick
}: {
  name: string;
  teamName: string | undefined;
  handleCardClick: ()=>void;
}) {
  return (
    <>
      <div className={style["member-card"]} onClick={handleCardClick}>
        <div>
          <MemberAvatar></MemberAvatar>
        </div>
        <div className={style["member-details"]}>
          <div className={style["member-name"]}>{name}</div>
          <div className={style["member-team"]}>{teamName}</div>
        </div>
      </div>
    </>
  );
}

export default MemberCard;
