import "./css.css";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

interface PropsArticleEventsNews_I {
  image: StaticImageData;
  text: string;
  link?: string;
}

export const ComponentArticleEventsNews: React.FC<PropsArticleEventsNews_I> = (
  props: PropsArticleEventsNews_I,
): JSX.Element => {
  return (
    <article className='text-w relative max-w-md'>
      <Image
        src={props.image}
        height={395 + 300}
        width={308 + 300}
        alt='imagem'
      />
      <div className='pt-3 px-5 md:pt-2 md:px-4 xl:pt-4 xl:px-8 absolute top-0 left-0'>
        <span className='text-shadow-1 text-lg uppercase'>june 5</span>
      </div>
      <div className='absolute px-5 pr-6 pb-6 md:px-4 md:pr-5 md:pb-5 xl:px-8 xl:pr-10 xl:pb-10 bottom-0 left-0'>
        <Link
          href={props.link ?? "/"}
          className='group flex items-center justify-between gap-x-2'
        >
          <span className='duration-200 group-hover:text-main-3 text-shadow-1 text-lg lg:text-2xl line-clamp-2'>
            {props.text}
          </span>
          <HiOutlineArrowCircleRight
            className='group-hover:text-main-3 duration-200'
            size={52}
          />
        </Link>
      </div>
    </article>
  );
};
