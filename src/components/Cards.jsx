import React from "react";
import Card from "./Card";

function Cards() {
  const text = [
    { header: "Up Next: News", title: "Insights and behind the scenes" },
    { header: "Get In Touch", title: "Let's get to it, together. " },
  ];
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto py-20 gap-2 flex">
        <Card
          width={"basis-1/3"}
          start={false}
          para={true}
          header={text[0].header}
          title={text[0].title}
        />
        <Card
          width={"basis-2/3"}
          start={true}
          para={false}
          hover={"true"}
           header={text[1].header}
          title={text[1].title}
        />
      </div>
    </div>
  );
}

export default Cards;
