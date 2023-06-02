// import { useState, useRef } from "react";
import style from "../style/Modal.module.css";

export function Modal({
  isOpen,
  closeModal,
  children,
}: {
  isOpen: boolean;
  closeModal: () => void;
  children: any;
}) {
  const backDropp = `${style.backdrop} ${isOpen ? "" : style.hidden}`;

  return (
    <>
      <div onClick={closeModal} className={backDropp}></div>
      <dialog open={isOpen} className={style.wrapper}>
        <div className={style.header}>
          <button onClick={closeModal}>X</button>
        </div>
        {children}
      </dialog>
    </>
  );
}
