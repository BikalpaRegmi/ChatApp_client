import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../axiosConfig";

interface UserInput {
  name: string;
  email: string;
  password: string;
  pic: string | null; // Updated to string for the URL
}

const Signup = () => {
  const [inputUser, setInputUser] = useState<UserInput>({
    name: "",
    email: "",
    password: "",
    pic: null,
  });

  const [conPassword, setConPassword] = useState("");

  const navigate = useNavigate();

  const postDetails = (file: File) => {
    if (!file) return toast.error("Please select an image");

    if (file.type === "image/jpeg" || file.type === "image/png") {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "Belegram");
      data.append("cloud_name", "bikalpacloud");

      fetch(`https://api.cloudinary.com/v1_1/bikalpacloud/image/upload`, {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data && data.url) {
            setInputUser((prev) => ({
              ...prev,
              pic: data.url.toString(),
            }));
            toast.success("Image uploaded successfully!");
          } else {
            toast.error("Image upload failed: No URL returned");
          }
        })
        .catch((err) => {
          toast.error("Image upload failed");
          console.error(err);
        });
    } else {
      toast.error("Please select an image of type png or jpeg");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "pic" && files && files[0]) {
      postDetails(files[0]);
    } else {
      setInputUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !inputUser.name ||
      !inputUser.email ||
      !inputUser.password ||
      !conPassword
    ) {
      return toast.error("Please fill all the fields");
    }

    if (inputUser.password !== conPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const { data } = await axios.post(`/user/register`, inputUser);
      if (data) {
        toast.success("Registration successful");
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/chats");
      }
    } catch (error) {
      console.error(error);
      toast.error("Registration failed");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-100 flex flex-col px-16 pb-5 pl-3 gap-3 shadow-md">
          <h1 className="text-center pt-3 text-lg font-mono text-green-900">
            SignUp
          </h1>
          <input
            type="text"
            value={inputUser.name}
            onChange={handleChange}
            className="border-2 h-9 pl-3"
            placeholder="Enter Your Name"
            name="name"
          />
          <input
            type="text"
            value={inputUser.email}
            onChange={handleChange}
            className="border-2 h-9 pl-3"
            placeholder="Enter Your Email"
            name="email"
          />
          <input
            type="password"
            value={inputUser.password}
            onChange={handleChange}
            className="border-2 h-9 pl-3"
            placeholder="Enter Your Password"
            name="password"
          />
          <input
            type="password"
            value={conPassword}
            onChange={(e) => setConPassword(e.target.value)}
            className="border-2 h-9 pl-3"
            placeholder="Confirm Password"
          />
          <input type="file" name="pic" onChange={handleChange} />
          <button
            type="submit"
            className="bg-blue-800 hover:bg-black font-mono text-white mx-48 h-9 rounded-xl"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default Signup;
