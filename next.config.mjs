import createNextIntlPlugin from "next-intl/plugin";

 const withNextIntl = createNextIntlPlugin();

 /** @type {import('next').NextConfig} */
 const nextConfig = {
   images: {
    remotePatterns: [
      {
         protocol: "https",
         hostname: "images.unsplash.com",
       },
     ],
   },
 };

 // Function to compose plugins
 const composePlugins =
   (...plugins) =>
   (config) =>
     plugins.reduce((acc, plugin) => plugin(acc), config);

 const combinedConfig = composePlugins(withNextIntl);

 export default combinedConfig(nextConfig);




