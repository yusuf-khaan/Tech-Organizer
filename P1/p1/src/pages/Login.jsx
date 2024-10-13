import React, { useState } from "react";
import Background from "../components/Background";
import Cards from "../components/Cards";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("admin");
  const [pass, setPass] = useState("admin");
  const [mail, setMail] = useState("admin@gmail.com");
  const [message, setMessage] = useState("");
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  const list = [
    { text: "Total Care Total Different", color: "bg-[#F3FF90]", blur: false },
    { text: "Building Trust", color: "bg-[#C8A1E0]", blur: false },
    { text: "Own Your Power", color: "bg-[#F3FF90]", blur: true },
    { text: "Ohio Is Calling Me", color: "bg-[#F3FF90]", blur: true },
    { text: "Assembler", color: "bg-[#C8A1E0]", blur: false },
    { text: "Owning Your Duties", color: "bg-[#F3FF90]", blur: false },
    { text: "Better", color: "bg-[#F3FF90]", blur: true },
    { text: "More Trust", color: "bg-[#C8A1E0]", blur: false },
    { text: "Best The Others", color: "bg-[#F3FF90]", blur: true },
  ];

  const handleLogin = async () => {
    if (name === "" || pass === "" || mail === "") {
      setMessage("Enter Login Details At least bruv");
      return;
    }

    try {
      const temp = { name: name, password: pass, mail: mail };
      console.log(temp)
      const response = await fetch("https://localhost:8081/pOne/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(temp),
      });
      
      const responseText = await response.json();
      console.log(responseText);

      if (response.ok) {
        setMessage(responseText);
        navigate("/profile", { state: { user: responseText } });
      } else {
        setMessage(responseText || "Invalid Credentials");
      }
    } catch (error) {
      setMessage("Unable To Process Your Request");
      console.error(error);
    }
  };

  const handleSignUp = async () => {
    if (name === "" || pass === "" || mail === "") {
      setMessage("Enter Sign Up Details At least bruv");
      return;
    }

    try {
      const response = await fetch("https://localhost:8081/pOne/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password: pass, mail }),
      });

      const responseText = await response.text();
      setMessage(response.ok ? responseText : "Sign Up Failed");
    } catch (error) {
      setMessage("Unable To Process Your Request");
      console.error(error);
    }
  };

  return (
    <div>
      <Background />
      <div className="absolute justify-center flex items-center overflow-hidden mt-2 bg-[url('/p-12.png')] bg-white ml-[15px] rounded-[50px] h-[98vh] w-[45vw]">
        <div className="flex flex-wrap items-center gap-4 ml-4 p-2">
          {list.map((items, index) => (
            <Cards item={items} key={index} />
          ))}
        </div>
      </div>
      <div className="text-black flex relative ml-[60vw] top-20 h-[80vh] w-[30vw]">
        <div>
          <h1 className="mt-[10vh] text-[25px] text-white tracking-widest ">
            {login ? "Log In" : "Sign Up"}
          </h1>
          <h1 className="text-white/50 text-sm py-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quo, ipsum beatae perferendis ut consequatur ex voluptatibus.
          </h1>
          <div>
            <h1 className="text-white">Name</h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="bg-black text-white w-[30vw] py-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <h1 className="text-white">Mail</h1>
            <input
              type="email"
              placeholder="Enter Your Mail"
              className="bg-black text-white w-[30vw] py-4"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <h1 className="text-white">Password</h1>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="bg-black text-white w-[30vw] py-4"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button
              className="bg-white h-10 w-full rounded-full mt-5"
              onClick={login ? handleLogin : handleSignUp}
            >
              {login ? "Login" : "Sign Up"}
            </button>
          </div>
          <div className="w-full flex">
            <div className="h-[1px] w-1/2 bg-white mt-6"></div>
            <h1 className="text-white/50 mt-3">or</h1>
            <div className="h-[1px] w-1/2 bg-white mt-6"></div>
          </div>
          <button
            className="w-full h-10 rounded-full mt-5 bg-white"
            onClick={() => setLogin((prev) => !prev)}
          >
            {login ? "Sign Up" : "Log In"}
          </button>
          <div className="w-full h-5 py-5">
            <h1 className="text-white">{message}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
