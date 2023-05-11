"use client";

import { useState } from "react";
import { ComponentBarAside } from "./Bar";
import useOnclickOutside from "react-cool-onclickoutside";
import Link from "next/link";

export function ComponentAsideHeader(): JSX.Element {
  const [activeBar, setActiveBar] = useState(false);
  const ref = useOnclickOutside(() => setActiveBar(false));

  return (
    <div className='relative' style={{ zIndex: 11 }} ref={ref}>
      <ComponentBarAside active={activeBar} onclick={setActiveBar} />

      <aside
        className={`fixed top-28 duration-300 ${
          activeBar ? "right-0" : "-right-full"
        } w-5/6 sm:w-1/2 h-screen`}
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <nav>
          <ul className='py-3 flex flex-col w-full max-w-2xl justify-between'>
            <li>
              <Link
                href={"/events-news"}
                className='text-2xl duration-200 justify-start flex w-full py-5 px-6'
              >
                Events and News
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className='text-2xl duration-200 text-start flex justify-start w-full py-5 px-6'
              >
                Get Involved
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className='text-2xl duration-200 text-start flex justify-start w-full py-5 px-6'
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className='text-2xl duration-200 text-start flex justify-start w-full py-5 px-6'
              >
                Issues
              </Link>
            </li>
          </ul>
        </nav>
        <div className='px-6 block md:hidden w-full'>
          <button className='duration-200 w-full bg-main-2 py-4 px-4 text-main-2 text-2xl font-semibold rounded-xl'>
            Donate
          </button>
        </div>
      </aside>
    </div>
  );
}
