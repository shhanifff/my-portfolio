// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, MapPin } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     website: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState<{
//     name?: boolean;
//     email?: boolean;
//     website?: boolean;
//     message?: boolean;
//   }>({});

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const newErrors: typeof errors = {};

//     if (!formData.name.trim()) newErrors.name = true;
//     if (!formData.email.trim()) newErrors.email = true;
//     if (!formData.message.trim()) newErrors.message = true;

//     if (formData.website && !/^https?:\/\/.+/i.test(formData.website)) {
//       newErrors.website = true;
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setErrors({});
//     setLoading(true);

//     try {
//       const res = await fetch("/api/send-mail", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!res.ok) throw new Error();

//       toast.success("Message sent successfully");

//       setFormData({
//         name: "",
//         email: "",
//         company: "",
//         website: "",
//         message: "",
//       });
//     } catch {
//       toast.error("Failed to send message");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const baseInputClass =
//     "w-full px-4 py-3 mt-2 bg-black/30 rounded-lg border outline-none";

//   return (
//     <section className="min-h-screen w-full bg-black text-white px-6 md:px-20 py-32 flex flex-col md:flex-row items-center justify-between gap-16">
//       {/* LEFT CONTENT */}
//       <motion.div
//         initial={{ opacity: 0, x: -25 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7 }}
//         className="flex-1"
//       >
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight headings">
//           Hire Your Next{" "}
//           <span className="text-blue-400">MERN Stack Developer</span>
//         </h1>

//         <p className="mt-6 text-gray-400 max-w-lg">
//           I&apos;m actively looking for Frontend / MERN Stack roles (remote or
//           onsite). If you feel I&apos;m a good fit for your team, share the role
//           details and I&apos;ll get back to you within 24 hours.
//         </p>

//         <div className="mt-10 text-gray-300 space-y-1">
//           <p className="flex gap-2 items-center">
//             <MapPin size={16} /> Calicut, Kerala, India
//           </p>
//           <p className="flex gap-2 items-center">
//             <Mail size={16} /> mohammedshanifcc@gmail.com
//           </p>
//         </div>
//       </motion.div>

//       {/* FORM */}
//       <motion.div
//         initial={{ opacity: 0, x: 25 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7, delay: 0.1 }}
//         className="flex-1 w-full max-w-lg"
//       >
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl space-y-6"
//         >
//           {/* NAME */}
//           <div>
//             <label className="text-sm text-gray-400">Name</label>
//             <input
//               name="name"
//               value={formData.name}
//               onChange={(e) => {
//                 handleChange(e);
//                 setErrors({ ...errors, name: false });
//               }}
//               className={`${baseInputClass} ${
//                 errors.name
//                   ? "border-red-500"
//                   : "border-white/10 focus:border-blue-400"
//               }`}
//               placeholder="Your name"
//             />
//           </div>

//           {/* EMAIL */}
//           <div>
//             <label className="text-sm text-gray-400">Work Email</label>
//             <input
//               name="email"
//               value={formData.email}
//               onChange={(e) => {
//                 handleChange(e);
//                 setErrors({ ...errors, email: false });
//               }}
//               type="email"
//               className={`${baseInputClass} ${
//                 errors.email
//                   ? "border-red-500"
//                   : "border-white/10 focus:border-blue-400"
//               }`}
//               placeholder="hr@company.com"
//             />
//           </div>

//           {/* COMPANY */}
//           <div>
//             <label className="text-sm text-gray-400">Company</label>
//             <input
//               name="company"
//               value={formData.company}
//               onChange={handleChange}
//               className={`${baseInputClass} border-white/10 focus:border-blue-400`}
//               placeholder="Company name"
//             />
//           </div>

//           {/* WEBSITE */}
//           <div>
//             <label className="text-sm text-gray-400">
//               Company Website / LinkedIn
//             </label>
//             <input
//               name="website"
//               value={formData.website}
//               onChange={(e) => {
//                 handleChange(e);
//                 setErrors({ ...errors, website: false });
//               }}
//               type="url"
//               className={`${baseInputClass} ${
//                 errors.website
//                   ? "border-red-500"
//                   : "border-white/10 focus:border-blue-400"
//               }`}
//               placeholder="https://company.com or LinkedIn profile"
//             />
//           </div>

//           {/* MESSAGE */}
//           <div>
//             <label className="text-sm text-gray-400">Role & Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={(e) => {
//                 handleChange(e);
//                 setErrors({ ...errors, message: false });
//               }}
//               rows={5}
//               className={`${baseInputClass} resize-none ${
//                 errors.message
//                   ? "border-red-500"
//                   : "border-white/10 focus:border-blue-400"
//               }`}
//               placeholder="Share role title, tech stack, location, salary range…"
//             />
//           </div>

//           {/* SUBMIT */}
//           <motion.button
//             disabled={loading}
//             type="submit"
//             className="w-full py-3 font-bold bg-white text-black hover:bg-black hover:text-white duration-300 rounded-xl flex justify-center gap-3 items-center disabled:opacity-50"
//           >
//             {loading ? "Sending..." : "Contact Me About a Role"}
//             <Mail size={16} />
//           </motion.button>
//         </form>
//       </motion.div>
//       <ToastContainer />
//     </section>
//   );
// }

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    name?: boolean;
    email?: boolean;
    company?: boolean;
    website?: boolean;
    message?: boolean;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};

    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.company.trim()) newErrors.company = true;
    if (!formData.message.trim()) newErrors.message = true;

    // Website required + must be valid URL
    if (!formData.website.trim() || !/^https?:\/\/.+/i.test(formData.website)) {
      newErrors.website = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      toast.success("Message sent successfully");

      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
        message: "",
      });
    } catch {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  const baseInputClass =
    "w-full px-4 py-3 mt-2 bg-black/30 rounded-lg border outline-none";

  const getBorder = (field?: boolean) =>
    field ? "border-red-500" : "border-white/10 focus:border-blue-400";

  return (
    <section className="min-h-screen w-full bg-black text-white px-6 md:px-20 py-32 flex flex-col md:flex-row items-center justify-between gap-16">
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hire Your Next{" "}
          <span className="text-blue-400">MERN Stack Developer</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-lg">
          I&apos;m actively looking for Frontend / MERN Stack roles (remote or
          onsite). Share the role details and I&apos;ll get back to you within
          24 hours.
        </p>

        <div className="mt-10 text-gray-300 space-y-1">
          <p className="flex gap-2 items-center">
            <MapPin size={16} /> Calicut, Kerala, India
          </p>
          <p className="flex gap-2 items-center">
            <Mail size={16} /> mohammedshanifcc@gmail.com
          </p>
        </div>
      </motion.div>

      {/* FORM */}
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="flex-1 w-full max-w-lg"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl space-y-6"
        >
          {/* NAME */}
          <div>
            <label className="text-sm text-gray-400">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={(e) => {
                handleChange(e);
                setErrors({ ...errors, name: false });
              }}
              className={`${baseInputClass} ${getBorder(errors.name)}`}
              placeholder="Your name"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-400">Work Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={(e) => {
                handleChange(e);
                setErrors({ ...errors, email: false });
              }}
              type="email"
              className={`${baseInputClass} ${getBorder(errors.email)}`}
              placeholder="hr@company.com"
            />
          </div>

          {/* COMPANY */}
          <div>
            <label className="text-sm text-gray-400">Company</label>
            <input
              name="company"
              value={formData.company}
              onChange={(e) => {
                handleChange(e);
                setErrors({ ...errors, company: false });
              }}
              className={`${baseInputClass} ${getBorder(errors.company)}`}
              placeholder="Company name"
            />
          </div>

          {/* WEBSITE */}
          <div>
            <label className="text-sm text-gray-400">
              Company Website / LinkedIn
            </label>
            <input
              name="website"
              value={formData.website}
              onChange={(e) => {
                handleChange(e);
                setErrors({ ...errors, website: false });
              }}
              type="url"
              className={`${baseInputClass} ${getBorder(errors.website)}`}
              placeholder="https://company.com or LinkedIn profile"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-sm text-gray-400">Role & Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => {
                handleChange(e);
                setErrors({ ...errors, message: false });
              }}
              rows={5}
              className={`${baseInputClass} resize-none ${getBorder(
                errors.message
              )}`}
              placeholder="Share role title, tech stack, location, salary range…"
            />
          </div>

          {/* BUTTON */}
          <motion.button
            disabled={loading}
            type="submit"
            className="w-full py-3 font-bold bg-white text-black hover:bg-black hover:text-white duration-300 rounded-xl flex justify-center gap-3 items-center disabled:opacity-50"
          >
            {loading ? "Sending..." : "Contact Me About a Role"}
            <Mail size={16} />
          </motion.button>
        </form>
      </motion.div>
      <ToastContainer />
    </section>
  );
}
