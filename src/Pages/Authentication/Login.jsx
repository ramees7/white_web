import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "../../Axios/InstanceAxios";
import HLandingBg1 from "../../assets/Hlanding-bg-1.jpg";
import { ThemeContext } from "../../Context/ThemeContextApi";
import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { CiLogin } from "react-icons/ci";

export default function Login() {
  const { theme } = useContext(ThemeContext);
  const navigate=useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const { email, password } = values;

        const response = await axiosInstance.post("/api/login", {
          email,
          password,
        });

        message.success("Login successful!");
        navigate('/')
        console.log("Token:", response.data.token); // Save token securely
      } catch (error) {
        console.error("Login error:", error);
        message.error(error.response?.data || "Server Error");
      }
    },
  });

  return (
    <div
      className={`grid lg:grid-cols-7 md:grid-cols-6 mt-24 min-h-[600px] w-full ${
        theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
      }`}
    >
      <div className="col-span-3 flex items-center justify-center py-10">
        <div>
          <h1 className="md:text-4xl text-3xl mb-1 font-semibold">
            Welcome Back!
          </h1>
          <h3 className="md:text-base text-sm mb-5">
            Please Enter Your Credentials
          </h3>
          <form onSubmit={formik.handleSubmit} className="w-[350px]">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-3 py-2 border rounded-sm ${
                  theme === "dark"
                    ? "bg-[#121212] text-white border-[#464646]"
                    : "bg-white text-black"
                }`}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="email"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-xs">
                  {formik.errors.email}
                </div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={`w-full px-3 py-2 border rounded-sm ${
                  theme === "dark"
                    ? "bg-[#121212] text-white border-[#464646]"
                    : "bg-white text-black"
                }`}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="current-password"
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-xs">
                  {formik.errors.password}
                </div>
              )}
            </div>

            <div className="w-full text-end md:text-sm text-xs mb-4">
              <Link to={"/forget-password"}>Forgot Password?</Link>
            </div>
            <button
              type="submit"
              className={`w-full ${
                theme === "dark"
                  ? "bg-white text-black"
                  : "bg-[#121212] text-white"
              } py-2 rounded-sm  mb-2`}
              disabled={formik.isSubmitting}
            >
              Login
            </button>
            <div className="w-full  md:text-sm text-xs flex items-center justify-center">
              <h3>Don&apos;t have an account? </h3>
              <Link to={"/register"} className="flex ms-3 items-center gap-1">
                <CiLogin className="text-xl " />
                <h3>Register</h3>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div className="lg:col-span-4 md:col-span-3 md:block hidden">
        <img src={HLandingBg1} alt="Background" className="w-full h-full" />
      </div>
    </div>
  );
}
