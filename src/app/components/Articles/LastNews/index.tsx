"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";

interface PropsArticleIssues_I {
  title: string;
  Image: StaticImageData;
  pharagraph: string;
  link?: string;
}

export function ComponentArticleLastNews(
  props: PropsArticleIssues_I,
): JSX.Element {
  return (
    <Link href={props.link ?? "/events-news"}>
      <article className='flex flex-col min830:flex-row hover:shadow-main-3 hover:-translate-y-1 duration-300 group hover:bg-main rounded-xl bg-grey-light'>
        <Image
          src={props.Image}
          height={342 + 100}
          width={309 + 100}
          alt='imagem'
        />
        <div className='flex w-full flex-col justify-between p-3 lg:p-3 xl:p-5'>
          <div className='h-full'>
            <h2 className='h-16 line-clamp-2 group-hover:text-w text-normal mb-1 text-2xl font-semibold'>
              {props.title}
            </h2>
            <p className='lg:line-clamp-4 line-clamp-2 group-hover:text-w font-light text-lg text-normal-2 leading-relaxed'>
              {props.pharagraph}
            </p>
          </div>
          <div className='mt-4 flex justify-end'>
            <div className='group-hover:bg-main-2 bg-main h-14 md:h-10 lg:h-14 w-20 rounded-md grid place-items-center hover:bg-main-hover hover:-translate-y-0.5 duration-200 hover:shadow-main-2'>
              <BsArrowRightCircle
                className='text-w group-hover:text-main'
                size={23}
              />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
