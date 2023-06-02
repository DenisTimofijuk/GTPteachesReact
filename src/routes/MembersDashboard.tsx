import { useLoaderData } from "react-router-dom";
import MemberCard from "../components/MemberCard";
import style from "../style/MembersDashboard.module.css";
import { useState } from "react";
import { Modal } from "../components/Modal";
import { MemberModal } from "../components/MemberModal";

function MembersDashboard() {
  const members = useLoaderData() as MemberView[];

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(<></>);
    document.body.classList.remove('disable-scroll');
  };

  const openModal = (data: MemberView) => {
    setIsOpen(true);
    setModalContent(<MemberModal data={data}/>);
    document.body.classList.add('disable-scroll');
  };

  return (
    <div>
      <h2>Members</h2>
      <div className={style["content-wrapper"]}>
        {members.map((member) => (
          <MemberCard
            name={member.name}
            teamName={member.teamName}
            handleCardClick={() => openModal(member)}
            key={member.id}
          />
        ))}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        {modalContent}
      </Modal>
    </div>
  );
}

export default MembersDashboard;
