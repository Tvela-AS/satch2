import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "hwqw748q",
    dataset: "satch_data",
  },
  server: {
    hostname: "localhost",
    port: 3333,
  },
});
