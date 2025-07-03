import styles from './Contact.module.scss'
import LinkedinIcon from '../../assets/icons/linkedin-icon.svg'
import GithubIcon from '../../assets/icons/github-icon.svg'
import EmailIcon from '../../assets/icons/email-icon.svg'
import { useState } from 'react'

const initialState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

const initialErrors = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

// Validates form fields for correct input
function validate(values: typeof initialState) {
  const errors: typeof initialErrors = { name: '', email: '', subject: '', message: '' }
  if (!values.name.trim()) errors.name = 'Name is required.'
  else if (!/^[A-Za-zÀ-ÿ'\- ]+$/.test(values.name.trim())) errors.name = 'Name must only contain letters.'
  if (!values.email.trim()) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Invalid email address.'
  if (!values.subject.trim()) errors.subject = 'Subject is required.'
  if (!values.message.trim()) errors.message = 'Message is required.'
  return errors
}

function Contact() {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState(initialErrors)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)

  // Handles input changes and resets error for the field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  // Handles form submission and validation (now using FormData for web3forms)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validation = validate(values)
    setErrors(validation)
    if (Object.values(validation).some(Boolean)) return
    setSubmitting(true)
    setSuccess(false)
    setFail(false)

    const formData = new FormData()
    Object.entries(values).forEach(([key, value]) => formData.append(key, value))
    formData.append('access_key', '9db0364e-5732-4314-b8b3-e86a5eb5db2d')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      if (data.success) {
        setSuccess(true)
        setValues(initialState)
      } else {
        setFail(true)
      }
    } catch {
      setFail(true)
    }
    setSubmitting(false)
  }

  return (
    <section className={styles.contact}>
      <h2>Contact</h2>
      <div className={styles.contactList}>
        <a href="mailto:hey.julianlr@gmail.com" className={styles.link} target="_blank" rel="noopener noreferrer">
          <img src={EmailIcon} alt="E-mail" width={32} height={32} className={styles.icon} />
          <span className={styles.linkText}>hey.julianlr@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/julian-lr/" className={styles.link} target="_blank" rel="noopener noreferrer">
          <img src={LinkedinIcon} alt="LinkedIn" width={32} height={32} className={styles.icon} />
          <span className={styles.linkText}>linkedin.com/in/julian-lr</span>
        </a>
        <a href="https://github.com/julian-lr" className={styles.link} target="_blank" rel="noopener noreferrer">
          <img src={GithubIcon} alt="GitHub" width={32} height={32} className={styles.icon} />
          <span className={styles.linkText}>github.com/julian-lr</span>
        </a>
      </div>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off" noValidate>
        <input type="hidden" name="access_key" value="9db0364e-5732-4314-b8b3-e86a5eb5db2d" />
        <div className={styles.field}>
          <label htmlFor="name">Name*</label>
          <input id="name" name="name" value={values.name} onChange={handleChange} required autoComplete="name" className={errors.name ? styles.error : ''} />
          {errors.name && <div className={styles.errorMsg}>{errors.name}</div>}
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email*</label>
          <input id="email" name="email" value={values.email} onChange={handleChange} required autoComplete="email" className={errors.email ? styles.error : ''} />
          {errors.email && <div className={styles.errorMsg}>{errors.email}</div>}
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" value={values.phone} onChange={handleChange} autoComplete="tel" />
        </div>
        <div className={styles.field}>
          <label htmlFor="subject">Subject*</label>
          <input id="subject" name="subject" value={values.subject} onChange={handleChange} required className={errors.subject ? styles.error : ''} />
          {errors.subject && <div className={styles.errorMsg}>{errors.subject}</div>}
        </div>
        <div className={styles.field}>
          <label htmlFor="message">Message*</label>
          <textarea id="message" name="message" value={values.message} onChange={handleChange} required rows={5} className={errors.message ? styles.error : ''} />
          {errors.message && <div className={styles.errorMsg}>{errors.message}</div>}
        </div>
        <button type="submit" disabled={submitting} className={styles.submitBtn}>Submit</button>
        {success && <div className={styles.successMsg}>Message sent! Thank you.</div>}
        {fail && <div className={styles.errorMsg}>Something went wrong. Please try again.</div>}
      </form>
    </section>
  )
}

export default Contact
