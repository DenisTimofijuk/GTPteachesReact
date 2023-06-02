import MemberAvatar from "./MemberAvatar";
import style from "../style/MemberModal.module.css";

export function MemberModal({ data }: { data: MemberView }) {
  return (
    <div>
      <div className={style.row}>
        <MemberAvatar></MemberAvatar>
        <div className={style.header}>
          <div className={style.headerName}>{data.name}</div>
          <div className={style.comments}>
            Member of the Team:{" "}
            <span className={style.bold}>{data.teamName}</span>
          </div>
          <div className={style.comments}>
            Total Observations:{" "}
            <span className={style.bold}>{data.observations.length}</span>
          </div>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.content}>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {data.observations.map(
                (item, index) =>
                  (
                    <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.observation_name}</td>
                        <td>{item.comment}</td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
