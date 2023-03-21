import React from "react";
import Article from "../../components/article/Article";
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';

const Blog = () => {
  return (
    <div
      id="blog"
      className="flex flex-col items-center justify-center p-4"
    >
      <h1 className="text-transparent bg-clip-text bg-gradient-to-l from-orange-400 to-purple-500 text-xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold p-5 ">
        A lot is Happening, We are Blogging about it.
      </h1>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row p-4 gap-4">
        <div
          className="flex "
        >
          <Article 
          imgUrl={blog01}
          text="GPT-3 and the Future of AI: A Conversation with OpenAI's Sam Altman
          "
          date = "12/12/2021"
           />
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 
      gap-4"
        >
          <Article
            imgUrl={blog02}
            text="GPT-3 and the Future of AI: A Conversation with OpenAI's Sam Altman
            "
            date="12/12/2021"
           />
          <Article
            imgUrl={blog03}
            text="GPT-3 and the Future of AI: A Conversation with OpenAI's Sam Altman"
            date="12/12/2021"
           />
          <Article
            imgUrl={blog04}
            text="GPT-3 and the Future of AI: A Conversation with OpenAI's Sam Altman"
            date="12/12/2021"
           />
          <Article
            imgUrl={blog05}
            text="GPT-3 and the Future of AI: A Conversation with OpenAI's Sam Altman"
            date="12/12/2021"
           />
        </div>
      </div>
    </div>
  );
};

export default Blog;
