import RegisterForm from "@/app/components/RegisterForm";
import { DynamicValdressMap } from "../../components/ValdressMap";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { DynamicMap } from "@/app/components/Map";
// import { DynamicMap } from "@/app/components/Map";

export default async function Contact() {
  return (
    <div className='max-w-full flex flex-col gap-y-8'>
      {/* <h1 className='text-3xl'>Kontakt Oss</h1> */}
      <RegisterForm />
      <DynamicValdressMap />
    </div>
  );
}
