import exp from "constants";
import { defineConfig } from "sanity";

import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "hwqw748q",

  dataset: "satch_data",

  title: "Satch Valdres",

  apiVersion: "2024-11-14",

  basePath: "/admin",

  // plugins: [deskTool()],

  schema: { types: schemas },
});

export default config;
