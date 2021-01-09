import Swal from "sweetalert2"

export const errorHandler = ({ code, message }) => {
  switch (code) {
    default:
      Swal.fire({
        title: `Error ${code}`,
        text: `${message}`,
        icon: "error",
        confirmButtonText: "Ok",
      })
      break
  }
}
