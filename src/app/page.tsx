import Image from "next/image";

export default function Home() {
  return (
    <main className='px-3 max-w-screen-2xl gap-x-9 m-auto'>
      <section className='pt-7 pb-3 md:pt-14 md:grid flex flex-col-reverse md:grid-cols-[minmax(210px,380px)_1fr] lg:grid-cols-[minmax(390px,450px)_1fr] gap-x-7 items-center'>
        <div className='flex flex-col items-center md:block'>
          <h1 className='text-5xl text-center md:text-start mb-4 md:mb-6 sm:text-6xl lg:text-7xl text-main font-bold'>
            Built we us a better world
          </h1>
          <p className='text-2xl text-center md:text-start leading-tight sm:text-3xl lg:text-4xl font-normal text-normal'>
            Our mission is to help promote and protect human rights around the
            world.
          </p>
          <button className='mt-6 max-w-md w-full hover:shadow-main-2 hover:-translate-y-0.5 duration-200 hover:bg-main-2-hover h-14 lg:h-16 bg-main-2 px-9 text-main-2 text-2xl lg:text-3xl font-bold rounded-xl'>
            Donate
          </button>
        </div>
        <div className='flex w-full justify-center md:mb-0 mb-7 md:justify-end'>
          <Image
            className='h-auto max-w-full sm:max-w-xl md:max-w-full'
            width={810.33}
            height={721.59}
            src={"https://i.ibb.co/N3b8VxL/Group-3-1.png"}
            alt='Imagem1'
          />
        </div>
      </section>
    </main>
  );
}
