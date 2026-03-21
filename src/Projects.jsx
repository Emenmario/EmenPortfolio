import React from 'react'
import ProjBox from './ProjBox'
import projectsData from './projectsData'

const Projects = () => {
  const projects = projectsData.map((project, index) => {
    return (
      <ProjBox 
        key={index}
        title={project.title} 
        description={project.description} 
        technologies={project.Technologies} 
        image={project.image} 
        link={project.link} 
        code={project.code} 
      />
    )
  })

  return (
    <section id='projects' className='w-full min-h-screen px-4 md:px-16 py-16 md:py-24 text-white flex flex-col items-center'>
      <div className='max-w-7xl w-full'>
        <div className="mb-12 md:mb-16">
          <span className="text-[#4677b3] font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-2 block">
            Selected Works
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Projects
          </h1>
          <div className="h-[2px] w-20 md:w-24 bg-[#4677b3] mt-4 md:mt-6"></div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full'>
          {projects}
        </div>
      </div>
    </section>
  )
}

export default Projects