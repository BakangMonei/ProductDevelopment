import Navigation from "../../components/NavBars/Navigation";
import Hero from "../../components/NavBars/hero";
import mobilehero from "../../assets/images/image-hero-mobile.png";
import desktophero from "../../assets/images/image-hero-desktop.png";
import baaagggggg from "../../assets/images/bg2.jpg";

function LandingPage() {
  return (
    <div className=" font-epilogue bg-[hsl(0,0%,98%)]">
      <div className=" flex flex-col">
        <Navigation />
        <img src={baaagggggg} alt="image-hero-mobile" className="lg:hidden" />
        <div className=" lg:flex lg:mx-44 lg:gap-4 lg:mt-10">
          <img
            src={baaagggggg}
            alt="image-hero-desktop"
            className="hidden lg:flex lg:order-2 max-w-full max-h-screen overflow-auto"
          />
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
