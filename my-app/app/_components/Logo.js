import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src={logo} height={60} quality={100} alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
/*
There are two ways of display image in Next.js
1. Directly statically importing the photo from the public 

import logo from "@/public/logo.png";

In this form we can add some properties to the Image element like quality, fill.

In this kind we don't need to give width and height, instead we can use the fill property and object-fit: cover 

<Image src={logo} height={60} quality={100} alt="The Wild Oasis logo" />

2. Directly linking the source to the public
In this kind we have to give the image a width and height 
<Image src='/logo.png' width='60' height='60' alt="The Wild Oasis logo" />

*/
