import { RichTextComponents } from "@/app/components/SatchBlogComponent";
import { urlFor } from "@/sanity/config/client-config";
import { getPage } from "@/sanity/sanity.utils";
// import { PortableText } from "next-sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function Page({ params }: any) {
  const page: { title: string; content: unknown; image: unknown } =
    (await getPage(params?.slug || "")) as unknown as {
      title: string;
      content: any;
      image: unknown;
    };
  const imageLink = urlFor(page?.image || "")
    .width(2000)
    .height(2000)
    .url();

  return (
    <div className=''>
      <div className='-bg-blue-500 h-full flex flex-col'>
        <h1 className='text-black text-5xl drop-shadow font-extrabold mx-auto'>
          {page?.title}
        </h1>
        <div className=' py-2 relative rounded-lg md:w-full   -bg-blue'>
          <Image
            className='md:max-w-full md:p-0 rounded-lg'
            src={imageLink}
            alt=''
            style={{ width: "100%", height: "auto" }} // optional
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className='text-lg text-gray-700 mt-100 prose-lg prose-h2:max-w-[32ch] prose-h2:text-5xl whitespace-pre-line -bg-blue-200'>
        <PortableText
          value={(page?.content as any) || []}
          components={RichTextComponents}
        />
      </div>
    </div>
  );
}
