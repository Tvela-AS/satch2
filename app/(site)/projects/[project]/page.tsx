import { RichTextComponents } from "@/app/components/SatchBlogComponent";
import { getProject } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function Project({ params }: any) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className='flex items-center justify-between'>
        <h1 className='bg-black bg-clip-text text-transparent text-5xl font-extrabold drop-shadow-sm'>
          {project.name}
        </h1>
        <a
          className='bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-green-200 hover:text-grey transition'
          href='https://bestill.timma.no/valdreshundesalong'
          title='Book'
          target='_blank'
          rel='noopener noreferrer'>
          Book Time
        </a>
      </header>

      {/* images goes here */}
      <div className='flex flex-col items-center justify-between '>
        <Image
          src={project.image}
          alt={project.name}
          width={920}
          height={680}
          className='mt-10 -bg-blue-600 object-cover rounded-xl px-40'
        />

        {/* content goes here */}
        <div className='text-lg text-gray-700 mt-5'>
          <PortableText
            value={project.content}
            components={RichTextComponents}
          />
        </div>
      </div>
    </div>
  );
}
