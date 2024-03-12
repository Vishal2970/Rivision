import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/api/auth/login";
export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        // setUser({email: "",password: ""})
        // alert("login successfull");
        navigate("/");
      } else {
        setUser({ email: "", password: "" });
        alert("Invalid Credential");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleInput = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    // console.log(value);
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img
                  src="/Image/login.png"
                  alt="My pic" /* for your pic TR00081.jpg*/
                  width={500}
                  height={500}
                />
              </div>
              <div className="login-form">
                <h1 className="main-heading mb-3">login form</h1>
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
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                </form>
                <div className="container">
                  <h1>Not registed ?</h1>
                  <button
                    type="register"
                    className="btn btn-register"
                    onClick={() => navigate("/register")}
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
