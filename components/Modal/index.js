import CloseIcon from "components/Icons/CloseIcon"
import ReactDOM from "react-dom"

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0">
      <div className="flex flex-col justify-center items-center rounded-lg p-2.5">
        <button className="flex justify-end" onClick={onClose}>
          <div className="flex justify-end">
            <CloseIcon />
          </div>
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
