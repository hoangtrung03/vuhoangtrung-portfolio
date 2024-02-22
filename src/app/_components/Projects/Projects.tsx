import WavyText from '@/components/WavyText'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  const projectData = [
    {
      name: 'Travelner Insurance',
      description:
        'Travelner Insurance is a global travel company that specializes in diverse insurance programs: travel insurance, travel medical insurance and assistance services. Our tailored offerings cater to travelers, students, and any individuals or groups living or working abroad. Driven by technology and an expanding portfolio, our aim is to become the leading provider of travel and health safety solutions for those who travel or reside away from home.',
      image: '/assets/images/projects/travelner-insurance.jpg',
      link: 'https://www.travelnerinsurance.com/'
    },
    {
      name: 'BIN Corporation Group',
      description:
        'BIN Corporation Group is an international multi-disciplinary company based in Ho Chi Minh City, Vietnam. It is founded in 2009 by an entrepreneur, Mr. Jimmy Lee. BIN Corp has offices in Hongkong, Singapore, Lithuania, Canada, USA. Thus, we work with a wide range of corporate clients and individuals across the US-UK, Europe, and Asia.</p><p>BIN Corp develops a tech-applied enterprise service ecosystem with the mission of “Thrive on customer-centricity”. Our fields of operation include business management consulting, financial consulting, digital marketing, e-commerce, travel, technology etc.',
      image: '/assets/images/projects/bincg.jpg',
      link: 'https://sandbox.bincorporation.com/'
    },
    {
      name: 'ONE IBC',
      description:
        'Tư vấn quản lý của One IBC ® bao gồm việc bán hàng và các hàng hóa liên quan của các tổ chức thực thể, thương nhân cá thể và quan hệ đối tác cung cấp nhiều tư vấn và hỗ trợ về lập kế hoạch tổ chức, lập ngân sách tài chính, chiến lược tiếp thị, thực tiễn nguồn nhân lực, chính sách quản lý và lập kế hoạch sản xuất và hậu cần.',
      image: '/assets/images/projects/oneibc.jpg',
      link: 'https://sandbox.oneibc.com/'
    },
    {
      name: 'Travelner',
      description:
        'Travelner is a leading travel professional where you can find the best value flight instantly and easily. We offer a wide range of travel services including flight, visa, accommodation, and tours around the globe with the purpose of satisfying all travel needs in one platform. All services can be searched and booked directly online. As an expert in traveling, we understand all insights of our customers, who look for an A-Z booking process, reliable services, and first-class customer care.',
      image: '/assets/images/projects/travelner-banner.jpg',
      link: 'https://www.travelner.com/'
    }
  ]

  return (
    <section>
      <div className='container py-10 lg:py-60'>
        <h2>
          <WavyText
            text='Projects'
            classText='uppercase font-bold text-32 lg:text-48 justify-center lg:justify-start items-center text-white'
          />
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-14 mt-5 lg:mt-10'>
          {projectData.map((item, index) => (
            <div className='rounded-[10px] p-2 border border-white duration-200 group flex flex-col' key={index}>
              <div className='relative w-full pb-[40%] rounded-lg overflow-hidden flex-shrink-0'>
                {item?.image && (
                  <Image
                    src={item?.image}
                    fill
                    alt={item?.name ? item?.name : 'Image project' + index}
                    title={item?.name ? item?.name : 'Image project' + index}
                    className='object-cover'
                  />
                )}
              </div>
              <div className='px-2 flex-1 h-full flex flex-col my-2'>
                <div className='flex-1 mb-2 lg:mb-4'>
                  <h3 className='font-bold text-18 lg:text-24 text-white'>{item?.name}</h3>
                  <p className='text-14 lg:text-16 text-white mt-1 lg:mt-2 text-justify'>{item?.description}</p>
                </div>
                {item?.link && (
                  <Link
                    href={item?.link}
                    title={item?.name}
                    className='mt-auto flex-shrink-0 text-secondary font-semibold border border-secondary flex justify-center items-center h-10 px-4 rounded-lg hover:bg-secondary hover:text-white w-fit'
                  >
                    Go to website
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
