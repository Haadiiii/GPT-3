import React from "react";

type ArticleProps = {
  imgUrl: any;
  text: string;
  date: string;
};

const Article = ({date, text, imgUrl }: ArticleProps) => {
  return (
    <div
      // card container
      className="bg-blog rounded-lg p-4"
    >
      <div>
        <img src={imgUrl} alt="blgimg" />
      </div>
      <div className="flex flex-col text-white gap-10 mt-3">
        <div className="flex flex-col gap-2 ">
          <p>{date}</p>
          <p
            className="text-white font-bold text-sm md:text-base lg:text-base xl:text-base 2xl:text-base
            "
          >
            {text}
          </p>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
