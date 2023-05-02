import * as React from "react";

type twitterprops = {};
const Twitter = (props: twitterprops) => (
    <svg
        width={24}
        height={21}
        viewBox="0 0 24 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M23 2a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 3s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.279-.028-.556-.08-.83A7.72 7.72 0 0 0 23 2v0Z"
            stroke="#06182D"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
export default Twitter;
