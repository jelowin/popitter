import BackIcon from "components/Icons/BackIcon"
import { useRouter } from "next/router"

export default function Back() {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <a className="flex justify-start w-full" onClick={goBack}>
      <BackIcon />
    </a>
  )
}
