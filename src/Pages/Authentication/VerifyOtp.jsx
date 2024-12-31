import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../Context/ThemeContextApi";
import axiosInstance from "../../Axios/InstanceAxios";
import { message } from "antd";
import HLandingBg1 from "../../assets/Hlanding-bg-1.jpg";
import { useNavigate } from "react-router-dom";

export default function VerifyOtp() {
  const navigate=useNavigate()
  const { theme } = useContext(ThemeContext);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [timer, setTimer] = useState(20); // Timer starts at 60 seconds

  // Timer effect to enable the resend button after 1 minute
  useEffect(() => {
    if (isResendDisabled && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }

    if (timer === 0) {
      setIsResendDisabled(false);
    }
  }, [isResendDisabled, timer]);

  // Function to handle resend OTP
  const handleResendOtp = async () => {
    try {
      await axiosInstance.post("/api/resend-otp"); // Replace with your API endpoint
      message.success("OTP has been resent to your email!");
      setIsResendDisabled(true);
      setTimer(60); // Restart timer
    } catch (error) {
      console.error("Resend OTP error:", error);
      message.error(error.response?.data || "Server Error");
    }
  };

  const formik = useFormik({
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
        const response = await axiosInstance.post("/api/verify-otp", {
          otp: values.otp,
        });

        message.success("OTP verified! Registration successful.");
        navigate('/login')
        console.log("Response:", response.data);
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
          <h1 className="md:text-4xl text-3xl mb-1 font-semibold">
            Verify OTP
          </h1>
          <h3 className="md:text-base text-sm mb-5">
            Please Enter the OTP Sent to Your Email
          </h3>
          <form onSubmit={formik.handleSubmit} className="w-[350px]">
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
                value={formik.values.otp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="one-time-code"
              />
              {formik.touched.otp && formik.errors.otp && (
                <div className="text-red-500 text-xs">{formik.errors.otp}</div>
              )}
            </div>

            <button
              type="submit"
              className={`w-full ${
                theme === "dark"
                  ? "bg-white text-black"
                  : "bg-[#121212] text-white"
              } py-2 rounded-sm mb-4`}
              disabled={formik.isSubmitting}
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
            {isResendDisabled ? `Resend OTP in ${timer} seconds` : "Resend OTP"}
          </button>
        </div>
      </div>

      <div className="lg:col-span-4 md:col-span-3 md:block hidden">
        <img src={HLandingBg1} alt="Background" className="w-full h-full" />
      </div>
    </div>
  );
}
