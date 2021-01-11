import { useRouter } from "next/router"
import Button from "components/Button"
import Input from "components/Input"
import EmailSvg from "components/Svg/EmailSvg"
import { loginWithEmail } from "firebase/client"
import { useCallback, useState } from "react"
import { errorHandler } from "utils/errorHandler"

export default function LoginForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: null,
    password: null,
  })

  const handleChange = (event) => {
    const fieldKey = event.target.name
    const fieldValue = event.target.value
    setFormData({ ...formData, [fieldKey]: fieldValue })
  }

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    loginWithEmail(formData.email, formData.password)
      .then((user) => {
        router.push("/dashboard")
      })
      .catch(errorHandler)
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Your email"
        ></Input>
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Your password"
        ></Input>
        <Button className="bg-primary" type="submit">
          <EmailSvg />
          Login
        </Button>
      </form>
      <style jsx>{`
        form {
          display: grid;
          place-items: center;
        }
      `}</style>
    </>
  )
}
