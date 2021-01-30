import CloseIcon from "components/Icons/CloseIcon"
import ReactDOM from "react-dom"

function Modal({ children, onClose }) {
  return (
    <div className="flex flex-col justify-center fixed inset-0 p-2.5">
      <div className="flex justify-end">
        <button onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      {children}
      <div className="flex justify-between">
        <a>Volver al listado</a>
        <a className="text-red-600 font-semibold">Reintentar</a>
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
