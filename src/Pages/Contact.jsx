import { useState } from "react";

export const Contact = () => {
  const [contact, setContact] = useState({
    email: "",
    phone: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };
  return (
    <>
      <section>
        <main>
          <div className="section-contactUs">
            <div className="container grid grid-two-cols">
              <div className="login-image">
              <img
                src="/Image/contact-us.png"
                alt="contact-us"
                width={800}
                height={500}
              />
              </div>
              <div className="contactUs-form">
                <h1 className="main-heading mb-3">Contact Me</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={contact.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Enter your phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={contact.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="message">message</label>
                    <textarea
                      // type="text"
                      name="message"
                      placeholder="Enter your message"
                      id="message"
                      required
                      cols={30}
                      rows={5}
                      value={contact.message}
                      onChange={handleInput}
                    />
                  </div>
                  <button type="submit" className="btn btn-submit">
                    Contact
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
