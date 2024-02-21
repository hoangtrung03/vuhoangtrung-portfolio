import WavyText from '@/components/WavyText'
import Image from 'next/image'
import styles from './skills.module.css'

export default function Skills() {
  const skillData = [
    {
      name: 'html',
      image: '/assets/images/skills/icon-html5.png'
    },
    {
      name: 'css',
      image: '/assets/images/skills/icon-css3.png'
    },
    {
      name: 'javascript',
      image: '/assets/images/skills/icon-javascript.png'
    },
    {
      name: 'typescript',
      image: '/assets/images/skills/icon-typescript.png'
    },
    {
      name: 'react',
      image: '/assets/images/skills/icon-react.png'
    },
    {
      name: 'nextjs',
      image: '/assets/images/skills/icon-nextjs.png'
    },
    {
      name: 'docker',
      image: '/assets/images/skills/icon-docker.png'
    },
    {
      name: 'tailwind css',
      image: '/assets/images/skills/icon-tailwind.png'
    },
    {
      name: 'jira',
      image: '/assets/images/skills/icon-jira.png'
    }
  ]

  return (
    <>
      <section id='skills'>
        <div className='container pt-10 lg:pt-60'>
          <h2>
            <WavyText
              text='Projects'
              classText='uppercase font-bold text-32 lg:text-48 justify-center lg:justify-start items-center'
            />
          </h2>
          <div className='grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 mt-2 lg:mt-4'>
            {skillData.map((item, index) => (
              <div data-skill={item.name} className={styles['card-skills']} key={index}>
                {item?.image && (
                  <Image
                    src={item?.image}
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
