

const Signup=()=>{
    return (<>
      <div className="bg-gray-100 flex flex-col px-16 pb-5 pl-3 gap-3 shadow-md">
          <h1 className="text-center pt-3 text-lg font-mono text-green-900">SignUp</h1>
      <input type="text" className="border-2 h-9  pl-3" placeholder="Enter Your Name" />
      <input type="text" className="border-2 h-9  pl-3" placeholder="Enter Your Email" />
      <input type="password" className="border-2 h-9  pl-3" placeholder="Enter Your Password" />
          <input type="password" className="border-2  h-9 pl-3" placeholder="Confirm Password" />
          
          <button className="bg-blue-800 hover:bg-black font-mono  text-white mx-48 h-9 rounded-xl">Submit</button>
    </div>
  </>
  );
}

export default Signup
