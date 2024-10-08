import Lottie from "lottie-react";
import loginAnimation from "../../assets/images/login_animation.json";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaGoogle } from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
const Login = () => {
  const { userLogin, googleLogin } = useContext(AuthContext);
  const [passState, setPassState] = useState(false);
  const handleShowPass = () => {
    setPassState(!passState);
  };
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    userLogin(email, password)
      .then(() => {
        // const loggedUser = res.user;
        // console.log(loggedUser);
        const user = { email };
        axios
          .post(`https://assignment-11-server-xi-nine.vercel.app/jwt`, user, {
            withCredentials: true,
          })
          .then((res) => {
            if (res.data.success) {
              toast.success("Login Successful");
              navigate("/");
            }
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="">
      <Toaster />
      <div className="hero-content flex-col md:flex-row">
        <Lottie
          animationData={loginAnimation}
          className="h-[400px] md:h-[450px] md:w-[450px]"
        ></Lottie>
        <div className="">
          <div className="hero-content flex-col ">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h1 className="font-bold text-4xl text-center pt-4">Login </h1>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password </span>
                  </label>
                  <div className="flex place-items-center">
                    <input
                      type={passState ? "text" : "password"}
                      name="password"
                      className="input input-bordered"
                      required
                    />

                    <span className="mb-3" onClick={handleShowPass}>
                      {passState ? (
                        <BiSolidHide className="absolute right-10 text-lg" />
                      ) : (
                        <FaEye className="absolute right-10 text-lg" />
                      )}
                    </span>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="mt-4 flex">
                  <p
                    onClick={handleGoogleLogin}
                    className="flex place-items-center gap-3 btn btn-ghost"
                  >
                    <FaGoogle></FaGoogle>Google
                  </p>
                </div>
              </form>
              <p className="p-4 -mt-10">
                New to this site ? Register{" "}
                <Link className="text-blue-600 underline" to="/register">
                  here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
