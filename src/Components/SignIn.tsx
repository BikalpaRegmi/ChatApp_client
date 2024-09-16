import React, { Dispatch, SetStateAction, useState } from "react"
import axios from "../../axiosConfig";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
interface SignInProps{
    setSignIn: Dispatch<SetStateAction<Boolean>>;
}

interface UserInput {
  email: string,
  password:string
}

const SignIn: React.FC<SignInProps> = ({ setSignIn }) => {
  const [inputUser, setInputsUser] = useState<UserInput>({
    email: '',
    password:'',
  });
  
  const navigate = useNavigate();

  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/user/login', inputUser);
      if (data === 'Email not found plz register') toast.error('Email not found plz Register')
      
      else if (data === 'Password Did not Matched') toast.error("Password Did not Matched");
      
      else {
        toast.success('Sucessfully Logined');
        localStorage.setItem('userinfo', JSON.stringify(data));
        navigate('/chat');
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputsUser((prev) => ({
      ...prev , [e.target.name] : e.target.value
    }))
  }

  return (<>
    <form onSubmit={handleSubmit}>
      
      <div className="bg-gray-100 flex flex-col pt-3 p-16 pb-5 pl-3 gap-3 shadow-md">
        <h1 className="text-center text-lg font-mono text-green-900">Login</h1>
      <input name="email" value={inputUser.email} onChange={handleChange} type="text" className="border-2 h-9  pl-3" placeholder="Enter Your Email" />
          <input name="password" value={inputUser.password} onChange={handleChange} type="password" className="border-2 h-9  pl-3" placeholder="Enter Your Password" />
          <u onClick={()=>setSignIn(false)} className="pl-3 cursor-pointer hover:text-red-500 ">Register to a new account</u>
          
          <button type='submit' className="bg-blue-800 hover:bg-black font-mono  text-white mx-48 h-9 rounded-xl">Submit</button>
    </div>
    </form>
    <ToastContainer/>
  </>
  )
}

export default SignIn
