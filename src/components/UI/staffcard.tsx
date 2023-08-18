import { FC } from "react";
import staffimage from "public/images/staffimg.jpg";
import Image, { StaticImageData } from "next/image";
import { staffdata } from "../../../type";

interface StaffpropsProps {
  id: number;
  image: StaticImageData;
  Name: string;
  role: string;
}

const StaffCard = ({ id, image, Name, role }: StaffpropsProps) => {
  return (
    <div className="">
      <div className="">
        <Image
          loading="lazy"
          src={image}
          alt="staffcard"
          className="max-h-1/3 h-[200px] w-[200px] lg:h-[400px] lg:w-[400px]"
        />
      </div>

      <div className="my-3">
        <h2 className="text-sm capitalize text-blue-500 md:text-base">
          {role}
        </h2>
        <h3 className="text-base font-medium capitalize text-lightdark md:text-xl">
          {Name}
        </h3>
      </div>
    </div>
  );
};

export default StaffCard;
