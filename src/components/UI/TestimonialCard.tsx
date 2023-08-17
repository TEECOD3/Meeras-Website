type TestimonialProps = {
  description: string;
  name: string;
  position: string;
};

const TestimonialCard = (props: TestimonialProps) => {
  const { description, name, position } = props;
  return (
    <div className="flex flex-col items-center py-10 px-4 sm:px-6 md:px-8 ">
      <p className="text-white text-lg md:text-2xl xl:text-xl mt-8">
        {description}
      </p>

      <div className="w-full flex items-start flex-col mt-10 sm:mt-4">
        <h3 className="capitalize font-extralight text-xl md:text-2xl text-white">
          {name}
        </h3>
        <h4 className="uppercase font-medium text-base md:mt-3 text-white">
          {position}
        </h4>
      </div>
    </div>
  );
};

export default TestimonialCard;
