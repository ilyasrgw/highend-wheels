/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "beacloupijguxbuaihoo.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/photos%20of%20cars/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
