export default function Button({
  children,
  className,
  color,
  onClick,
  icon,
  value,
  ...restProps
}) {
  return (
    <>
      <button
        className={`col-span-4 flex justify-center items-center ${color} h-14 w-full rounded-md	border-0 cursor-pointer transition-opacity focus:outline-none hover:opacity-70`}
        onClick={onClick}
        {...restProps}
      >
        <span className='text-lg text-white font-normal'>{value}</span>
        <div className='text-white ml-5'>{icon}</div>
      </button>
    </>
  )
}
