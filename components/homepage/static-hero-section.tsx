import Image from "next/image";
import rotator1 from "@/public/images/rotator_1.webp";

export default function StaticHeroSection() {
  return (
    <section className="mx-auto h-[590px] max-w-[1675px] overflow-hidden md:rounded-b-lg lg:h-[665px] 3xl:max-w-[1870px]">
      <div className="relative size-full px-2 pb-[150px]">
        <div className="absolute inset-x-0 top-0 z-10 size-full bg-[rgba(1,58,151,0.5)] md:bg-[rgba(1,58,151,0.6)]"></div>
        <Image
          src={rotator1}
          alt={"Hero Image"}
          className="absolute left-0 top-0 z-0 size-full object-cover"
          priority
          sizes="
          (min-width: 1940px) 1870px,
          (min-width: 1780px) 1675px,
          (min-width: 380px) calc(93.84vw + 23px),
          calc(66.67vw + 100px)
           "
        />
        <div className="relative z-10 mx-auto flex size-full max-w-[1200px] flex-col items-center justify-end text-center text-white">
          <h2 className="pb-4 text-2xl font-bold lg:text-4xl 2xl:text-5xl">
            Lorem ipsum dolor sit amet, consectetur.
          </h2>
          <p className="line-clamp-5 overflow-hidden text-ellipsis text-lg font-normal leading-6 2xl:text-xl 2xl:leading-8">
            Integer vulputate, nibh vel sagittis egestas, dui dolor vehicula
            dui. Integer vulputate, nibh vel sagittis egestas, dui dolor
            vehicula dui. Integer vulputate, nibh vel sagittis egestas, dui
            dolor vehicula dui. Integer vulputate, nibh vel sagittis egestas,
            dui dolor vehicula dui. Integer vulputate, nibh vel sagittis
            egestas, dui dolor vehicula dui. Integer vulputate, nibh vel
            sagittis egestas, dui dolor vehicula dui. Integer vulputate, nibh
            vel sagittis egestas, dui dolor vehicula dui.
          </p>
        </div>
      </div>
    </section>
  );
}
