"use client";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { useEffect, useState } from "react";
import { usePageVisibility } from "react-page-visibility";
import Skeleton from "react-loading-skeleton";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 7000, min: 1100 },
    items: 5,
    partialVisibilityGutter: 8,
  },
  desktop: {
    breakpoint: { max: 1100, min: 820 },
    items: 4,
    partialVisibilityGutter: 10,
  },
  tablet: {
    breakpoint: { max: 820, min: 400 },
    items: 3,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 590, min: 0 },
    items: 2,
    partialVisibilityGutter: 20,
  },
};

export const ComponentCarousel = ({
  children,
}: {
  children: JSX.Element[];
}): JSX.Element => {
  const [load, setLoad] = useState<boolean>(false as boolean);
  const isVisible = usePageVisibility();

  return (
    <Carousel
      className='z-10'
      partialVisible
      transitionDuration={!isVisible ? 60 * 60 * 60 * 99 : 3000}
      infinite
      autoPlay
      arrows={false}
      responsive={responsive}
    >
      {children}
    </Carousel>
  );
};
