import { useState } from "react";

export const Contact = () => {
  const [user, setUser] = useState({
    email: "",
    phone: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
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
                      value={user.email}
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
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="message">message</label>
                    <input
                      type="text"
                      name="message"
                      placeholder="Enter your message"
                      id="message"
                      required
                      autoComplete="off"
                      value={user.message}
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
