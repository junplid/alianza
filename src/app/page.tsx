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

// <div className='flex w-full justify-end'>
//   <div className='max-w-4xl justify-end grid grid-cols-2 items-baseline w-full'>
//     <Image
//       className='h-auto z-10 max-w-full translate-x-40 translate-y-10'
//       width={496.21}
//       height={337}
//       src={"https://i.ibb.co/9h0Jjwf/main-section-1.png"}
//       alt='Imagem1'
//     />
//     <div className='flex w-full justify-end z-10'>
//       <Image
//         className='h-auto max-w-full -translate-x-5'
//         width={290.91}
//         height={318}
//         src={"https://i.ibb.co/xY1Q8sN/main-section-2.png"}
//         alt='Imagem2'
//       />
//     </div>
//     <div className='flex w-full justify-end z-10'>
//       <Image
//         className='h-auto max-w-full translate-y-6 translate-x-24'
//         width={259.06}
//         height={283.59}
//         src={"https://i.ibb.co/8Yvt6rG/main-section-3.png"}
//         alt='Imagem3'
//       />
//     </div>
//     <Image
//       className='h-auto max-w-full -translate-x-3 -translate-y-6'
//       width={498.33}
//       height={332}
//       src={"https://i.ibb.co/BL6qBMd/main-section-4.png"}
//       alt='Imagem4'
//     />
//   </div>
// </div>
