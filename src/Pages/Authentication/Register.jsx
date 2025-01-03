// import { useContext, useEffect } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axiosInstance from "../../Axios/InstanceAxios";
// import HLandingBg1 from "../../assets/Hlanding-bg-1.jpg";
// import { ThemeContext } from "../../Context/ThemeContextApi";
// import { message } from "antd";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { CiLogin } from "react-icons/ci";

// export default function Register() {
//   const { theme } = useContext(ThemeContext);
//   const navigate = useNavigate();

//   const location = useLocation();

//   const handleToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     handleToTop();
//   }, [location]);

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       phone: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required("Name is required"),
//       email: Yup.string()
//         .email("Invalid email format")
//         .required("Email is required"),
//       phone: Yup.string()
//         .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
//         .required("Phone is required"),
//       password: Yup.string()
//         .min(6, "Password must be at least 6 characters")
//         .required("Password is required"),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref("password"), null], "Passwords must match")
//         .required("Confirm password is required"),
//     }),
//     onSubmit: async (values) => {
//       try {
//         const { name, email, phone, password } = values;

//         const response = await axiosInstance.post("/api/register", {
//           name,
//           email,
//           phone,
//           password,
//         });
//         console.log(response);
//         message.success("Please check your email for OTP.");
//         navigate("/verify-otp");
//       } catch (error) {
//         console.error("Registration error:", error);
//         message.error(error.response.data);
//       }
//     },
//   });

//   return (
//     <div
//       className={`grid lg:grid-cols-7 md:grid-cols-6 mt-24 min-h-[600px] w-full ${
//         theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
//       }`}
//     >
//       <div className="col-span-3 flex items-center justify-center py-10">
//         <div>
//           <h1 className="md:text-4xl text-3xl mb-1 font-semibold">
//             Welcome To Whiter
//           </h1>
//           <h3 className="md:text-base text-sm mb-5">
//             Please Enter Your Details
//           </h3>
//           <form onSubmit={formik.handleSubmit} className="w-[350px]">
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-sm">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className={`w-full px-3 py-2 border  rounded-sm ${
//                   theme === "dark"
//                     ? "bg-[#121212] text-white border-[#464646]"
//                     : "bg-white text-black"
//                 }`}
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 autoComplete="username"
//               />
//               {formik.touched.name && formik.errors.name && (
//                 <div className="text-red-500 text-xs">{formik.errors.name}</div>
//               )}
//             </div>

//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className={`w-full px-3 py-2 border  rounded-sm ${
//                   theme === "dark"
//                     ? "bg-[#121212] text-white border-[#464646]"
//                     : "bg-white text-black"
//                 }`}
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 autoComplete="email"
//               />
//               {formik.touched.email && formik.errors.email && (
//                 <div className="text-red-500 text-xs">
//                   {formik.errors.email}
//                 </div>
//               )}
//             </div>

//             <div className="mb-4">
//               <label htmlFor="phone" className="block text-sm">
//                 Phone
//               </label>
//               <input
//                 type="text"
//                 id="phone"
//                 name="phone"
//                 className={`w-full px-3 py-2 border  rounded-sm ${
//                   theme === "dark"
//                     ? "bg-[#121212] text-white border-[#464646]"
//                     : "bg-white text-black"
//                 }`}
//                 value={formik.values.phone}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 autoComplete="phone"
//               />
//               {formik.touched.phone && formik.errors.phone && (
//                 <div className="text-red-500 text-xs">
//                   {formik.errors.phone}
//                 </div>
//               )}
//             </div>

//             <div className="mb-4">
//               <label htmlFor="password" className="block text-sm">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className={`w-full px-3 py-2 border  rounded-sm ${
//                   theme === "dark"
//                     ? "bg-[#121212] text-white border-[#464646]"
//                     : "bg-white text-black"
//                 }`}
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 autoComplete="new-password"
//               />
//               {formik.touched.password && formik.errors.password && (
//                 <div className="text-red-500 text-xs">
//                   {formik.errors.password}
//                 </div>
//               )}
//             </div>

//             <div className="mb-4">
//               <label htmlFor="confirmPassword" className="block text-sm">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 className={`w-full px-3 py-2 border  rounded-sm ${
//                   theme === "dark"
//                     ? "bg-[#121212] text-white border-[#464646]"
//                     : "bg-white text-black"
//                 }`}
//                 value={formik.values.confirmPassword}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 autoComplete="new-password"
//               />
//               {formik.touched.confirmPassword &&
//                 formik.errors.confirmPassword && (
//                   <div className="text-red-500 text-xs">
//                     {formik.errors.confirmPassword}
//                   </div>
//                 )}
//             </div>

//             <button
//               type="submit"
//               className={`w-full ${
//                 theme === "dark"
//                   ? "bg-white text-black "
//                   : "bg-[#121212] text-white "
//               }  py-2 rounded-sm mb-2`}
//               disabled={formik.isSubmitting}
//             >
//               Register
//             </button>
//             <div className="w-full  md:text-sm text-xs flex items-center justify-center">
//               <h3>Already have an account? </h3>
//               <Link to={"/login"} className="flex ms-3 items-center gap-1">
//                 <CiLogin className="text-xl " />
//                 <h3>Login</h3>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>

//       <div className="lg:col-span-4 md:col-span-3 md:block hidden">
//         <img src={HLandingBg1} alt="Background" className="w-full h-full" loading="lazy"/>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { message } from "antd"; // Replace with your notification library if different
import { useNavigate, useLocation, Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import axiosInstance from "../../Axios/InstanceAxios";
import { ThemeContext } from "../../Context/ThemeContextApi";
import HLandingBg1 from "../../assets/Hlanding-bg-1.jpg";

export default function Register() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState(1); // Step state for form navigation
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [timer, setTimer] = useState(60); // Initial timer for OTP resend

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleToTop();
  }, [location]);

  // Timer effect to enable the resend button
  useEffect(() => {
    if (step === 2 && isResendDisabled && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }

    if (timer === 0) {
      setIsResendDisabled(false);
    }
  }, [step, isResendDisabled, timer]);

  const handleResendOtp = async () => {
    try {
      const email = registerFormik.values.email;

      if (!email) {
        return message.error("Please enter your email before resending OTP.");
      }

      await axiosInstance.post("/api/resend-otp", { email });
      message.success("OTP has been resent to your email!");
      setIsResendDisabled(true);
      setTimer(60); // Restart timer
    } catch (error) {
      console.error("Resend OTP error:", error);
      message.error(error.response?.data || "Server Error");
    }
  };

  const registerFormik = useFormik({
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

        await axiosInstance.post("/api/register", {
          name,
          email,
          phone,
          password,
        });
        message.success("Please check your email for OTP.");
        setStep(2); // Move to the OTP verification step
      } catch (error) {
        console.error("Registration error:", error);
        message.error(error.response?.data || "Server Error");
      }
    },
  });

  const otpFormik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: Yup.object({
      otp: Yup.string()
        .length(6, "OTP must be 6 digits")
        .required("OTP is required"),
    }),
    onSubmit: async (values) => {
      try {
        await axiosInstance.post("/api/verify-otp", {
          otp: values.otp,
          email:registerFormik.values.email
        });

        message.success("OTP verified! Registration successful.");
        navigate("/login"); // Navigate to the login page
      } catch (error) {
        console.error("OTP verification error:", error);
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
          {step === 1 && (
            <>
              <h1 className="md:text-4xl text-3xl mb-1 font-semibold">
                Welcome to Whiter
              </h1>
              <h3 className="md:text-base text-sm mb-5">
                Please Enter Your Details
              </h3>
              <form
                onSubmit={registerFormik.handleSubmit}
                className="w-[350px]"
              >
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
                    value={registerFormik.values.name}
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                    autoComplete="username"
                  />
                  {registerFormik.touched.name &&
                    registerFormik.errors.name && (
                      <div className="text-red-500 text-xs">
                        {registerFormik.errors.name}
                      </div>
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
                    value={registerFormik.values.email}
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                    autoComplete="email"
                  />
                  {registerFormik.touched.email &&
                    registerFormik.errors.email && (
                      <div className="text-red-500 text-xs">
                        {registerFormik.errors.email}
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
                    value={registerFormik.values.phone}
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                    autoComplete="phone"
                  />
                  {registerFormik.touched.phone &&
                    registerFormik.errors.phone && (
                      <div className="text-red-500 text-xs">
                        {registerFormik.errors.phone}
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
                    value={registerFormik.values.password}
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                    autoComplete="new-password"
                  />
                  {registerFormik.touched.password &&
                    registerFormik.errors.password && (
                      <div className="text-red-500 text-xs">
                        {registerFormik.errors.password}
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
                    value={registerFormik.values.confirmPassword}
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                    autoComplete="new-password"
                  />
                  {registerFormik.touched.confirmPassword &&
                    registerFormik.errors.confirmPassword && (
                      <div className="text-red-500 text-xs">
                        {registerFormik.errors.confirmPassword}
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
                  disabled={registerFormik.isSubmitting}
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
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="md:text-4xl text-3xl mb-1 font-semibold">
                Verify OTP
              </h1>
              <h3 className="md:text-base text-sm mb-5">
                Please Enter the OTP Sent to Your Email
              </h3>
              <form onSubmit={otpFormik.handleSubmit} className="w-[350px]">
                <div className="mb-4">
                  <label htmlFor="otp" className="block text-sm">
                    OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    className={`w-full px-3 py-2 border rounded-sm ${
                      theme === "dark"
                        ? "bg-[#121212] text-white border-[#464646]"
                        : "bg-white text-black"
                    }`}
                    value={otpFormik.values.otp}
                    onChange={otpFormik.handleChange}
                    onBlur={otpFormik.handleBlur}
                    autoComplete="one-time-code"
                  />
                  {otpFormik.touched.otp && otpFormik.errors.otp && (
                    <div className="text-red-500 text-xs">
                      {otpFormik.errors.otp}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className={`w-full ${
                    theme === "dark"
                      ? "bg-white text-black"
                      : "bg-[#121212] text-white"
                  } py-2 rounded-sm mb-4`}
                  disabled={otpFormik.isSubmitting}
                >
                  Verify OTP
                </button>
              </form>

              <button
                className={`w-full py-2 rounded-sm ${
                  isResendDisabled
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : theme === "dark"
                    ? "bg-white text-black"
                    : "bg-[#121212] text-white"
                }`}
                onClick={handleResendOtp}
                disabled={isResendDisabled}
              >
                {isResendDisabled
                  ? `Resend OTP in ${timer} seconds`
                  : "Resend OTP"}
              </button>
            </>
          )}
        </div>
      </div>
      <div className="lg:col-span-4 md:col-span-3 md:block hidden">
        <img
          src={HLandingBg1}
          alt="Background"
          className="w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
