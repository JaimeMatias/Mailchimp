/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
        MAILCHIMP_SERVER: process.env.MAILCHIMP_SERVER,
        MAILCHIMP_GROUP_ID: process.env.MAILCHIMP_GROUP_ID
      }
};

export default nextConfig;
