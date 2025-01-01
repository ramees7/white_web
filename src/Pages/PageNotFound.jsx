import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleToTop();
  }, [location]);

  return <div className="mt-24">PageNotFound</div>;
}
