"use client";

import { useRef, useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    formRef.current?.reset();
    setSubmitted(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setSubmitted(false);
    }, 2000);
  }

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>

      <div className="form-field">
        <label htmlFor="budget">Project budget</label>
        <input
          id="budget"
          name="budget"
          type="text"
          placeholder="e.g. $15k–30k"
        />
      </div>

      <div className="form-field">
        <label htmlFor="message">Tell us about the project</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What are you building, and by when?"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Send message
      </button>

      <p className={`form-success ${submitted ? "is-visible" : ""}`} role="status">
        Thanks — your message has been sent. We&apos;ll be in touch soon.
      </p>
    </form>
  );
}
