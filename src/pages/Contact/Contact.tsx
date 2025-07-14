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
  phone: '',
  subject: '',
  message: '',
}

// Validates form fields for correct input
function validate(values: typeof initialState) {
  const errors: typeof initialErrors = { name: '', email: '', phone: '', subject: '', message: '' }
  
  // Name validation
  if (!values.name.trim()) {
    errors.name = 'Name is required.'
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long.'
  } else if (!/^[A-Za-zÀ-ÿ'\- ]+$/.test(values.name.trim())) {
    errors.name = 'Name must only contain letters, spaces, hyphens, and apostrophes.'
  }
  
  // Email validation (more strict)
  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  
  // Subject validation
  if (!values.subject.trim()) {
    errors.subject = 'Subject is required.'
  } else if (values.subject.trim().length < 3) {
    errors.subject = 'Subject must be at least 3 characters long.'
  }
  
  // Message validation
  if (!values.message.trim()) {
    errors.message = 'Message is required.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long.'
  }
  
  // Phone validation (optional but if provided should be valid)
  if (values.phone.trim() && !/^[\+]?[1-9][\d]{0,15}$/.test(values.phone.replace(/[\s\-\(\)]/g, ''))) {
    errors.phone = 'Please enter a valid phone number.'
  }
  
  return errors
}

function Contact() {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState(initialErrors)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')

  // Handles input changes and resets error for the field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
    // Clear previous response messages when user starts typing
    if (success || fail) {
      setSuccess(false)
      setFail(false)
      setResponseMessage('')
    }
  }

  // Handles form submission and validation (using Cloudflare Pages function)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validation = validate(values)
    setErrors(validation)
    if (Object.values(validation).some(Boolean)) return
    setSubmitting(true)
    setSuccess(false)
    setFail(false)
    setResponseMessage('')

    const formData = new FormData()
    Object.entries(values).forEach(([key, value]) => formData.append(key, value))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      if (data.success) {
        setSuccess(true)
        setValues(initialState)
        setResponseMessage(data.message || 'Thank you for your message! I\'ll get back to you soon.')
      } else {
        setFail(true)
        setResponseMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setFail(true)
      setResponseMessage('Network error. Please check your connection and try again.')
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
          <input id="phone" name="phone" value={values.phone} onChange={handleChange} autoComplete="tel" className={errors.phone ? styles.error : ''} />
          {errors.phone && <div className={styles.errorMsg}>{errors.phone}</div>}
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
        <button type="submit" disabled={submitting} className={styles.submitBtn}>
          {submitting ? 'Sending...' : 'Submit'}
        </button>
        {success && <div className={styles.successMsg}>{responseMessage}</div>}
        {fail && <div className={styles.errorMsg}>{responseMessage}</div>}
      </form>
    </section>
  )
}

export default Contact
