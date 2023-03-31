'use client'
import { useEffect } from 'react'
import kwesforms from 'kwesforms'

const ContactForm = () => {
  useEffect(() => {
    kwesforms.init()
  }, [])
  return (
    <>
      <p className="text-lg font-black text-center">Our fill out the form</p>
      <form
        name="contact"
        className="kwes-form text-center flex flex-col max-w-xl mx-auto my-8"
        action="https://kwesforms.com/api/foreign/forms/Q4NwgjLenYKwnAopWi4R"
      >
        <input
          type="text"
          className="p-3 rounded text-lg shadow-lg mb-6 mx-4 sm:mx-0"
          name="firstName"
          placeholder="First name"
        />
        <input
          type="text"
          className="p-3 rounded text-lg shadow-lg mb-6 mx-4 sm:mx-0"
          name="lastName"
          placeholder="Last name"
        />
        <input
          type="email"
          className="p-3 rounded text-lg shadow-lg mb-6 mx-4 sm:mx-0"
          name="email"
          placeholder="Email"
        />
        <input
          type="phone"
          className="p-3 rounded text-lg shadow-lg mb-6 mx-4 sm:mx-0"
          name="phone"
          placeholder="Phone"
        />
        <input
          type="subject"
          className="p-3 rounded text-lg shadow-lg mb-6 mx-4 sm:mx-0"
          name="subject"
          placeholder="Subject"
        />
        <textarea
          className="p-3 rounded text-lg shadow-lg mb-10 h-60"
          name="message"
          placeholder="Message"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-400 px-8 py-3 rounded text-white text-lg font-bold shadow-lg"
        >
          Submit
        </button>
        <br />
        <br />
      </form>
    </>
  )
}

export default ContactForm
