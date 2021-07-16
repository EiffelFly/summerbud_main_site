import Link from "next/link";
import CustomLink from "../CustomLink";

const AboutButton = () => {
  return (
    <CustomLink href="/about">
      <a className="py-1 font-sans font-semibold text-xl text-sd-black link-underline align-baseline">
        About
      </a>
    </CustomLink>
  );
};

export default AboutButton;
