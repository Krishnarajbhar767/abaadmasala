import React from "react";

type Props = {
    headingColorCode: string;
    text: string;
};

const HeroHeading = ({ headingColorCode, text }: Props) => {
    const mainText = text.split(" ").at(0);
    const otherText = text.split(" ").slice(1).join(" ");
    return (
        <h1 className="scroll-m-20 text-center text-[2.5rem] xl:text-5xl font-thin tracking-wide text-balance uppercase font-bernhc">
            <span style={{ color: headingColorCode }}>{mainText}</span>{" "}
            {otherText}
        </h1>
    );
};

export default HeroHeading;
