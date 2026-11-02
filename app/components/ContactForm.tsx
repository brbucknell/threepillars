
"use client";

import { useEffect, useState } from "react";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  function closeForm() {
    setIsOpen(false);
    setSubmitted(false);
  }

  return (
    <>
      {/* Contact link */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-[18px] text-black underline-offset-4 transition-colors hover:text-[#365c74] hover:underline"
      >
        Send a Message
      </button>

      {/* Popup */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeForm();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-form-title"
            className="relative max-h-[90vh] w-full max-w-[480px] overflow-y-auto bg-[#e5e2d6] p-6 shadow-2xl sm:p-9"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeForm}
              aria-label="Close contact form"
              className="absolute right-4 top-3 cursor-pointer text-3xl text-black hover:text-[#365c74]"
            >
              &times;
            </button>

            <h2
              id="contact-form-title"
              className="mb-2 text-[28px] font-medium text-black"
            >
              Get in Touch
            </h2>

            <p className="mb-7 text-sm leading-relaxed text-gray-700">
              Have a project in mind or need technical assistance?
              Tell me a little about what you're looking for.
            </p>

            {submitted ? (
              <p role="status">
                Your message has been sent. Thank you!
              </p>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(event) => {
                  event.preventDefault();
                  // Connect email delivery before enabling submissions.
                }}
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1 block text-sm font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    className="w-full border border-gray-400 bg-white px-3 py-2 text-black outline-none focus:border-[#365c74]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1 block text-sm font-medium"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    className="w-full border border-gray-400 bg-white px-3 py-2 text-black outline-none focus:border-[#365c74]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="mb-1 block text-sm font-medium"
                  >
                    What can I help you with?
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full border border-gray-400 bg-white px-3 py-2 text-black outline-none focus:border-[#365c74]"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Web Development">
                      Web Development
                    </option>
                    <option value="Data & AI">
                      Data & AI
                    </option>
                    <option value="IT Support">
                      IT Support
                    </option>
                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1 block text-sm font-medium"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    maxLength={5000}
                    className="w-full resize-y border border-gray-400 bg-white px-3 py-2 text-black outline-none focus:border-[#365c74]"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled
                  className="w-full bg-[#365c74] px-5 py-3 font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Send Message
                </button>

                <p className="text-xs text-gray-600">
                  Message delivery will be enabled once the
                  email service is connected.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
