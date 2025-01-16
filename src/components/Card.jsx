import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";
import { motion } from "framer-motion";


const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={1} className="relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">
        {data.desc}
      </p>
      <div className="footer absolute left-0 bottom-0 w-full ">
        <div className="flex items-center justify-between py-3 px-8 mb-2">
          <h5>{data.filesize}</h5>
          <span className="w-5 h-5 rounded-full  bg-zinc-200 flex items-center justify-center ">
           {data.close ? <RiCloseLargeFill size=".8em" color="#000"/> :<MdOutlineFileDownload size=".8em" color="#000" />}
          </span>
        </div> 
        {data.tag.isOpen? <div className={`tag w-full py-4 ${data.tagColor} flex justify-center items-center`}>
          <h3 className="text-sm font-semibold ">{data.tag.tagTitle}</h3>
        </div> : null }
        
      </div>
    </motion.div>
  );
};

export default Card;
