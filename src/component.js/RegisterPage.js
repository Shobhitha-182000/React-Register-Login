import React, { useEffect, useState } from "react";
import "./RegisterPage.css";
import { auth, db } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("register-page");
    return () => {
      document.body.classList.remove("register-page");
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (confirmPassword === password && password.length >= 6) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        if (user) {
          const userRef = doc(db, "Users", user.uid);
          await setDoc(userRef, {
            email: user.email,
            username: username,
            password: password,
          });

          console.log("User registered successfully");
          toast.success("User registered successfully", {
            position: "top-center",
          });

          navigate("/login");
        }
      } catch (error) {
        console.error(error);
        if (error.code === "auth/email-already-in-use") {
          toast.error(
            "Email is already in use. Please use a different email or try logging in.",
            {
              position: "bottom-center",
            }
          );
        } else {
          toast.error("Registration failed. Please try again later.", {
            position: "bottom-center",
          });
        }
      }
    } else if (password.length < 6) {
      alert("Password contains at least 6 digits");
    } else {
      alert("Password is not matching");
      window.location.reload();
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
 

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div id="username">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          {/* <FaUser id="userIcon" /> */}
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {/* <MdOutlineMarkEmailUnread id="emailIcon" /> */}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
