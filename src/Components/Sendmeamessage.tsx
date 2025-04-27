import React from "react";
import emailjs from "@emailjs/browser";

const Sendmeamessage = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = "service_sbkpm5c";
    const templateID = "template_bh52u5f";
    const publicKey = "lLuPT1P_oBeQO2jWf";

    const time = new Date().toLocaleString(); // Hora actual

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Legal Luris Abogados",
      from_message: message,
      time, // Agrega la hora actual al templateParams
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email enviado", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error al enviar el correo", error);
      });
  };

  return (
    <div className="bg-white px-5 py-16 max-w-4xl mx-auto   mt-20 mb-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#091626]">
        Send me a message!
      </h2>
      <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#091626] focus:border-[#091626] sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#091626] focus:border-[#091626] sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Hi, i think you are great developer and i want to work with you"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#091626] focus:border-[#091626] sm:text-sm"
            rows={4}
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#091626] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#F3CB77] hover:text-black transition-colors duration-300"
          >
            Shoot
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sendmeamessage;
