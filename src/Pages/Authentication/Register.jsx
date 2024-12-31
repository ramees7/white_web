import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "../../Axios/InstanceAxios";
import HLandingBg1 from "../../assets/Hlanding-bg-1.jpg";
import { ThemeContext } from "../../Context/ThemeContextApi";
import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { CiLogin } from "react-icons/ci";

export default function Register() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const { name, email, phone, password } = values;

        const response = await axiosInstance.post("/api/register", {
          name,
          email,
          phone,
          password,
        });
        console.log(response);
        message.success("Please check your email for OTP.");
        navigate("/verify-otp");
      } catch (error) {
        console.error("Registration error:", error);
        message.error(error.response.data);
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
            Welcome To Whiter
          </h1>
          <h3 className="md:text-base text-sm mb-5">
            Please Enter Your Details
          </h3>
          <form onSubmit={formik.handleSubmit} className="w-[350px]">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full px-3 py-2 border  rounded-sm ${
                  theme === "dark"
                    ? "bg-[#121212] text-white border-[#464646]"
                    : "bg-white text-black"
                }`}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="username"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-xs">{formik.errors.name}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-3 py-2 border  rounded-sm ${
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
              <label htmlFor="phone" className="block text-sm">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className={`w-full px-3 py-2 border  rounded-sm ${
                  theme === "dark"
                    ? "bg-[#121212] text-white border-[#464646]"
                    : "bg-white text-black"
                }`}
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="phone"
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-red-500 text-xs">
                  {formik.errors.phone}
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
                className={`w-full px-3 py-2 border  rounded-sm ${
                  theme === "dark"
                    ? "bg-[#121212] text-white border-[#464646]"
                    : "bg-white text-black"
                }`}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="new-password"
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-xs">
                  {formik.errors.password}
                </div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={`w-full px-3 py-2 border  rounded-sm ${
                  theme === "dark"
                    ? "bg-[#121212] text-white border-[#464646]"
                    : "bg-white text-black"
                }`}
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="new-password"
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.confirmPassword}
                  </div>
                )}
            </div>

            <button
              type="submit"
              className={`w-full ${
                theme === "dark"
                  ? "bg-white text-black "
                  : "bg-[#121212] text-white "
              }  py-2 rounded-sm mb-2`}
              disabled={formik.isSubmitting}
            >
              Register
            </button>
            <div className="w-full  md:text-sm text-xs flex items-center justify-center">
              <h3>Already have an account? </h3>
              <Link to={"/login"} className="flex ms-3 items-center gap-1">
                <CiLogin className="text-xl " />
                <h3>Login</h3>
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
