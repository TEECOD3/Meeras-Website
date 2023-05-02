import React, { ReactNode } from "react";

type pagecontainerprops = {
    children: ReactNode;
};

const PageContainer = (props: pagecontainerprops) => {
    const { children } = props;
    return (
        <main className="fixed z-50 w-full backdrop-blur-md bg-white/20  mx-auto max-lg:w-full ">
            {children}
        </main>
    );
};

export default PageContainer;

//  IPv4 Address. . . . . . . . . . . : 192.168.56.1
//    IPv4 Address. . . . . . . . . . . : 192.168.250.145
