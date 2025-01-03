import { useState, useEffect } from "react";
import { RiWhatsappFill } from "react-icons/ri";

export default function WhatsAppChat() {
  const [position, setPosition] = useState({
    x: 95, // Default position 95% from the left
    y: 90, // Default position 90% from the top
  });

  const [dragStart, setIsDragStart] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size on resize and update state for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 480);
      setPosition({
        x: 95, // Reset to 95% from the left
        y: 90, // Reset to 90% from the top
      });
    };

    // Listen for resize events
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize state for initial load
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", ""); // Prevent default behavior
    setIsDragStart(true);
  };

  const handleDrag = (e) => {
    if (e.clientX > 0 && e.clientY > 0) {
      // Ensure the icon stays within the window bounds
      const newX = Math.max(
        5,
        Math.min((e.clientX / window.innerWidth) * 100, 90)
      ); // Clamp x percentage to prevent overflow
      const newY = Math.max(
        5,
        Math.min((e.clientY / window.innerHeight) * 100, 90)
      ); // Clamp y percentage
      setPosition({ x: newX, y: newY });
    }
  };

  const handleDragEnd = (e) => {
    const newX = Math.max(
      5,
      Math.min((e.clientX / window.innerWidth) * 100, 90)
    ); // Clamp x percentage
    const newY = Math.max(
      5,
      Math.min((e.clientY / window.innerHeight) * 100, 90)
    ); // Clamp y percentage
    setPosition({ x: newX, y: newY });
  };

  return (
    <div>
      {/* WhatsApp Icon */}
      <div
        draggable
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        className={`fixed flex items-center justify-center cursor-pointer md:text-6xl text-5xl text-[#43cd66] animate-pulse-scale ${
          dragStart ? "" : "right-[25px]"
        }`}
        style={{
          top: isSmallScreen ? "auto" : `${position.y}%`, // Position based on percentage
          left: isSmallScreen ? "auto" : `${position.x}%`, // Position based on percentage
          transform: "translate(-50%, -50%)",
        }}
      >
        <a
          href="https://wa.me/918113000314" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiWhatsappFill />
        </a>
      </div>
    </div>
  );
}
