import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zxblubb",
        "template_e978ymi",
        form.current,
        "sMKLDD5lg_u6LsqGQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="max-w-screen-lg mx-auto mt-48 mb-5">
      <div>
        <p className="text-4xl font-bold border-b-4 border-gray-500 py-2 inline">
          Contact Me
        </p>
        <p className="py-6">Send me a email about your query.</p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" bg-slate-600 p-5 rounded-lg"
      >
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-5 my-5">
          <input
            name="user_name"
            type="text"
            placeholder="Your Name"
            className="input w-full"
          />

          <input
            name="user_email"
            type="email"
            placeholder="Your Email"
            className="input w-full"
          />
        </div>
        <textarea
          name="message"
          className="textarea mt-2 w-full h-48"
          placeholder="Your Message"
        ></textarea>

        <div type="submit" value="Send" className="text-center mt-4">
          <button className="btn btn-wide">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
