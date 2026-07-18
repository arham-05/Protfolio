"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send } from "lucide-react"
import emailjs from "@emailjs/browser"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("idle") // idle | sending | sent

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("sending")

    emailjs
      .send(
        "service_mkoy8f8",
        "template_ecu6drc",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "C40tXksDV1RGiCAa9",
      )
      .then(() => {
        setStatus("sent")
        setForm({
          name: "",
          email: "",
          message: "",
        })
      })
      .catch((error) => {
        console.error(error)
        setStatus("error")
      })
  }

  return (
    <section
      id="contact"
      className="relative font-lexend w-full py-20 sm:py-28 px-4 sm:px-6 bg-transparent overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/10 blur-[130px] -z-10" />

      <div className="max-w-3xl mx-auto text-center mb-14">
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="inline-block text-sm font-medium text-blue-300 tracking-widest uppercase mb-3"
        >
          Get In Touch
        </motion.span>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
        >
          Let's{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Connect
          </span>
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-6">
        {/* Info side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col justify-center gap-6"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center flex-shrink-0">
              <Mail size={18} className="text-blue-300" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Email
              </p>
              <p className="text-sm text-white mt-0.5">
                arhamansari7227@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-blue-300" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Location
              </p>
              <p className="text-sm text-white mt-0.5">Bhiwandi, Maharastra</p>
            </div>
          </div>
        </motion.div>

        {/* Form side */}
        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={1}
          className="md:col-span-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors resize-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            disabled={status === "sending"}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] transition-shadow disabled:opacity-60"
          >
            {status === "sending" ? (
              "Sending..."
            ) : status === "sent" ? (
              "Message Sent ✓"
            ) : status === "error" ? (
              "Failed to Send"
            ) : (
              <>
                <Send size={16} /> Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
