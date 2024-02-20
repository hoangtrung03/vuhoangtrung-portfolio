import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  return (
    <section>
      <div className='container py-10 lg:py-60'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-14'>
          <div className='rounded-[10px] p-2 border border-white duration-200 group flex flex-col'>
            <div className='relative w-full pb-[40%] rounded-lg overflow-hidden flex-shrink-0'>
              <Image
                src='https://mega.com.vn/media/news/1706_hinh-nen-phi-hanh-gia105.jpg'
                fill
                alt='Logo skill'
                title='Logo skill'
                className='object-cover'
              />
            </div>
            <div className='px-2 flex-1 h-full flex flex-col my-2'>
              <div className='flex-1 mb-2 lg:mb-4'>
                <h3 className='font-bold text-18 lg:text-24 text-white'>Lorem ipsum</h3>
                <p className='text-14 lg:text-16 text-white mt-1 lg:mt-2 text-justify'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odio mollitia, fugit voluptatem commodi
                  laudantium eius inventore nihil? Sunt fugit, similique suscipit vero totam eveniet in minima autem
                  obcaecati tempore?
                </p>
              </div>
              <Link
                href='/'
                className='mt-auto flex-shrink-0 text-secondary font-semibold border border-secondary flex justify-center items-center h-10 px-4 rounded-lg hover:bg-secondary hover:text-white w-fit'
              >
                Go to website
              </Link>
            </div>
          </div>
          <div className='rounded-[10px] p-2 border border-white duration-200 group flex flex-col'>
            <div className='relative w-full pb-[40%] rounded-lg overflow-hidden flex-shrink-0'>
              <Image
                src='https://mega.com.vn/media/news/1706_hinh-nen-phi-hanh-gia105.jpg'
                fill
                alt='Logo skill'
                title='Logo skill'
                className='object-cover'
              />
            </div>
            <div className='px-2 flex-1 h-full flex flex-col my-2'>
              <div className='flex-1 mb-2 lg:mb-4'>
                <h3 className='font-bold text-18 lg:text-24 text-white'>Lorem ipsum</h3>
                <p className='text-14 lg:text-16 text-white mt-1 lg:mt-2 text-justify'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odio mollitia, fugit voluptatem commodi
                  laudantium eius inventore nihil? Sunt fugit, similique suscipit vero totam eveniet in minima autem
                  obcaecati tempore?ipsum dolor sit amet consectetur adipisicing elit. Optio odio mollitia, fugit
                  voluptatem commodi laudantium eius inventore nihil? Sunt fugit, similique suscipit vero totam eveniet
                  in minima autem obcaecati tempore?
                </p>
              </div>
              <Link
                href='/'
                className='mt-auto flex-shrink-0 text-secondary font-semibold border border-secondary flex justify-center items-center h-10 px-4 rounded-lg hover:bg-secondary hover:text-white w-fit'
              >
                Go to website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
