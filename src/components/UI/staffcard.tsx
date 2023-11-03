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
    <div className="flex items-center justify-center flex-col">
      <div className="">
        <Image
          loading="lazy"
          src={image}
          alt="staffcard"
          className="max-h-1/3 h-[200px] w-[200px] lg:h-[350px] lg:w-[350px] object-cover"
        />
      </div>

      <div className="my-3 text-center">
        <h2 className="text-sm  font-semibold md:text-base uppercase">
          {role}
        </h2>
        <h3 className="text-sm font-medium capitalize text-lightdark md:text-base mt-2">
          {Name}
        </h3>
      </div>
    </div>
  );
};

export default StaffCard;
