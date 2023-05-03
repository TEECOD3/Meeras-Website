import { FC } from "react";
import staffimage from "../../About/assets/images/staffimg.jpg";

interface StaffpropsProps {}

const StaffCard: FC<StaffpropsProps> = () => {
  return (
    <div className="">
      <div className="">
        <img src={staffimage} alt="staffcard" className="max-h-1/3" />
      </div>

      <div className="my-3">
        <h2 className="text-sm capitalize text-blue-500 md:text-base">ceo</h2>
        <h3 className="text-base capitalize font-medium text-lightdark md:text-xl">
          temitope david
        </h3>
      </div>
    </div>
  );
};

export default StaffCard;
