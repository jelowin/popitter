import { useRouter } from 'next/router'
import Button from 'components/Button'
import Input from 'components/Input'
import EmailIcon from 'components/Icons/EmailIcon'
import { loginWithEmail } from 'firebase/client'
import { useCallback, useState } from 'react'
import { errorHandler } from 'utils/errorHandler'

export default function LoginForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: null,
    password: null
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
        router.push('/dashboard')
      })
      .catch(errorHandler)
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            type='text'
            name='email'
            className='text-center'
            onChange={handleChange}
            placeholder='Email'
          ></Input>
        </div>
        <div>
          <Input
            type='password'
            name='password'
            onChange={handleChange}
            placeholder='Password'
          ></Input>
        </div>
        <div className='mt-10'>
          <Button
            color='bg-secondary'
            icon={<EmailIcon />}
            type='submit'
            value='LOGIN'
          ></Button>
        </div>
      </form>
    </>
  )
}
