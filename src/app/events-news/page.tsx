import { BsArrowRightCircle } from "react-icons/bs";
import { ComponentArticleEventsNews } from "./components/Articles/EventsNews";
import { ComponentCarousel } from "./components/Carousel";
import ImagemMain from "../../../public/imagem-1-events-and-news.jpg";
import Image from "next/image";

export default function EventsNewsPage(): JSX.Element {
  return (
    <div>
      <div className='px-2 pt-16 pb-11' style={{ background: "#F3F4F6" }}>
        <h1 className='mb-14 text-5xl lg:text-7xl text-normal text-center'>
          Events and News
        </h1>
        <div className='max-w-screen-3xl m-auto gap-x-4'>
          <ComponentCarousel>
            <ComponentArticleEventsNews />
            <ComponentArticleEventsNews />
            <ComponentArticleEventsNews />
            <ComponentArticleEventsNews />
            <ComponentArticleEventsNews />
            <ComponentArticleEventsNews />
            <ComponentArticleEventsNews />
            <ComponentArticleEventsNews />
          </ComponentCarousel>
        </div>
      </div>
      <main className='px-2 pt-10 max-w-screen-2xl m-auto bg-w flex flex-col gap-y-14'>
        <div className='flex flex-col gap-y-6 lg:grid lg:grid-cols-[1fr_minmax(200px,1fr)] lg:gap-x-6 xl:gap-x-12 items-start'>
          <Image
            className='max-w-full h-auto'
            src={ImagemMain}
            height={519 + 200}
            width={699 + 200}
            alt='imagem'
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <div className='flex flex-col items-baseline gap-y-5'>
            <h2 className='text-4xl md:text-5xl text-event-news'>
              The humanitarian situation in Mariúpol is {'"devastating"'}, says
              Bachelet
            </h2>
            <p className='leading-tight text-lg md:text-3xl font-light text-normal'>
              The person in charge of ensuring human rights in the world
              verifies the death of 1,348 civilians in that city, although she
              considers that the real number of victims may be thousands of
              times higher. Mariupol is {'"shattered and exhausted"'} and the
              remaining residents{" "}
              {
                '"struggle daily with limited access to basic and social services, such as health care."'
              }
            </p>
            <div className='flex items-end justify-end w-full pr-'>
              <button className='duration-200 group hover:bg-main-2 py-3 px-5 md:py-5 md:px-9 bg-main rounded-md'>
                <BsArrowRightCircle
                  className='text-w group-hover:text-main-2'
                  size={30}
                />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
