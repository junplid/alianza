"use client";
import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";

interface PropsArticleIssues_I {
  Icon: any;
  title: string;
  pharagraph: string;
  link?: string;
  bgIcon: "bg-main-3" | "bg-main" | "bg-main-strong";
}

export function ComponentArticleIssues({
  Icon,
  ...props
}: PropsArticleIssues_I): JSX.Element {
  return (
    <Link href={props.link ?? "/"}>
      <article className='hover:shadow-main-3 hover:-translate-y-1 duration-300 cursor-pointer hover:bg-main group flex flex-col justify-between rounded-xl bg-grey-light p-7'>
        <div>
          <div
            className={`group-hover:bg-grey-light mb-4 grid place-items-center h-14 w-14 ${props.bgIcon} rounded-md`}
          >
            {Icon}
          </div>
          <h2 className='line-clamp-1 group-hover:text-w text-normal mb-1 text-2xl font-semibold'>
            {props.title}
          </h2>
          <p className='line-clamp-4 group-hover:text-w font-light text-lg text-normal-2 leading-relaxed'>
            {props.pharagraph}
          </p>
        </div>
        <div className='mt-4 flex justify-end'>
          <div className='group-hover:bg-main-2 bg-main h-14 w-20 rounded-md grid place-items-center hover:bg-main-hover hover:-translate-y-0.5 duration-200 hover:shadow-main-2'>
            <BsArrowRightCircle
              className='text-w group-hover:text-main'
              size={23}
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
