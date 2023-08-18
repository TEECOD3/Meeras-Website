import { Skeleton } from "@/components/UI/skeleton";

const Loading = () => {
  return (
    <div className="py-32">
      <section className="py-16 lg:py-28">
        <section className="mx-auto px-3 lg:w-[82%] flex flex-col">
          <Skeleton className="h-5 w-20"></Skeleton>
          <Skeleton className="items-center justify-center h-[70vh] sm:h-full w-full "></Skeleton>
        </section>

        <Skeleton className="">
          <Skeleton className=" w-full h-[400px]">
            <Skeleton className=" h-[300px] lg:w-[95%] ">
              <Skeleton className="h-20 w-full">
                {Array.from({ length: 8 }, (_, i) => (
                  <Skeleton key={i} className="h-[200px]">
                    <Skeleton className="flex w-full items-center  h-[100px]">
                      <Skeleton className="h-[20px]  "></Skeleton>
                    </Skeleton>
                  </Skeleton>
                ))}
              </Skeleton>
            </Skeleton>
          </Skeleton>

          <Skeleton className=" mx-auto mt-10 w-11/12 md:w-[82%] h-[300px] "></Skeleton>
        </Skeleton>
      </section>
    </div>
  );
};

export default Loading;
