import style from "../style/TeamModal.module.css";
import TeamAvatar from "./TeamAvatar";

export function TeamModal({ data }: { data: TeamsView }) {
  return (
    <div className={style.wrapper}>
      <div className={style.row}>
        <TeamAvatar></TeamAvatar>
        <div className={style.header}>
          <div className={style.headerName}>{data.team_name}</div>
          <div className={style.comments}>Viso narių: {data.members.length}</div>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.content}>
          <table>
            <thead>
              <tr>
                <th>Nr.</th>
                <th>Komandos Narys</th>
              </tr>
            </thead>
            <tbody>
              {data.members.map(
                (item, index) =>
                  (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
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
