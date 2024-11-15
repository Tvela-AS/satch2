import dotenv from "dotenv";
dotenv.config();
import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = createImageUrlBuilder({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
});

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

const config = {
  projectId: "hwqw748q",

  dataset: "satch_data",

  apiVersion: "2024-11-14",
};

export default config;
