import { useSwiper } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type swipperButtons = {
    className: string;
};

const SwipperNavbuttons = (props: swipperButtons) => {
    const { className } = props;
    const swiper = useSwiper();
    return (
        <div className={`${className} w-2/6 text-right`}>
            <button
                onClick={() => swiper.slidePrev()}
                className="border-2 rounded-full p-2 mr-6"
            >
                <BsChevronLeft className="text-white " />
            </button>
            <button
                onClick={() => swiper.slideNext()}
                className="border-2  rounded-full p-2"
            >
                <BsChevronRight className="text-white" />
            </button>
        </div>
    );
};

export default SwipperNavbuttons;
