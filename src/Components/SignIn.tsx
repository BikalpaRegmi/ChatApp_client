import React, { Dispatch, SetStateAction } from "react"

interface SignInProps{
    setSignIn: Dispatch<SetStateAction<Boolean>>;
}

const SignIn:React.FC<SignInProps> = ({setSignIn}) =>{
  return (<>
      <div className="bg-gray-100 flex flex-col pt-3 p-16 pb-5 pl-3 gap-3 shadow-md">
        <h1 className="text-center text-lg font-mono text-green-900">Login</h1>
      <input type="text" className="border-2 h-9  pl-3" placeholder="Enter Your Email" />
          <input type="password" className="border-2 h-9  pl-3" placeholder="Enter Your Password" />
          <u onClick={()=>setSignIn(false)} className="pl-3 cursor-pointer hover:text-red-500 ">Register to a new account</u>
          
          <button className="bg-blue-800 hover:bg-black font-mono  text-white mx-48 h-9 rounded-xl">Submit</button>
    </div>
  </>
  )
}

export default SignIn
