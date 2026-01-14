/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com', // For your product and potential hero images
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com', // For Unsplash images
            },
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
            },
        ],
    },
};

export default nextConfig;