import styles from './experience.module.css'

export default function Experience() {
  const experienceData = [
    {
      date: '08/2022 - Now',
      title: 'Bin Corporation Group',
      description:
        '<p>BIN Corporation Group is an international multi-disciplinary company based in Ho Chi Minh City, Vietnam. It is founded in 2009 by an entrepreneur, Mr. Jimmy Lee.</p><p>BIN Corp has offices in Hongkong, Singapore, Lithuania, Canada, USA. Thus, we work with a wide range of corporate clients and individuals across the US-UK, Europe, and Asia.</p><p>BIN Corp develops a tech-applied enterprise service ecosystem with the mission of “Thrive on customer-centricity”. Our fields of operation include business management consulting, financial consulting, digital marketing, e-commerce, travel, technology etc.</p>'
    }
  ]

  return (
    <>
      <section id='experience'>
        <div className='container pt-10 lg:pt-60'>
          <h2 className='uppercase font-bold text-32 lg:text-48 text-white'>Experience</h2>
          <ul className={`${styles['timeline']} p-4 lg:p-10 mt-5 lg:mt-10 mx-auto`}>
            {experienceData.map((item, index) => (
              <li className={`${styles['event']} mb-5 lg:mb-10 last-of-type:mb-0`} data-date={item.date} key={index}>
                <h3 className='uppercase font-bold text-28 lg:text-32'>{item.title}</h3>
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
