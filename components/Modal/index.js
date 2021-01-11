import CloseIcon from "components/Icons/CloseIcon"
import ReactDOM from "react-dom"
import styles from "./Modal.module.css"

function Modal({ children, onClose }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.modalButton} onClick={onClose}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  )
}

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById("main")
  )
}
