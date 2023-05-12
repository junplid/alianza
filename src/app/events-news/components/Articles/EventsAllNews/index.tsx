import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

interface PropArticleAllNews_I {
  image: StaticImageData;
  title: string;
  description: string;
}

export const ComponentArticleAllNews: React.FC<PropArticleAllNews_I> = (
  props: PropArticleAllNews_I,
): JSX.Element => {
  return (
    <Link
      href={"/"}
      className='group opacity-90 hover:opacity-100 duration-200'
    >
      <article>
        <Image
          src={props.image}
          height={280.47 + 600}
          width={310 + 600}
          alt='imagem'
        />
        <div className='flex flex-col h-72 justify-between'>
          <div>
            <h2 className='h-24 line-clamp-3 text-event-news text-2xl mt-4 mb-1'>
              {props.title}
            </h2>
            <p className='line-clamp-4 font-light text-lg text-normal-2 mb-2'>
              {props.description}
            </p>
          </div>
          <div className='flex justify-end w-full'>
            <button className='group-hover:-translate-y-1 duration-200 group-hover:shadow-main-3 p-3 rounded-md group-hover:bg-main-2 bg-main flex items-center justify-between gap-x-2'>
              <HiOutlineArrowCircleRight
                className='text-w group-hover:text-main-2 duration-200'
                size={35}
              />
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
};
