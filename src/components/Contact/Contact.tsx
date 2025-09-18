import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center  bg-white"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-gray-900">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
         viewport={{ once: false, amount: 0.3 }}
          className="text-3xl md:text-5xl font-bold mb-6 text-center text-primary"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-sm md:text-base text-gray-600 text-center max-w-2xl mx-auto mb-10"
        >
          I’d love to connect with you! Whether you have a question, an
          opportunity, or just want to say hi, feel free to reach out using the
          form below or through my contact details.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-700">winwinhtet199977@example.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-700">+95 9 775 457 463</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-700">Dawbon Township , Yangon</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
           viewport={{ once: false, amount: 0.3 }}
            className="space-y-4 p-6 rounded-4xl shadow-2xl text-gray-900"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.25)", // frosted glass
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white/40 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white/40 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-white/40 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-primary text-white font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
