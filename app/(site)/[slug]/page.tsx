import { satchComponents } from "@/app/components/SatchBlogComponent";
import { urlFor } from "@/sanity/config/client-config";
import { getPage } from "@/sanity/sanity.utils";
// import { PortableText } from "next-sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  const { image } = page;
  const imageLink = urlFor(image).width(2000).height(2000).url();
  console.log(page.content);

  return (
    <div className='-bg-blue-500 h-full flex flex-col'>
      <h1 className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold mx-auto'>
        {page.title}
      </h1>
      <div className='md:h-[500px] py-2 relative rounded-lg md:w-[500px]  w-[97%] mx-auto'>
        <Image
          className='md:max-w-auto md:p-0 rounded-lg'
          src={imageLink}
          alt=''
          style={{ width: "100%", height: "auto" }} // optional
          width={1000}
          height={1000}
        />
      </div>

      <div className='text-lg text-gray-700 mt-10 '>
        <PortableText value={page?.content} components={satchComponents} />
      </div>
    </div>
  );
}
