import exp from "constants";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";
import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from "@sanity/dashboard";

import schemas from "./sanity/schemas";

export default defineConfig({
  projectId: "hwqw748q",

  dataset: "satch_data",

  title: "Satch Valdres",

  apiVersion: "2024-11-14",

  basePath: "/admin",

  plugins: [
    dashboardTool({
      widgets: [
        sanityTutorialsWidget(),
        projectInfoWidget(),
        projectUsersWidget(),
      ],
    }),
    structureTool(),
  ],

  schema: { types: schemas },
});
