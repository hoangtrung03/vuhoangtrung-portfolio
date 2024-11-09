import ReadMore from '@/components/ReadMore'
import Image from 'next/image'
import Link from 'next/link'

type ProjectItemProps = {
  projectData: {
    name: string
    description: string
    image: string
    link: string
    tech: {
      name: string
      image: string
    }[]
  }
  index: number
}

export default function ProjectItem(props: ProjectItemProps) {
  const { projectData, index } = props

  return (
    <div className='rounded-[10px] p-2 border border-white duration-200 group flex flex-col'>
      <div className='relative w-full pb-[40%] rounded-lg overflow-hidden flex-shrink-0'>
        {projectData?.image && (
          <Link
            href={projectData?.link}
            title={projectData?.name}
            className='text-secondary font-semibold border border-secondary flex justify-center items-center h-10 px-4 rounded-lg hover:bg-secondary hover:text-white w-fit'
          >
            <Image
              src={projectData?.image}
              fill
              alt={projectData?.name ? projectData?.name : 'Image project' + index}
              title={projectData?.name ? projectData?.name : 'Image project' + index}
              className='object-cover'
            />
          </Link>
        )}
      </div>
      <div className='px-2 flex-1 h-full flex flex-col my-2'>
        <div className='flex-1 mb-2 lg:mb-4'>
          <h3 className='font-bold text-18 lg:text-24 text-white'>{projectData?.name}</h3>
          <ReadMore text={projectData?.description} maxLength={190}></ReadMore>
          {projectData?.tech && (
            <div className='flex items-center flex-wrap mt-1 lg:mt-2 gap-2 lg:gap-4'>
              <p className='text-white'>Tech stack:</p>
              {projectData?.tech?.map((logo, index) => (
                <div className='relative pb-6 lg:pb-10 overflow-hidden aspect-square' key={index}>
                  {logo?.image && (
                    <Image
                      src={logo.image}
                      fill
                      alt={logo?.name ? logo?.name : 'Logo Tech' + index}
                      title={logo?.name ? logo?.name : 'Logo Tech' + index}
                      className='object-contain'
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='mt-auto flex-shrink-0'>
          {projectData?.link && (
            <Link
              href={projectData?.link}
              title={projectData?.name}
              className='text-secondary font-semibold border border-secondary flex justify-center items-center h-10 px-4 rounded-lg hover:bg-secondary hover:text-white w-fit'
            >
              Go to website
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
