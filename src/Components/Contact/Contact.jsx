import React, { useState } from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const CONTACT_DETAILS = [
  { icon: mail_icon,     label: 'Email',    value: 'gavalisandip201@gmail.com' },
  { icon: call_icon,     label: 'Phone',    value: '+91-9022-xxx-662' },
  { icon: location_icon, label: 'Location', value: 'Pune, India' },
]

const Contact = () => {
  const [status, setStatus]   = useState(null) // null | 'sending' | 'success' | 'error'
  const [errors, setErrors]   = useState({})   // field-level error messages

  /* ── Validators ────────────────────────────────────────────── */
  const validate = (name, email, message) => {
    const errs = {}

    if (!name.trim())
      errs.name = 'Name is required.'

    if (!email.trim())
      errs.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      errs.email = 'Please enter a valid email address.'

    if (!message.trim())
      errs.message = 'Message cannot be empty.'
    else if (message.trim().length < 10)
      errs.message = 'Message must be at least 10 characters.'

    return errs
  }

  /* ── Submit handler ────────────────────────────────────────── */
  const onSubmit = async (event) => {
    event.preventDefault()

    const form    = event.target
    const name    = form.name.value
    const email   = form.email.value
    const message = form.message.value

    // 1. Run manual validation — stop here if anything fails
    const errs = validate(name, email, message)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    // 2. Clear errors and mark as sending
    setErrors({})
    setStatus('sending')

    const formData = new FormData(form)
    formData.append('access_key', '4e49c661-5ab0-4d99-b794-34d5561a2d3a')
    const json = JSON.stringify(Object.fromEntries(formData))

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    json,
      }).then((r) => r.json())

      if (res.success) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus(null), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(null), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus(null), 4000)
    }
  }

  /* ── Clear a field error on change ────────────────────────── */
  const clearError = (field) => {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  return (
    <div id="contact" className="contact">

      {/* Title */}
      <div className="contact-title">
        <div className="contact-title-eyebrow">
          <span className="contact-title-eyebrow-dot" />
          Let's Connect
        </div>
        <h1>Get in <span>Touch</span></h1>
      </div>

      <div className="contact-section">

        {/* Left */}
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available for new projects — feel free to reach out
            and let's build something great together.
          </p>
          <div className="contact-details">
            {CONTACT_DETAILS.map(({ icon, label, value }) => (
              <div className="contact-detail" key={label}>
                <div className="contact-detail-icon">
                  <img src={icon} alt={label} />
                </div>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <form onSubmit={onSubmit} className="contact-right" noValidate>

          {/* Name */}
          <label htmlFor="contact-name">Your Name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Enter your name"
            className={errors.name ? 'input-error' : ''}
            onChange={() => clearError('name')}
          />
          {errors.name && <span className="contact-field-error">{errors.name}</span>}

          {/* Email */}
          <label htmlFor="contact-email">Your Email</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="Enter your email"
            className={errors.email ? 'input-error' : ''}
            onChange={() => clearError('email')}
          />
          {errors.email && <span className="contact-field-error">{errors.email}</span>}

          {/* Message */}
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            placeholder="Write your message here..."
            className={errors.message ? 'input-error' : ''}
            onChange={() => clearError('message')}
          />
          {errors.message && <span className="contact-field-error">{errors.message}</span>}

          <button
            className="contact-submit"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending'
              ? 'Sending…'
              : status === 'success'
              ? '✓ Message Sent!'
              : status === 'error'
              ? 'Try Again'
              : 'Send Message'}
          </button>

        </form>
      </div>
    </div>
  )
}

export default Contact