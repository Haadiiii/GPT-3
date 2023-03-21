import React from "react";
import Feature from "../../components/feature/Feature";

const featureData = [
  {
    title: "Improving and Distructs instantly",
    text: " GPT-3 is a language model that uses deep learning to produce human-like text. It was created by OpenAI, a non-profit artificial intelligence research company.",
  },
  {
    title: "Become the tended active",
    text: "From the moment you start using GPT-3, you will be able to create content that is more engaging and more effective than ever before.",
  },
  {
    title: "Message to the Future",
    text: "GPT-3 can be used to create chatbots, which are computer programs that simulate human conversation.",
  },
  {
    title: "The Future is Now",
    text: "GPT-3 can be used to create knowledge graphs, which are a type of graph that represents knowledge about a domain.",
  },
];

const Features = () => {
  return (
    <div
    id="feature"
      className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 
    justify-between  p-4"
    >
      <div className="flex flex-col items-center p-4">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-l from-orange-400 to-purple-500 text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-bold p-5  ml-4 w-80">
          The Future is Now and You Just Need To Realize It. Step into the
          Future with GPT-3 & Make it Happen
        </h1>
        <p className="text-yellow-200 cursor-pointer opacity-50">
          Request Early Access to Get Started
        </p>
      </div>
      <div className="flex flex-col p-4">
        {featureData.map((feature, index) => (
          <div
          key={feature.title + index}
          className="flex flex-row"
          >
          <Feature
            title={feature.title}
            text={feature.text}
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
