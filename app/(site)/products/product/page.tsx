import { RichTextComponents } from "@/app/components/SatchBlogComponent";
import { getProduct } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function Product({ params }: any) {
  const slug = params.project;
  const product = await getProduct(slug);

  return (
    <div>
      <header className='flex items-center justify-between'>
        <h1 className='bg-black bg-clip-text text-transparent text-5xl font-extrabold drop-shadow-sm'>
          {product.name}
        </h1>
      </header>

      {/* images goes here */}
      <div className='flex flex-col items-center justify-between '>
        <Image
          src={product.image}
          alt={product.name}
          width={920}
          height={680}
          className='mt-10 -bg-blue-600 object-cover rounded-xl px-40'
        />

        {/* content goes here */}
        <div className='text-lg text-gray-700 mt-5'>
          <PortableText
            value={product.content}
            components={RichTextComponents}
          />
        </div>
      </div>
    </div>
  );
}
