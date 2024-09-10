import React from "react";
import Image, { StaticImageData } from "next/image";
import rotator1 from "@/public/images/rotator_1.webp";
import rotator2 from "@/public/images/rotator_2.webp";
type SlideData = {
  id: number;
  imageSrc: StaticImageData;
  altText: string;
  title: string;
  description: string;
};
export const dummySlideData: SlideData[] = [
  {
    id: 1,
    imageSrc: rotator1,
    altText: "Rotator 1",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    description:
      "Integer vulputate, nibh vel sagittis egestas, dui dolor vehicula dui. Integer vulputate, nibh vel sagittis egestas, dui dolor vehicula dui. Integer vulputate, nibh vel sagittis egestas, dui dolor vehicula dui. Integer vulputate, nibh vel sagittis egestas, dui dolor vehicula dui. Integer vulputate, nibh vel sagittis egestas, dui dolor vehicula dui. Integer vulputate, nibh vel sagittis egestas, dui dolor vehicula dui. Integer vulputate, nibh vel sagittis egestas, dui dolor vehicula dui.",
  },
  {
    id: 2,
    imageSrc: rotator2,
    altText: "Rotator 2",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    description:
      "Integer vulputate, nibh vel sagittis egestas, dui dolor vehicula dui. Integer vulputate, nib dui dolor vehicula dui. Integer vulputate, nibh vel sagittis egestas, dui dolor vehicula dui. Integer vulputate, nibh vel sagittis egestas, dui dolor vehicula dui.",
  },
];

type SlideProps = {
  item: SlideData;
  priority: boolean;
};

const HeroSlide: React.FC<SlideProps> = ({ item, priority }) => {
  return (
    <div className="relative size-full px-2 pb-[150px]">
      <div className="absolute inset-x-0 top-0 z-10 size-full bg-[rgba(1,58,151,0.5)] md:bg-[rgba(1,58,151,0.6)]"></div>
      <Image
        src={item.imageSrc}
        alt={item.altText}
        className="absolute left-0 top-0 z-0 size-full object-cover"
        priority={priority}
        placeholder="blur"
        sizes="
          (min-width: 1940px) 1870px,
          (min-width: 1780px) 1675px,
          (min-width: 380px) calc(93.84vw + 23px),
          calc(66.67vw + 100px)
           "
        fill={true}
      />
      <div className="relative z-10 mx-auto flex size-full max-w-[1200px] flex-col items-center justify-end text-center text-white">
        <h2 className="pb-4 text-2xl font-bold lg:text-4xl 2xl:text-5xl">
          {item.title}
        </h2>
        <p className="line-clamp-5 overflow-hidden text-ellipsis text-lg font-normal leading-6 2xl:text-xl 2xl:leading-8">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default HeroSlide;


