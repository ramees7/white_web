import { useLocation } from "react-router-dom";
import HLanding from "../Components/HomePage/HLanding";
import ProductCategory from "../Components/HomePage/ProductCategory";
import SEOHelmet from "../SEOHelmet/SEOHelmet";
import { useEffect } from "react";
import ProductCardView from "../Components/ProductCardView";

export default function Home() {
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

  return (
    <>
      <SEOHelmet
        title="WHITER – All White All Right"
        description="The perfect online and offline dress shop for all your fashion needs."
        keywords="dresses, fashion, online dress shop, offline dress shop, clothing, women fashion"
        ogImage="https://www.whiterallwhiteallright.com/og-image.jpg" // Replace with actual image URL
        url="https://www.whiterallwhiteallright.com" // Replace with actual homepage URL
      />
      <HLanding />
      <ProductCategory />
      <ProductCardView />
    </>
  );
}
