// import React from "react";

// type Props = {};

// export default function HeroSubheading({}: Props) {
//     return (
//         <h3 className="">
//             The Joke Tax
//         </h3>

//     );
// }

import React from "react";

type Props = {
    heading: string;
    subheading: string;
    reverse?: boolean;
};

function HeroSubheading({ heading, subheading, reverse = false }: Props) {
    // Determine colors based on reverse prop
    const mainColor = reverse ? "text-primary" : "text-foreground-900";
    const subColor = reverse ? "text-foreground-900" : "text-primary";

    return (
        <h2
            className={`scroll-m-20 text-center text-3xl font-normal tracking-wider capitalize font-glecb ${mainColor}`}
        >
            {heading}
            <br />
            <span className={`ml-2 ${subColor}`}>{subheading}</span>
        </h2>
    );
}

export default HeroSubheading;
