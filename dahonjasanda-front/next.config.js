// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/** 위에는 원래 설정 아래는 파티 이미지 받기위한 설정 에러난다면 고칠것 */

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['localhost'],
    },
  }
  
  module.exports = nextConfig
  