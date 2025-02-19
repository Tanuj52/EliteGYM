// src/pages/Home.jsx
import Hero from "../components/home/Hero";
import Infrastructure from "../components/home/Infrastructure";
import Programs from "../components/home/Programs";
import Features from "../components/home/Features";
import Equipment from "../components/home/Equipment";
import Pricing from "../components/home/Pricing";
import CallToAction from "../components/home/CallToAction";

const Home = () => {
  return (
    <div>
      <Hero />
      <Infrastructure />
      <Programs />
      <Features />
      <Equipment />
      <Pricing />
      <CallToAction />
    </div>
  );
};

export default Home;
