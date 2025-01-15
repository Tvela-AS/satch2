/* eslint-disable @next/next/no-async-client-component */
"use client";

import dynamic from "next/dynamic";

// import { DynamicMap } from "@/app/components/Map";

const ValdressMap = dynamic(() => import("../../components/ValdressMap"), {
  ssr: false,
});

export default async function Contact() {
  return (
    <div className='max-w-full flex flex-col gap-y-8'>
      <ValdressMap />
    </div>
  );
}
