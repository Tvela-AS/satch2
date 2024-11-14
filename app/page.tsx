import { getProjects } from "@/sanity/sanity.utils";
import Image from "next/image";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className='max-w-5xl mx-auto py-20'>
      <h1 className='text-7xl font-extrabold '>Satch Valdres</h1>
      <p className='mt-3 text-xl text-gray-600'>
        Dette er en test for å vise hvordan systemet fungerer
      </p>

      <h2 className='mt-24 font-bold text-gray-700 text-3xl'>Diverse sider</h2>
      <div className='mt-5 grid md:grid-cols-2 lg:grid-cols3 gap-8'>
        {projects.map((project) => (
          <div
            key={project._id}
            className='border border-gray-500 rounded-lg p-3'>
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={100}
                className='object-cover rounded-lg border border-gray-500'
              />
            )}
            <div className='font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
              {project.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
