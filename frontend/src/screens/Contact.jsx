import React from "react";
//import { Form } from "react-bootstrap";
import { useState } from "react";

function Contact() {
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    message: "",
  });
  // handle
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setMsg({ ...msg, [name]: value });
  };
  // hanle submited

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message } = msg;
    try {
      const res = await fetch("/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.status === 400 || !res) {
        window.alert("Message not send. Try Again");
      } else {
        window.alert("Send Successfully");
        setMsg({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <section id="about">
        <div className="container">
          <div className="row my-5 py-5">
            <div className="col-12">
              <h3 className="fs-4 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have Some <b> Question?</b>
              </h1>
              <hr className="w-30 mx-auto" />
            </div>
          </div>
          {/** Feedback area */}
          <div className="row">
            <div className="col-md-6">
              
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit} method="POST">
                {/** input Email */}
                <div class="mb-3">
                  <label for="NameInput" class="form-label">
                    Your Name
                  </label>
                  <input
                    type="name"
                    class="form-control"
                    id="NameInput"
                    placeholder="Danzoo Soft"
                    name="name"
                    value={msg.name}
                    onChange={handleChange}
                  />
                </div>
                {/** input Email */}
                <div class="mb-3">
                  <label for="emailinput" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="emailinput"
                    placeholder="email@example.com"
                    name="email"
                    value={msg.email}
                    onChange={handleChange}
                  />
                </div>
                {/** Textarea Message */}
                <div class="mb-3">
                  <label for="messageinput" class="form-label">
                    Your Message
                  </label>
                  <textarea
                    class="form-control"
                    id="messageinput"
                    rows="4"
                    name="message"
                    value={msg.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-outline-primary rounded-pill">
                  <i className="fa fa-paper-plane mx-1"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
