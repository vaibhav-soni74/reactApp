import React, { useRef } from "react";
import Card from "./card";

const Foreground = () => {

 const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now" },
      tagColor: "bg-green-500",
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis sit laboriosam quidem nesciunt consequuntur.",
      filesize: "2mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now" },
      tagColor: "bg-blue-500",
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis sit laboriosam quidem nesciunt consequuntur.",
      filesize: "4mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now" },
      tagColor: "bg-orange-500",
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis sit laboriosam quidem nesciunt consequuntur.",
      filesize: "3Gb",
      close: true,
      tag: { isOpen: true, tagTitle: "Can't Download Now" },
      tagColor: "bg-red-500",
    },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] h-full w-full flex gap-5 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
