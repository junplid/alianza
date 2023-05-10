import Image from "next/image";

export default function Home() {
  return (
    <main className='flex flex-col gap-y-16 pt-24 px-3 max-w-screen-2xl gap-x-9 m-auto'>
      <section className='md:grid flex flex-col-reverse md:grid-cols-[minmax(210px,380px)_1fr] lg:grid-cols-[minmax(390px,450px)_1fr] gap-x-7 items-center'>
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
      <section className='flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_400px] xl:grid-cols-[minmax(0,1fr)_500px] lg:gap-x-7 items-center'>
        <Image
          className='px-6 lg:px-0 sm:px-16 lg:max-w-full h-auto'
          src={"https://i.ibb.co/87GXjMJ/section-2.jpg"}
          width={762 + 200}
          height={763}
          alt='imagem'
        />
        <div className='mt-10 lg:mt-0 divide-y'>
          <div className='py-9 lg:py-6 xl:py-8 border-grey first:pt-0 last:pb-0'>
            <h2 className='text-center lg:text-left text-4xl font-semibold text-normal-2'>
              Who we are?
            </h2>
            <p className='text-center font-normal lg:text-left leading-relaxed mt-3 text-normal  text-2xl'>
              We connect ideas and resources with other NGOs to build a better
              world for everyone.
            </p>
          </div>
          <div className='py-9 lg:py-6 xl:py-8 border-grey first:pt-0 last:pb-0'>
            <h2 className='text-center lg:text-left text-4xl font-semibold text-normal-2'>
              What we do?
            </h2>
            <p className='text-center font-normal lg:text-left leading-relaxed mt-3 text-normal  text-2xl'>
              We protect and promote the protection of the planet and human
              dignity, we encourage awareness of the climate, the environment,
              data and technology, human rights, among other related issues.
            </p>
          </div>
          <div className='py-9 lg:py-6 xl:py-8 border-grey first:pt-0 last:pb-0'>
            <h2 className='text-center lg:text-left text-4xl font-semibold text-normal-2'>
              Why we do it?
            </h2>
            <p className='text-center font-normal lg:text-left leading-relaxed mt-3 text-normal  text-2xl'>
              NGOs have the reach and established strategies to collectively
              provide solutions to major social and cultural problems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
