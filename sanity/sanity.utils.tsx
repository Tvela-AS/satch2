import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "hwqw748q",

    dataset: "satch_data",

    apiVersion: "2024-11-14",
  });

  return client.fetch(
    groq`*[_type== "project"]{
        _id,
        _createdAt,
        name, 
        "slug": clug.current,
        "image": image.asset->url,
        url,
        content
        }`
  );
}
