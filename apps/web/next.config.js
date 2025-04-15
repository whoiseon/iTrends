const addSVGMoudleInNextConfig = (config) => {
  // Grab the existing rule that handles SVG imports

  const fileLoaderRule = config.module.rules.find((rule) =>
    rule.test?.test?.('.svg'),
  );

  config.module.rules.push(
    // Reapply the existing rule, but only for svg imports ending in ?url
    {
      ...fileLoaderRule,
      test: /\.svg$/i,
      resourceQuery: /url/, // *.svg?url
    },
    // Convert all other *.svg imports to React components
    {
      test: /\.svg$/i,
      resourceQuery: { not: /url/ }, // exclude if *.svg?url
      use: ['@svgr/webpack'],
    },
  );
  // Modify the file loader rule to ignore *.svg, since we have it handled now.

  fileLoaderRule.exclude = /\.svg$/i;
  return config;
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: [
    'solito',
    'react-native-web',
    'expo-linking',
    'expo-router',
    'expo-modules-core',
    '@itrends/ui',
    'nativewind',
    'react-native-css-interop',
  ],
  compiler: {
    define: {
      __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];
    addSVGMoudleInNextConfig(config);

    return config;
  },
};

export default nextConfig;
