export default function Input({ children, onChange, name, type, placeholder }) {
  return (
    <>
      <input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      >
        {children}
      </input>
      <style jsx>{`
        input {
          margin-bottom: 8px;
        }
      `}</style>
    </>
  )
}
