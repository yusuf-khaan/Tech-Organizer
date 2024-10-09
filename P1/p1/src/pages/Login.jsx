import React, { useState } from "react";
import Background from "../components/Background";
import Cards from "../components/Cards";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {

  // const[user,setuser] = useState(null);
  const [name, setname] = useState('yusuf');
  const [pass, setpass] = useState('yusuf01!');
  const [mail, setmail] = useState('thekhanyusuf096@gmail.com');
  const [message, setmessage] = useState('');
  const [login, setlogin] = useState(true);
  const navigate = useNavigate();

  const singReverse = [
    {
      signin: "Login",
      singup: "Sign Up",
    }
  ]


  const list = [
    {
      text: "Total Care Total Different",
      color: "bg-[#F3FF90]",
      blur: false,
    },
    {
      text: "Building Trust",
      color: "bg-[#C8A1E0]",
      blur: false,
    },
    {
      text: "Own Your Power",
      color: "bg-[#F3FF90]",
      blur: true,
    },
    {
      text: "Ohio Is Calling Me",
      color: "bg-[#F3FF90]",
      blur: true,
    },
    {
      text: "Assembler",
      color: "bg-[#C8A1E0]",
      blur: false,
    },
    {
      text: "Owning Your Duties",
      color: "bg-[#F3FF90]",
      blur: false,
    },
    {
      text: "Better",
      color: "bg-[#F3FF90]",
      blur: true,
    },
    {
      text: "More Trust",
      color: "bg-[#C8A1E0]",
      blur: false,
    },
    {
      text: "Best The Others",
      color: "bg-[#F3FF90]",
      blur: true,
    },

  ];

  const handleLogin = async (e) => {
    if (name === '' || pass === '' || mail === '') {
      alert("Enter Login Details Atleast bruv");
    }
    else {
      console.log(name);
      console.log(pass);
      console.log(mail);
      try {
        const temp = {
          name: name,
          password: pass,
          mail: mail,
        };
        // setuser(temp);
        const response = await fetch("https://localhost:8081/pOne/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(temp)
        })

        const responsePromise = await response.text();
        if(responsePromise === "Successfully Authenticated"){
          setmessage(responsePromise);
          navigate('/profile', {state: {user: temp}});
        }
        else {
          setmessage(responsePromise);
          alert("Invalid Credentials");
        }

        // console.log(responsePromise); // Log the response immediately        
        // setmessage(responsePromise);
        // console.log(message);
      }
      catch (e) {
        alert("Unable To Process Your Request");
        console.log(e);
      }
    }
  };

  const handleSingUp = async (e) => {
    if (name === '' || pass === '' || mail === '') {
      alert("Enter Sign Up Details Atleast bruv");
    }
    else {
      try {
        const response = await fetch("https://localhost:8081/pOne/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            password: pass,
            mail: mail,
          },)
        })
        const responsePromise = await response.text();
        console.log(responsePromise);
        setmessage(responsePromise);


      }
      catch (e) {
        console.log(e, message);
        alert(message);
      }
    }
  };



  return (
    <div>
      <Background />
      <div className="absolute justify-center flex items-center overflow-hidden mt-2 bg-[url('/p-12.png')] bg-white ml-[15px] rounded-[50px] h-[98vh] w-[45vw]">
        <div className="flex flex-wrap items-center gap-4 ml-4 p-2">
          {
            list.map((items, index) => (<Cards item={items} key={index} />))
          }
        </div>
      </div>
      <div className="text-black flex relative ml-[60vw] top-20 h-[80vh] w-[30vw]">
        <div>
          <h1 className="mt-[10vh] text-[25px] text-white tracking-widest ">{login ? "Log In" : "Sign Up"}</h1>
          <h1 className="text-white/50 text-sm py-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quo, ipsum beatae perferendis ut consequatur ex voluptatibus.</h1>
          <div className="">
            <h1 className="text-white">Name</h1>
            <input type="Text" placeholder="Enter Your Name" className="bg-black text-white w-[30vw] py-4" value={name} onChange={(e) => { setname(e.target.value); console.log(name) }} />
            <h1 className="text-white">Mail</h1>
            <input type="Text" placeholder="Enter Your Mail" className="bg-black text-white w-[30vw] py-4" value={mail} onChange={(e) => { setmail(e.target.value); console.log(mail) }} />
            <h1 className="text-white">Password</h1>
            <input type="Text" placeholder="Enter Your Password" className="bg-black text-white w-[30vw] py-4" value={pass} onChange={(e) => { setpass(e.target.value); console.log(pass) }} />
            <button className="bg-white h-10 w-full rounded-full mt-5" value="Button" onClick={(e) => {
              if (login) {
                handleLogin(e);
                console.log(message);
              }
              else {
                handleSingUp(e);
                console.log(message);
              }
            }
            }
            >
              {login ? "Login" : "Sign Up"}
            </button>
          </div>
          <div className=" w-full flex">
            <div className="h-[1px] w-1/2 bg-white mt-6"></div>
            <h1 className="text-white/50 mt-3">or</h1>
            <div className="h-[1px] w-1/2 bg-white mt-6"></div>
          </div>
          <button className="w-full h-10 rounded-full mt-5 bg-white" onClick={(e) => setlogin(login ? false : true)}>{login ? "Sign Up" : "Log In"}</button>
          <div className="w-full h-5 py-5">
            <h1 className="text-white">{message}</h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;