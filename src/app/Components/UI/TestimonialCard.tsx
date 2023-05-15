type testimonialprops = {
    description: string;
    name: string;
    position: string;
};

const TestimonialCard = (props: testimonialprops) => {
    const { description, name, position } = props;
    return (
        <>
            <div className="flex flex-col h-full sm:h-[15rem] md:h-[20rem]   w-full lg:mt-10   justify-between items-start px-3 text-white font-bold  md:px-10">
                <p className="sm:text-base md:text-2xl xl:text-2xl mt-8">
                    {description}
                </p>

                <div className=" mt-20 sm:mt-4 ">
                    <h3 className="capitalize font-extralight text-xl md:text-2xl">
                        {name}
                    </h3>
                    <h4 className="uppercase font-medium text-base md:mt-3">
                        {position}
                    </h4>
                </div>
            </div>
        </>
    );
};

export default TestimonialCard;
