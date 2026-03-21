import React from 'react'
import ProjBox from './ProjBox'
import projectsData from './ProjectsData'

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
    <section id='projects' className='w-full min-h-screen px-6 md:px-16 py-24 text-white flex flex-col items-center'>
      <div className='max-w-7xl w-full'>
        
        <div className="mb-16">
          <span className="text-[#4677b3] font-mono text-xs uppercase tracking-[0.3em] mb-3 block">
            Selected Works
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
            Projects
          </h1>
          <div className="h-[2px] w-24 bg-[#4677b3] mt-6"></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full'>
          {projects}
        </div>
        
      </div>
    </section>
  )
}

export default Projects