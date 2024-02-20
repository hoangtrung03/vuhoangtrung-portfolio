import Image from 'next/image'
import styles from './skills.module.css'

export default function Skills() {
  const skillData = [
    {
      name: 'html',
      image: '/assets/images/avatar.webp'
    }
  ]

  return (
    <>
      <section id='skills'>
        <div className='container pt-10 lg:pt-60'>
          <div className='grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8'>
            {skillData.map((item, index) => (
              <div data-skill={item.name} className={styles['card-skills']} key={index}>
                {item?.image && (
                  <Image
                    src='/assets/images/avatar.webp'
                    fill
                    alt={item.name ? item.name : 'Logo skill' + index}
                    title={item.name ? item.name : 'Logo skill' + index}
                    className='object-cover'
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
