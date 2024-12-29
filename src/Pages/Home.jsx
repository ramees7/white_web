import HLanding from "../Components/HomePage/HLanding";
import SEOHelmet from "../SEOHelmet/SEOHelmet";

export default function Home() {
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
    </>
  );
}
