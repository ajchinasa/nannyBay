import imageOne from "../../../assets/images/landingPage/heroSlideImageOne.webp";
import imageTwo from "../../../assets/images/landingPage/heroSlideImageTwo.webp";
import imageThree from "../../../assets/images/landingPage/test.webp";

const slides: {
  image: string;
  heading: string;
  sub: string;
  cta: string;
  path: string;
  position: string;
}[] = [
  {
    image: imageOne,
    heading: "Professional Cleaning Service",
    sub: "Simplifying Life, One Home At A Time",
    cta: "Book a Clean",
    path: "/services#housekeeping",
    position: "center center",
  },
  {
    image: imageTwo,
    heading: "Trusted Care for Your Little Ones",
    sub: "Professional nannies who treat your children like family.",
    cta: "Book a Nanny",
    path: "/services#nanny-services",
    position: "center center",
  },
  {
    image: imageThree,
    heading: "Safe, Reliable Transportation",
    sub: "Professional drivers you can count on every day.",
    cta: "Book a Driver",
    path: "/services#driver",
    position: "center 30%",
  },
];

export default slides;
