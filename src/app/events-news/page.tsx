import { ComponentArticleEventsNews } from "./components/Articles/EventsNews";
import { ComponentCarousel } from "./components/Carousel";

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
      <main className=''></main>
    </div>
  );
}
