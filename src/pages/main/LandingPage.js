import Navigation from "../../components/NavBars/Navigation";
import Hero from "../../components/NavBars/hero";
import baaagggggg from "../../assets/images/bg2.jpg";
import ChatBot from "../../components/chatbot/ChatBot";

function LandingPage() {
  return (
    <div className=" font-epilogue bg-[hsl(0,0%,98%)] h-screen">
      <div className=" flex flex-col">
        <Navigation />
        <img src={baaagggggg} alt="image-hero-mobile" className="lg:hidden max-h-full" />
        <div className=" lg:flex lg:mx-44 lg:gap-4 lg:mt-10 max-h-full">
          <img
            src={baaagggggg}
            alt="image-hero-desktop"
            className="hidden lg:flex lg:order-2 max-w-full max-h-screen overflow-auto"
          />
          <Hero />
        </div>
      </div>
      <ChatBot/>
    </div>
  );
}

export default LandingPage;
