import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
AOS.init();
const Features = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <div>
      <div className="md:text-center text-left px-4 mx-auto">
        <h1 className="md:text-[40px] text-[30px] font-bold">
          Features of <span className="text-maincolor">RhythmFest</span>
        </h1>
        <p className="text-[#57595B] text-sm md:text-base mt-2 mx-auto max-w-xl mb-20">
          Discover how we turn your musical dreams into unforgettable
          experiences, from planning to execution.
        </p>
      </div>

      <div className="grid gap-12 mx-auto max-w-screen-lg grid-cols-1 md:grid-cols-2 px-4 overflow-hidden pb-5">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature}></FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default Features;
