/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/products/:id", //:id는 Param의 이름
        destination: "/items/:id",
        permanent: true,
        //Response Status Code를 정하는 부분 -> 웹 브라우저에게 주소가 바귀었다는 사실을 저장하게 하려면 true 설정
      },
    ];
  },
};

export default nextConfig;
