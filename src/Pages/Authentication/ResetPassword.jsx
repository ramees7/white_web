import HLandingBg1 from "../../assets/Hlanding-bg-1.jpg";
import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ThemeContext } from "../../Context/ThemeContextApi";
import { message } from "antd";
import axiosInstance from "../../Axios/InstanceAxios";
import { Link, useLocation } from "react-router-dom";

export default function ResetPassword() {
  const [step, setStep] = useState(1);
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const [timer, setTimer] = useState(60); // Timer for OTP resend
  const [isResendDisabled, setIsResendDisabled] = useState(true); // Disable resend button when timer is active

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleToTop();
  }, [location]);

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

  const handleEmailSubmit = async (email) => {
    try {
      const response = await axiosInstance.post("/api/forget-password", {
        email,
      });
      message.success(response.data);
      setStep(2);
    } catch (error) {
      message.error(error.response?.data || "Error sending OTP");
    }
  };

  const handleOtpSubmit = async (email, otp) => {
    try {
      const response = await axiosInstance.post("/api/verify-password-otp", {
        email,
        otp,
      });
      message.success(response.data);
      setStep(3);
    } catch (error) {
      message.error(error.response?.data || "Error verifying OTP");
    }
  };
  const handleResendOtp = async (email) => {
    try {
      const response = await axiosInstance.post("/api/resend-otp-forget", {
        email,
      });
      setIsResendDisabled(true); // Disable resend button after sending OTP
      setTimer(60); // Reset timer to 60 seconds when resend is clicked
      message.success(response.data || "OTP resent successfully!");
    } catch (error) {
      message.error(error.response?.data || "Error resending OTP");
    }
  };

  const handlePasswordReset = async (email, otp, newPassword) => {
    try {
      const response = await axiosInstance.post("/api/reset-password", {
        email,
        otp,
        newPassword,
      });
      message.success(response.data);
      setStep(4); // Success step
    } catch (error) {
      console.log(error);

      const errorMessage = error.response?.data || "Error resetting password";
      message.error(errorMessage);
    }
  };

  const emailFormik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: (values) => handleEmailSubmit(values.email),
  });

  const otpFormik = useFormik({
    initialValues: { otp: "" },
    validationSchema: Yup.object({
      otp: Yup.string()
        .length(6, "OTP must be 6 digits")
        .required("OTP is required"),
    }),
    onSubmit: (values) => handleOtpSubmit(emailFormik.values.email, values.otp),
  });

  const passwordFormik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) =>
      handlePasswordReset(
        emailFormik.values.email,
        otpFormik.values.otp,
        values.newPassword
      ),
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
            {step === 1 && "Enter Email Address"}
            {step === 2 && "Verify OTP"}
            {step === 3 && "Reset Password!"}
          </h1>
          <h3 className="md:text-base text-sm mb-5">
            {(step === 1 || step === 2 || step === 3) &&
              "Please Enter Your Credentials"}
          </h3>

          {step === 1 && (
            <form className="w-[350px]" onSubmit={emailFormik.handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-3 py-2 border rounded-sm ${
                    theme === "dark"
                      ? "bg-[#121212] text-white border-[#464646]"
                      : "bg-white text-black"
                  }`}
                  {...emailFormik.getFieldProps("email")}
                />
                {emailFormik.touched.email && emailFormik.errors.email && (
                  <div className="text-red-500 text-xs">
                    {emailFormik.errors.email}
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
                disabled={emailFormik.isSubmitting}
              >
                Submit Email
              </button>
            </form>
          )}

          {step === 2 && (
            <form className="w-[350px]" onSubmit={otpFormik.handleSubmit}>
              <div className="mb-4">
                <label htmlFor="otp" className="block text-sm">
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  className={`w-full px-3 py-2 border rounded-sm ${
                    theme === "dark"
                      ? "bg-[#121212] text-white border-[#464646]"
                      : "bg-white text-black"
                  }`}
                  {...otpFormik.getFieldProps("otp")}
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
                Submit OTP
              </button>
              <button
                className={`w-full py-2 rounded-sm ${
                  isResendDisabled
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : theme === "dark"
                    ? "bg-white text-black"
                    : "bg-[#121212] text-white"
                }`}
                onClick={() => handleResendOtp(emailFormik.values.email)}
                disabled={isResendDisabled}
              >
                {isResendDisabled
                  ? `Resend OTP in ${timer} seconds`
                  : "Resend OTP"}
              </button>
            </form>
          )}

          {step === 3 && (
            <form className="w-[350px]" onSubmit={passwordFormik.handleSubmit}>
              <div className="mb-4">
                <label htmlFor="newPassword" className="block text-sm">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className={`w-full px-3 py-2 border rounded-sm ${
                    theme === "dark"
                      ? "bg-[#121212] text-white border-[#464646]"
                      : "bg-white text-black"
                  }`}
                  {...passwordFormik.getFieldProps("newPassword")}
                />
                {passwordFormik.touched.newPassword &&
                  passwordFormik.errors.newPassword && (
                    <div className="text-red-500 text-xs">
                      {passwordFormik.errors.newPassword}
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
                  className={`w-full px-3 py-2 border rounded-sm ${
                    theme === "dark"
                      ? "bg-[#121212] text-white border-[#464646]"
                      : "bg-white text-black"
                  }`}
                  {...passwordFormik.getFieldProps("confirmPassword")}
                />
                {passwordFormik.touched.confirmPassword &&
                  passwordFormik.errors.confirmPassword && (
                    <div className="text-red-500 text-xs">
                      {passwordFormik.errors.confirmPassword}
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
                disabled={passwordFormik.isSubmitting}
              >
                Reset Password
              </button>
            </form>
          )}

          {step === 4 && (
            <div className="text-center w-[350px]">
              <h2 className="text-xl font-semibold">Success!</h2>
              <p className="mb-3">Your password has been reset successfully.</p>
              <button
                className={`w-full ${
                  theme === "dark"
                    ? "bg-white text-black"
                    : "bg-[#121212] text-white"
                } py-2 rounded-sm`}
              >
                <Link to={"/login"}>Back to Login</Link>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="lg:col-span-4 md:col-span-3 hidden md:block">
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
