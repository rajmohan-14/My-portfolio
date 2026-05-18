'use client'
import React, { useState } from 'react'

interface ContactFormProps {
  handleToastAndClose: (type: 'success' | 'error', message: string) => void
}

const ContactForm: React.FC<ContactFormProps> = ({ handleToastAndClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.email || !formData.message) {
      handleToastAndClose('error', 'Email and Message are required.')
      return
    }
    const mailto = `mailto:rajmohan14k@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`
    window.open(mailto)
    handleToastAndClose('success', 'Opening your mail client!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='mt-10 flex max-w-[800px] grid-cols-2 flex-col gap-4 rounded-lg py-2 px-4 md:!grid md:px-8'
    >
      <div className='form-row col-start-1 col-end-2'>
        <div className='input-data'>
          <input type='text' name='name' className='text-headingText dark:text-headingDarkText'
            value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
          <div className='underline'></div>
          <label>Name</label>
        </div>
      </div>
      <div className='form-row col-start-1 col-end-2'>
        <div className='input-data'>
          <input type='email' name='email' className='text-headingText dark:text-headingDarkText'
            value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
          <div className='underline'></div>
          <label>Email</label>
        </div>
      </div>
      <div className='form-row col-start-2 col-end-3 row-start-1 row-end-3'>
        <div className='input-data textarea'>
          <textarea name='message' className='text-headingText dark:text-headingDarkText'
            value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} required />
          <div className='underline'></div>
          <label>Write your message</label>
        </div>
      </div>
      <button
        className='cursor-design col-start-1 col-end-3 mt-10 flex flex-col items-center justify-center rounded-lg border border-primaryColor bg-primaryColor bg-opacity-10 px-8 py-2 text-center text-headingText backdrop-blur-xl dark:text-headingDarkText'
        type='submit'
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm