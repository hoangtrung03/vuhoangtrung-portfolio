import WavyText from '@/components/WavyText'
import ProjectItem from './ProjectItem'

export default function Projects() {
  const projectDataBIN = [
    {
      name: 'Travelner Insurance',
      description:
        'Travelner Insurance is a global travel company that specializes in diverse insurance programs: travel insurance, travel medical insurance and assistance services. Our tailored offerings cater to travelers, students, and any individuals or groups living or working abroad. Driven by technology and an expanding portfolio, our aim is to become the leading provider of travel and health safety solutions for those who travel or reside away from home.',
      image: '/assets/images/projects/travelner-insurance.jpg',
      link: 'https://www.travelnerinsurance.com/',
      tech: [
        {
          name: 'NextJS',
          image: '/assets/images/skills/icon-nextjs.png'
        },
        {
          name: 'React',
          image: '/assets/images/skills/icon-react.png'
        },
        {
          name: 'HTML',
          image: '/assets/images/skills/icon-html5.png'
        },
        {
          name: 'CSS',
          image: '/assets/images/skills/icon-css3.png'
        },
        {
          name: 'Javascript',
          image: '/assets/images/skills/icon-javascript.png'
        },
        {
          name: 'Typescript',
          image: '/assets/images/skills/icon-typescript.png'
        },
        {
          name: 'Typescript',
          image: '/assets/images/skills/icon-tailwind-css.png'
        },
        {
          name: 'Typescript',
          image: '/assets/images/skills/icon-docker.png'
        }
      ]
    },
    {
      name: 'BIN Corporation Group',
      description:
        'BIN Corporation Group is an international multi-disciplinary company based in Ho Chi Minh City, Vietnam. It is founded in 2009 by an entrepreneur, Mr. Jimmy Lee. BIN Corp has offices in Hongkong, Singapore, Lithuania, Canada, USA. Thus, we work with a wide range of corporate clients and individuals across the US-UK, Europe, and Asia. BIN Corp develops a tech-applied enterprise service ecosystem with the mission of “Thrive on customer-centricity”. Our fields of operation include business management consulting, financial consulting, digital marketing, e-commerce, travel, technology etc.',
      image: '/assets/images/projects/bincg.jpg',
      link: 'https://www.bincorporation.com/',
      tech: [
        {
          name: 'NextJS',
          image: '/assets/images/skills/icon-nextjs.png'
        },
        {
          name: 'React',
          image: '/assets/images/skills/icon-react.png'
        },
        {
          name: 'HTML',
          image: '/assets/images/skills/icon-html5.png'
        },
        {
          name: 'CSS',
          image: '/assets/images/skills/icon-css3.png'
        },
        {
          name: 'Javascript',
          image: '/assets/images/skills/icon-javascript.png'
        },
        {
          name: 'Typescript',
          image: '/assets/images/skills/icon-typescript.png'
        },
        {
          name: 'Typescript',
          image: '/assets/images/skills/icon-tailwind-css.png'
        },
        {
          name: 'Typescript',
          image: '/assets/images/skills/icon-docker.png'
        }
      ]
    },
    {
      name: 'ONE IBC',
      description:
        "One IBC®'s management consulting encompasses sales and related merchandise of entities, individual traders, and partner relationships, offering extensive advice and support on organizational planning, financial budgeting, marketing strategies, human resource practices, management policies, and production and post-production planning.",
      image: '/assets/images/projects/oneibc.jpg',
      link: 'https://sandbox.oneibc.com/',
      tech: [
        {
          name: 'NextJS',
          image: '/assets/images/skills/icon-nextjs.png'
        },
        {
          name: 'React',
          image: '/assets/images/skills/icon-react.png'
        }
      ]
    },
    {
      name: 'Travelner',
      description:
        'Travelner is a leading travel professional where you can find the best value flight instantly and easily. We offer a wide range of travel services including flight, visa, accommodation, and tours around the globe with the purpose of satisfying all travel needs in one platform. All services can be searched and booked directly online. As an expert in traveling, we understand all insights of our customers, who look for an A-Z booking process, reliable services, and first-class customer care.',
      image: '/assets/images/projects/travelner-banner.jpg',
      link: 'https://www.travelner.com/',
      tech: [
        {
          name: 'HTML',
          image: '/assets/images/skills/icon-html5.png'
        },
        {
          name: 'CSS',
          image: '/assets/images/skills/icon-css3.png'
        },
        {
          name: 'Javascript',
          image: '/assets/images/skills/icon-javascript.png'
        },
        {
          name: 'SASS',
          image: '/assets/images/skills/icon-sass.png'
        },
        {
          name: 'PHP',
          image: '/assets/images/skills/icon-php.png'
        },
        {
          name: 'jQuery',
          image: '/assets/images/skills/icon-jquery.png'
        }
      ]
    },
    {
      name: 'Hong Kong Company Formation',
      description:
        'Over these 10 years, Hong Kong Company Formation Services has built and strengthened connections with over 10.000 clients and partners all over the world. We always do our best to deliver the most appropriate services possible in the field of corporate services provider consulting.',
      image: '/assets/images/projects/banner-home-page.jpg',
      link: 'https://www.hongkongcompanyformation.hk/',
      tech: [
        {
          name: 'WordPress',
          image: '/assets/images/skills/icon-wordpress.png'
        },
        {
          name: 'HTML',
          image: '/assets/images/skills/icon-html5.png'
        },
        {
          name: 'CSS',
          image: '/assets/images/skills/icon-css3.png'
        },
        {
          name: 'Javascript',
          image: '/assets/images/skills/icon-javascript.png'
        },
        {
          name: 'SASS',
          image: '/assets/images/skills/icon-sass.png'
        },
        {
          name: 'PHP',
          image: '/assets/images/skills/icon-php.png'
        },
        {
          name: 'jQuery',
          image: '/assets/images/skills/icon-jquery.png'
        }
      ]
    },
    {
      name: 'Singapore Company Formation',
      description:
        'Over these 10 years, Singapore Company Formation team has built and strengthened connections with over 10.000 clients and partners all over the world. We always do our best to deliver the most appropriate services possible in the field of corporate services provider consulting.',
      image: '/assets/images/projects/home-banner.jpg',
      link: 'https://www.singaporecompanyformation.com.sg/',
      tech: [
        {
          name: 'WordPress',
          image: '/assets/images/skills/icon-wordpress.png'
        },
        {
          name: 'HTML',
          image: '/assets/images/skills/icon-html5.png'
        },
        {
          name: 'CSS',
          image: '/assets/images/skills/icon-css3.png'
        },
        {
          name: 'Javascript',
          image: '/assets/images/skills/icon-javascript.png'
        },
        {
          name: 'SASS',
          image: '/assets/images/skills/icon-sass.png'
        },
        {
          name: 'PHP',
          image: '/assets/images/skills/icon-php.png'
        },
        {
          name: 'jQuery',
          image: '/assets/images/skills/icon-jquery.png'
        }
      ]
    }
  ]

  const projectDataAIOZ = [
    {
      name: 'AIOZ Finance',
      description:
        'AIOZ Finance is a decentralized exchange (DEX) built on top of Uniswap protocol. It allows users to swap tokens in a decentralized manner without the need of a centralized exchange. AIOZ Finance is a permissionless protocol that only requires a Web3 wallet to start using it. The protocol is available on multiple networks such as Ethereum, AIOZ and others.',
      image: '/assets/images/projects/aioz-network.png',
      link: 'https://aiozswap-web.vercel.app/',
      tech: [
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
          name: 'HTML',
          image: '/assets/images/skills/icon-html5.png'
        },
        {
          name: 'CSS',
          image: '/assets/images/skills/icon-css3.png'
        },
        {
          name: 'Javascript',
          image: '/assets/images/skills/icon-javascript.png'
        },
        {
          name: 'Typescript',
          image: '/assets/images/skills/icon-typescript.png'
        }
      ]
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
        <h3>
          <WavyText
            text='I. Company Projects'
            classText='uppercase font-bold text-28 lg:text-32 justify-center lg:justify-start items-center text-white'
          />
        </h3>
        <h4>
          <WavyText
            text='1. AIOZ Network'
            classText='uppercase font-bold text-18 lg:text-20 justify-center lg:justify-start items-center text-white'
          />
        </h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 my-5 lg:my-10'>
          {projectDataAIOZ.map((item, index) => (
            <ProjectItem key={index} projectData={item} index={index} />
          ))}
        </div>
        <h4>
          <WavyText
            text='1. BIN Corporation Group'
            classText='uppercase font-bold text-18 lg:text-20 justify-center lg:justify-start items-center text-white'
          />
        </h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 my-5 lg:my-10'>
          {projectDataBIN.map((item, index) => (
            <ProjectItem key={index} projectData={item} index={index} />
          ))}
        </div>
        {/* <h3>
          <WavyText
            text='2. Personal Projects'
            classText='uppercase font-bold text-28 lg:text-32 justify-center lg:justify-start items-center text-white'
          />
        </h3> */}
      </div>
    </section>
  )
}
