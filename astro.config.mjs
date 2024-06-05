import { defineConfig } from 'astro/config';
import awsAmplify from 'astro-aws-amplify'; 
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: awsAmplify(),
});
