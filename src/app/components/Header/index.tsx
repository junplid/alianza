import "./style.css";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import { ComponentAsideHeader } from "./Aside";

export function ComponentHeader(): JSX.Element {
  return (
    <div className='shadow-main px-3'>
      <header className='max-w-screen-2xl gap-x-4 m-auto h-28 flex items-center w-full justify-between'>
        <h1 className='uppercase text-5xl font-bold text-main'>alianza</h1>
        <nav className='hidden lg:visible w-full lg:flex justify-center'>
          <ul className='flex items-center w-full max-w-2xl justify-between'>
            <li>
              <a className='text-xl duration-200 rounded-lg px-3 py-2 hover:bg-link-hover cursor-pointer items-center flex gap-x-1'>
                <span>About Us</span>
                <RiArrowDownSLine size={28} />
              </a>
            </li>
            <li>
              <Link
                href={"/"}
                className='text-xl duration-200 rounded-lg px-3 py-3 hover:bg-link-hover'
              >
                Events and News
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className='text-xl duration-200 rounded-lg px-3 py-3 hover:bg-link-hover'
              >
                Get Involved
              </Link>
            </li>
            <li>
              <a className='text-xl duration-200 rounded-lg px-3 py-2 hover:bg-link-hover cursor-pointer items-center flex gap-x-1'>
                <span>Issues</span>
                <RiArrowDownSLine size={28} />
              </a>
            </li>
          </ul>
        </nav>
        <div className='w-full lg:w-48 flex justify-end items-center gap-x-7'>
          <div className='button_d'>
            <button className='hover:shadow-main-2 hover:-translate-y-0.5 duration-200 hover:bg-main-2-hover h-16 bg-main-2 px-9 text-main-2 text-3xl font-bold rounded-xl'>
              Donate
            </button>
          </div>
          <div className='lg:hidden visible'>
            <ComponentAsideHeader />
          </div>
        </div>
      </header>
    </div>
  );
}
