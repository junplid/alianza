import Image from "next/image";
import { ComponentArticleIssues } from "./components/Articles/Issues";
import LastImage1 from "../../public/last-news-1.jpg";
import LastImage2 from "../../public/last-news-2.jpg";
import { ComponentArticleLastNews } from "./components/Articles/LastNews";

export default function Home() {
  return (
    <main className='flex flex-col gap-y-16 pt-24 px-3 max-w-screen-2xl gap-x-12 m-auto'>
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
      <section className='flex flex-col gap-y-9'>
        <h2 className='text-center font-bold text-5xl text-normal'>Issues</h2>
        <p className='text-center font-normal text-2xl text-normal-2 leading-relaxed'>
          The social, cultural, technological and environmental problems in
          which we are committing ourselves every day to achieve better results
          and sustainable development that allows us to provide a better quality
          of life to thousands of communities around the world.
        </p>
        <div className='items-baseline place-items-baseline grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] xl:grid-cols-4 gap-y-5 gap-x-5 mt-9'>
          <ComponentArticleIssues
            Icon={
              <svg
                width='39'
                height='39'
                viewBox='0 0 39 39'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.49829 31.7999C9.13044 27.9476 14.0617 25.58 19.4933 25.58C24.9248 25.58 29.8561 27.9476 33.4882 31.7999M26.4908 12.3625C26.4908 16.2271 23.3579 19.36 19.4933 19.36C15.6287 19.36 12.4958 16.2271 12.4958 12.3625C12.4958 8.49787 15.6287 5.36499 19.4933 5.36499C23.3579 5.36499 26.4908 8.49787 26.4908 12.3625Z'
                  className='group-hover:stroke-main stroke-w'
                  stroke-width='3.10999'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            }
            bgIcon='bg-main-3'
            pharagraph='Gender equality is fundamental to the realization of human rights and a desire to benefit society as a whole, including girls and women.'
            title='Girls and Woman'
          />
          <ComponentArticleIssues
            Icon={
              <svg
                width='35'
                height='35'
                viewBox='0 0 35 35'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M30.9168 32.0834C31.3251 32.0834 31.5293 32.0834 31.6853 32.0039C31.8225 31.934 31.934 31.8225 32.0039 31.6853C32.0834 31.5293 32.0834 31.3251 32.0834 30.9168V15.7501C32.0834 15.3417 32.0834 15.1375 32.0039 14.9816C31.934 14.8443 31.8225 14.7328 31.6853 14.6629C31.5293 14.5834 31.3251 14.5834 30.9168 14.5834L27.4167 14.5834C27.0084 14.5834 26.8042 14.5834 26.6482 14.6629C26.511 14.7328 26.3995 14.8443 26.3296 14.9815C26.2501 15.1375 26.2501 15.3417 26.2501 15.7501V19.2501C26.2501 19.6585 26.2501 19.8626 26.1706 20.0186C26.1007 20.1558 25.9892 20.2674 25.852 20.3373C25.696 20.4167 25.4918 20.4167 25.0834 20.4167H21.5834C21.175 20.4167 20.9709 20.4167 20.8149 20.4962C20.6777 20.5661 20.5661 20.6777 20.4962 20.8149C20.4167 20.9709 20.4167 21.175 20.4167 21.5834V25.0834C20.4167 25.4918 20.4167 25.696 20.3373 25.852C20.2674 25.9892 20.1558 26.1007 20.0186 26.1706C19.8626 26.2501 19.6585 26.2501 19.2501 26.2501H15.7501C15.3417 26.2501 15.1375 26.2501 14.9815 26.3296C14.8443 26.3995 14.7328 26.511 14.6629 26.6482C14.5834 26.8042 14.5834 27.0084 14.5834 27.4167V30.9167C14.5834 31.3251 14.5834 31.5293 14.6629 31.6853C14.7328 31.8225 14.8443 31.934 14.9815 32.0039C15.1375 32.0834 15.3417 32.0834 15.7501 32.0834L30.9168 32.0834Z'
                  className='group-hover:stroke-main stroke-w'
                  stroke-width='2.91667'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M14.5834 9.91675C14.5834 9.50838 14.5834 9.30419 14.6629 9.14821C14.7328 9.01101 14.8443 8.89946 14.9815 8.82956C15.1375 8.75008 15.3417 8.75008 15.7501 8.75008H19.2501C19.6585 8.75008 19.8626 8.75008 20.0186 8.82956C20.1558 8.89946 20.2674 9.01101 20.3373 9.14821C20.4167 9.30419 20.4167 9.50838 20.4167 9.91675V13.4167C20.4167 13.8251 20.4167 14.0293 20.3373 14.1853C20.2674 14.3225 20.1558 14.434 20.0186 14.5039C19.8626 14.5834 19.6585 14.5834 19.2501 14.5834H15.7501C15.3417 14.5834 15.1375 14.5834 14.9815 14.5039C14.8443 14.434 14.7328 14.3225 14.6629 14.1853C14.5834 14.0293 14.5834 13.8251 14.5834 13.4167V9.91675Z'
                  className='group-hover:stroke-main stroke-w'
                  stroke-width='2.91667'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  className='group-hover:stroke-main stroke-w'
                  d='M4.37508 18.6668C4.37508 18.2584 4.37508 18.0542 4.45456 17.8982C4.52446 17.761 4.63601 17.6495 4.77321 17.5796C4.92919 17.5001 5.13338 17.5001 5.54175 17.5001H9.04175C9.45012 17.5001 9.65431 17.5001 9.81028 17.5796C9.94749 17.6495 10.059 17.761 10.1289 17.8982C10.2084 18.0542 10.2084 18.2584 10.2084 18.6668V22.1667C10.2084 22.5751 10.2084 22.7793 10.1289 22.9353C10.059 23.0725 9.94749 23.184 9.81028 23.2539C9.65431 23.3334 9.45012 23.3334 9.04175 23.3334H5.54175C5.13338 23.3334 4.92919 23.3334 4.77321 23.2539C4.63601 23.184 4.52446 23.0725 4.45456 22.9353C4.37508 22.7793 4.37508 22.5751 4.37508 22.1667V18.6668Z'
                  stroke-width='2.91667'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M2.91675 4.08341C2.91675 3.67504 2.91675 3.47086 2.99622 3.31488C3.06613 3.17768 3.17768 3.06613 3.31488 2.99622C3.47086 2.91675 3.67504 2.91675 4.08341 2.91675H7.58342C7.99179 2.91675 8.19597 2.91675 8.35195 2.99622C8.48915 3.06613 8.6007 3.17768 8.67061 3.31488C8.75008 3.47086 8.75008 3.67504 8.75008 4.08341V7.58342C8.75008 7.99179 8.75008 8.19597 8.67061 8.35195C8.6007 8.48915 8.48915 8.6007 8.35195 8.67061C8.19597 8.75008 7.99179 8.75008 7.58342 8.75008H4.08341C3.67504 8.75008 3.47086 8.75008 3.31488 8.67061C3.17768 8.6007 3.06613 8.48915 2.99622 8.35195C2.91675 8.19597 2.91675 7.99179 2.91675 7.58342V4.08341Z'
                  className='group-hover:stroke-main stroke-w'
                  stroke-width='2.91667'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            }
            bgIcon='bg-main-strong'
            pharagraph='We gather resources and locate partners to ensure sustainable development in data and technology in the digital age.'
            title='Data and Technology'
          />
          <ComponentArticleIssues
            Icon={
              <svg
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  className='group-hover:stroke-main stroke-w'
                  d='M14 1.5V7.75M14 1.5C13.1084 1.5 12.2386 1.59334 11.3999 1.77079M14 1.5C14.8915 1.5 15.7613 1.59334 16.6001 1.77079M14 7.75C10.5482 7.75 7.75 10.5482 7.75 14M14 7.75C17.4518 7.75 20.25 10.5482 20.25 14M14 20.25V26.5M14 20.25C17.4518 20.25 20.25 17.4518 20.25 14M14 20.25C10.5482 20.25 7.75 17.4518 7.75 14M14 26.5C14.8902 26.5 15.7587 26.4069 16.5963 26.23M14 26.5C13.1064 26.5 12.2348 26.4062 11.3943 26.228M5.16114 5.16117L9.58055 9.58058M18.4194 18.4194L22.8388 22.8388M1.5 14H7.75M1.5 14C1.5 14.8917 1.59333 15.7615 1.7708 16.6003M1.5 14C1.5 13.1071 1.5936 12.236 1.77158 11.396M20.25 14H26.5M26.5 14C26.5 13.1084 26.4066 12.2385 26.2291 11.3997M26.5 14C26.5 14.8913 26.4067 15.7608 26.2293 16.5993M5.16114 22.8388L9.58055 18.4194M18.4194 9.58058L22.8388 5.16117M20.8083 3.51509C22.2762 4.47023 23.5311 5.72529 24.486 7.19337M24.4825 20.8119C23.5274 22.2787 22.2729 23.5325 20.8056 24.4867M7.19214 24.4852C5.7263 23.5315 4.47289 22.2788 3.51843 20.8135M3.51463 7.19233C4.46931 5.72493 5.72367 4.47041 7.19094 3.51555'
                  stroke-width='2.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            }
            bgIcon='bg-main-3'
            pharagraph='We work together with other NGOs reinforcing resources to guarantee disease prevention and medical care for all people.'
            title='Global Health'
          />
          <ComponentArticleIssues
            Icon={
              <svg
                className='group-hover:fill-transparent'
                width='36'
                height='36'
                viewBox='0 0 36 36'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  className='group-hover:stroke-main stroke-w'
                  d='M9.65318 28.217C5.96228 28.217 2.97021 25.2249 2.97021 21.534C2.97021 18.0536 5.63079 15.1945 9.02905 14.8798C9.72419 10.6514 13.396 7.42554 17.8212 7.42554C22.2465 7.42554 25.9183 10.6514 26.6134 14.8798C30.0117 15.1945 32.6723 18.0536 32.6723 21.534C32.6723 25.2249 29.6802 28.217 25.9893 28.217C19.4699 28.217 15.3609 28.217 9.65318 28.217Z'
                  stroke-width='2.97021'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            }
            bgIcon='bg-main-3'
            pharagraph='We are working with the UN and its partners to collectively galvanize needed to address the climate challenge.'
            title='Climate and environment'
          />
        </div>
      </section>
      <section>
        <h2 className='text-center font-bold text-5xl text-normal mb-6'>
          Last news
        </h2>
        <div className='mt-9 grid gap-y-5 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-3 md:gap-x-5'>
          <ComponentArticleLastNews
            Image={LastImage2}
            title="Women's human rights and gender equality"
            pharagraph='When migrants are portrayed in a negative light, their human rights are heavily impacted. They are discriminated, excluded and dehumanised. Communities also become divided. How we speak about migrants and migration – the narrative – therefore'
          />
          <ComponentArticleLastNews
            Image={LastImage1}
            title="Women's human rights and gender equality"
            pharagraph='Effectively ensuring that women, girls, men, boys and gender-diverse people can fully enjoy human rights requires, first, a comprehensive understanding of social structures, policies and stereotypes'
          />
        </div>
      </section>
      <div className='mt-14 w-full flex justify-center'>
        <div className='max-w-none'>
          <button className='hover:shadow-main-2 hover:bg-link-hover duration-200 h-12 border-2 border-solid border-main px-5 text-normal-b text-lg font-bold rounded-xl'>
            Read all news
          </button>
        </div>
      </div>
    </main>
  );
}
