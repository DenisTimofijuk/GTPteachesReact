import { useLoaderData } from "react-router-dom";
import style from "../style/TeamsDashboard.module.css";
import TeamCard from "../components/TeamCard";
import { Modal } from "../components/Modal";
import { useState } from "react";
import { TeamModal } from "../components/TeamModal";

function TeamsDashboard() {
  const teams = useLoaderData() as TeamsView[];

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(<></>);
    document.body.classList.remove('disable-scroll');
  };

  const openModal = (data: TeamsView) => {
    setIsOpen(true);
    setModalContent(<TeamModal data={data}/>);
    document.body.classList.add('disable-scroll');
  };
  
  return (
    <div>
      <h2>Komandos</h2>
      <div className={style["content-wrapper"]}>{
        teams.map((team)=>(<TeamCard
          handleCardClick={()=>openModal(team)}
          name={team.team_name}
          membersCount={team.members.length}
          key={new Date().getTime() * Math.random()}
        />))
      }</div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        {modalContent}
      </Modal>
    </div>
  );
}

export default TeamsDashboard;