import WavyText from '@/components/WavyText'
import styles from './experience.module.css'

export default function Experience() {
  const experienceData = [
    {
      date: '07/2024 - Now',
      title: 'AIOZ Network',
      description:
        '<p>AIOZ Network provides secure, fast, and affordable decentralized storage solutions for dApps and developers. Our reliable IPFS infrastructure ensures seamless content management. AIOZ’s advanced streaming solution supports high-quality, low-latency video distribution globally.</p>'
    },
    {
      date: '08/2022 - 06/2024',
      title: 'Bin Corporation Group',
      description:
        '<p>BIN Corporation Group is an international multi-disciplinary company based in Ho Chi Minh City, Vietnam. It is founded in 2009 by an entrepreneur, Mr. Jimmy Lee.</p><p>BIN Corp has offices in Hongkong, Singapore, Lithuania, Canada, USA. Thus, we work with a wide range of corporate clients and individuals across the US-UK, Europe, and Asia.</p><p>BIN Corp develops a tech-applied enterprise service ecosystem with the mission of “Thrive on customer-centricity”. Our fields of operation include business management consulting, financial consulting, digital marketing, e-commerce, travel, technology etc.</p>'
    }
  ]

  return (
    <>
      <section id='experience'>
        <div className='container pt-10 lg:pt-60'>
          <WavyText
            text='Experience'
            delay={0.6}
            classText='uppercase font-bold text-32 lg:text-48 text-white justify-center lg:justify-start items-center'
          />
          <ul className={`${styles['timeline']} p-4 lg:p-10 mt-5 lg:mt-10 mx-auto`}>
            {experienceData.map((item, index) => (
              <li className={`${styles['event']} mb-5 lg:mb-10 last-of-type:mb-0`} data-date={item.date} key={index}>
                <h3 className='uppercase font-bold text-28 lg:text-32'>{item.title}</h3>
                <p className='mt-1 lg:mt-2'>{item?.date}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  className='mt-2 lg:mt-4 text-14 lg:text-16 text-white'
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
