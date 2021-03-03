import CloseIcon from "components/Icons/CloseIcon"
import ReactDOM from "react-dom"

function Modal({ children, onClose }) {
  return (
    <div className="flex flex-col justify-center w-screen md:w-2/4">
      <div className="fixed inset-0 p-2.5">
        <div className="flex justify-end">
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(<Modal onClose={onClose}>{children}</Modal>, document.getElementById("main"))
}
