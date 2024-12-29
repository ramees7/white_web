import { useState } from "react";
import { RiWhatsappFill } from "react-icons/ri";

export default function WhatsAppChat() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed bottom-5 right-5">
      {/* WhatsApp Icon */}
      <div
        onClick={toggleChat}
        className={`flex items-center justify-center md:text-6xl text-5xl text-[#43cd66] cursor-pointer ${
          !isChatOpen && "animate-pulse-scale"
        }`}
      >
        <RiWhatsappFill />
      </div>
      {/* Chat Box */}
      {isChatOpen && (
        <div
          className={`absolute bottom-16 right-0 bg-white  shadow-xl  rounded-lg w-80 p-4 animate-slide-up`}
        >
          <h3 className="md:text-lg text-base font-semibold mb-2">
            Chat with us!
          </h3>
          <p className="md:text-sm text-xs  mb-4">
            Hi there! How can we help you today? 😊
          </p>
          <a
            href="https://wa.me/918113000314" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#43cd66] text-white py-2 rounded-md font-medium hover:bg-[#3ab759] transition"
          >
            Start Chat
          </a>
        </div>
      )}
    </div>
  );
}
