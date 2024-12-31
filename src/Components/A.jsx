// import  { useState } from "react";
// import { sendOtp, verifyOtp, resetPassword } from "./api";

// const A = () => {
//   const [step, setStep] = useState(1); // Track current step
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSendOtp = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await sendOtp(email);
//       setMessage(response.data); // Display success message
//       setStep(2); // Move to OTP verification step
//     } catch (error) {
//       setMessage(error.response?.data || "Error sending OTP");
//     }
//   };

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await verifyOtp(email, otp);
//       setMessage(response.data); // Display success message
//       setStep(3); // Move to password reset step
//     } catch (error) {
//       setMessage(error.response?.data || "Error verifying OTP");
//     }
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await resetPassword(email, otp, newPassword);
//       setMessage(response.data); // Display success message
//       setStep(4); // Move to success step
//     } catch (error) {
//       setMessage(error.response?.data || "Error resetting password");
//     }
//   };

//   return (
//     <div className="password-reset">
//       {step === 1 && (
//         <div>
//           <h2>Forget Password</h2>
//           <form onSubmit={handleSendOtp}>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <button type="submit">Send OTP</button>
//           </form>
//         </div>
//       )}

//       {step === 2 && (
//         <div>
//           <h2>Verify OTP</h2>
//           <form onSubmit={handleVerifyOtp}>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               required
//             />
//             <button type="submit">Verify OTP</button>
//           </form>
//         </div>
//       )}

//       {step === 3 && (
//         <div>
//           <h2>Reset Password</h2>
//           <form onSubmit={handleResetPassword}>
//             <input
//               type="password"
//               placeholder="Enter new password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               required
//             />
//             <button type="submit">Reset Password</button>
//           </form>
//         </div>
//       )}

//       {step === 4 && (
//         <div>
//           <h2>Success</h2>
//           <p>Your password has been reset successfully.</p>
//         </div>
//       )}

//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default A;
