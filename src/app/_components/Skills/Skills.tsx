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
      name: 'tailwind css',
      image: '/assets/images/skills/icon-tailwind-css.png'
    },
    {
      name: 'Uniswap',
      image: '/assets/images/skills/icon-uniswap.svg'
    },
    {
      name: 'Web3JS',
      image: '/assets/images/skills/icon-web3js.svg'
    },
    {
      name: 'Ethers JS',
      image: '/assets/images/skills/icon-etherjs.svg'
    },
    {
      name: 'Wagmi',
      image: '/assets/images/skills/icon-wagmi.svg'
    },
    {
      name: 'PHP',
      image: '/assets/images/skills/icon-php.png'
    },
    {
      name: 'docker',
      image: '/assets/images/skills/icon-docker.png'
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
              text='Skills'
              classText='uppercase font-bold text-32 lg:text-48 justify-center lg:justify-start items-center text-white'
            />
          </h2>
          <div className='grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 mt-5 lg:mt-10 lg:max-w-[60%] lg:mx-auto px-4'>
            {skillData.map((item, index) => (
              <div data-skill={item.name} className={styles['card-skills']} key={index}>
                {item?.image && (
                  <Image
                    src={item?.image}
                    fill
                    alt={item.name ? item.name : 'Logo skill' + index}
                    title={item.name ? item.name : 'Logo skill' + index}
                    className='object-contain max-w-[50%] mx-auto'
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
