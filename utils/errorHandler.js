export const errorHandler = ({ code, message }) => {
  switch (code) {
    default:
      alert(`${code} - ${message}`)
      break
  }
}
