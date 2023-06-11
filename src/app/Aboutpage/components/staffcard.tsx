import { FC } from "react";
import staffimage from "../assets/images/staffimg.jpg";
import Image from "next/image";

interface StaffpropsProps {}

const StaffCard: FC<StaffpropsProps> = () => {
  return (
    <div className="">
      <div className="">
        <Image
          loading="lazy"
          placeholder="blur"
          src={staffimage}
          alt="staffcard"
          className="max-h-1/3"
        />
      </div>

      <div className="my-3">
        <h2 className="text-sm capitalize text-blue-500 md:text-base">
          frontend developer
        </h2>
        <h3 className="text-base font-medium capitalize text-lightdark md:text-xl">
          temitope david
        </h3>
      </div>
    </div>
  );
};

export default StaffCard;
