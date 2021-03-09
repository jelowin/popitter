export default function Input({ children, onChange, name, type, placeholder }) {
  return (
    <>
      <input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className='mb-2'
      >
        {children}
      </input>
    </>
  )
}
