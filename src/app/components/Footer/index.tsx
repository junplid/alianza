import Image from "next/image";
import Link from "next/link";

export function ComponentFooter(): JSX.Element {
  return (
    <footer className=' bg-main-body py-20 px-3 mt-20 text-w flex flex-col gap-y-10 items-center'>
      <div className='w-full flex flex-col gap-y-7 items-center'>
        <h2 className='uppercase text-5xl font-bold'>alianza</h2>
        <p className='text-xl opacity-50'>Built with us a better world.</p>
        <div className='max-w-xs'>
          <button className='hover:shadow-main-2 duration-200 hover:bg-main-2-hover h-12 bg-main-2 px-9 text-main-2 text-lg font-bold rounded-xl'>
            Donate
          </button>
        </div>
        <nav className='max-w-4xl w-full'>
          <ul className='flex flex-row flex-wrap w-full justify-between'>
            <li className='text-lg font-normal opacity-70 hover:opacity-100'>
              <Link href={"/"}>About Us</Link>
            </li>
            <li className='text-lg font-normal opacity-70 hover:opacity-100'>
              <Link href={"/"}>Events and News</Link>
            </li>
            <li className='text-lg font-normal opacity-70 hover:opacity-100'>
              <Link href={"/"}>Issues</Link>
            </li>
            <li className='text-lg font-normal opacity-70 hover:opacity-100'>
              <Link href={"/"}>Involved</Link>
            </li>
            <li className='text-lg font-normal opacity-70 hover:opacity-100'>
              <Link href={"/"}>Contact</Link>
            </li>
            <li className='text-lg font-normal opacity-70 hover:opacity-100'>
              <Link href={"/"}>FAQs</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='flex items-center gap-x-10'>
        <Link href='/'>
          <svg
            width='13'
            height='28'
            viewBox='0 0 13 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='group'
          >
            <path
              d='M10.3799 5.23386H12.554V1.0145C12.1789 0.957004 10.889 0.827637 9.38671 0.827637C6.2522 0.827637 4.10497 3.02467 4.10497 7.06269V10.779H0.645996V15.4959H4.10497V27.3645H8.34584V15.497H11.6649L12.1918 10.7801H8.34485V7.53041C8.34584 6.16708 8.67527 5.23386 10.3799 5.23386Z'
              className='group-hover:fill-main fill-w'
            />
          </svg>
        </Link>
        <Link href={"/"}>
          <svg
            width='27'
            height='25'
            viewBox='0 0 27 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='group'
          >
            <path
              d='M27.0001 2.99425C26.0183 3.47414 24.9722 3.79223 23.8816 3.94668C25.0036 3.20018 25.8599 2.02712 26.2625 0.613185C25.2164 1.3082 24.0614 1.79912 22.8305 2.07308C21.8372 0.8945 20.4215 0.164551 18.8771 0.164551C15.8807 0.164551 13.4684 2.87474 13.4684 6.1972C13.4684 6.67526 13.5047 7.13492 13.5938 7.57252C9.0943 7.32798 5.11285 4.92485 2.4382 1.26407C1.97125 2.16685 1.69735 3.20018 1.69735 4.31257C1.69735 6.4013 2.6626 8.25283 4.1014 9.32477C3.23185 9.30638 2.3788 9.02507 1.6561 8.58195C1.6561 8.60034 1.6561 8.62424 1.6561 8.64814C1.6561 11.579 3.53215 14.0134 5.9923 14.5742C5.55175 14.7084 5.0716 14.7727 4.5733 14.7727C4.2268 14.7727 3.877 14.7507 3.54865 14.6698C4.2499 17.0582 6.2398 18.8141 8.6059 18.8711C6.7645 20.4763 4.42645 21.4434 1.89535 21.4434C1.4515 21.4434 1.0258 21.4213 0.600098 21.3607C2.99755 23.0835 5.83885 24.0672 8.9029 24.0672C18.8623 24.0672 24.3073 14.8739 24.3073 6.90509C24.3073 6.63848 24.299 6.38107 24.2875 6.1255C25.3616 5.27603 26.2642 4.21513 27.0001 2.99425Z'
              className='group-hover:fill-main fill-w'
            />
          </svg>
        </Link>
        <Link href={"/"}>
          <svg
            width='27'
            height='30'
            viewBox='0 0 27 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='group'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.25 0.490234H18.15C22.7056 0.490234 26.4 4.607 26.4 9.68355V20.7155C26.4 25.7921 22.7056 29.9088 18.15 29.9088H8.25C3.69435 29.9088 0 25.7921 0 20.7155V9.68355C0 4.607 3.69435 0.490234 8.25 0.490234ZM18.15 27.1507C21.3345 27.1507 23.925 24.264 23.925 20.7154V9.68344C23.925 6.13482 21.3345 3.24812 18.15 3.24812H8.25C5.0655 3.24812 2.475 6.13482 2.475 9.68344V20.7154C2.475 24.264 5.0655 27.1507 8.25 27.1507H18.15Z'
              className='group-hover:fill-main fill-w'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M6.6001 15.1994C6.6001 11.1378 9.55525 7.84473 13.2001 7.84473C16.8449 7.84473 19.8001 11.1378 19.8001 15.1994C19.8001 19.261 16.8449 22.554 13.2001 22.554C9.55525 22.554 6.6001 19.261 6.6001 15.1994ZM9.0751 15.1994C9.0751 17.7331 10.9264 19.7961 13.2001 19.7961C15.4738 19.7961 17.3251 17.7331 17.3251 15.1994C17.3251 12.6639 15.4738 10.6028 13.2001 10.6028C10.9264 10.6028 9.0751 12.6639 9.0751 15.1994Z'
              className='group-hover:fill-main fill-w'
            />
            <ellipse
              cx='20.295'
              cy='7.29348'
              rx='0.87945'
              ry='0.980007'
              className='group-hover:fill-main fill-w'
            />
          </svg>
        </Link>
      </div>
    </footer>
  );
}
