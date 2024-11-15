/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-actions', // Optional, but useful for logging actions
    'storybook-addon-mock', // Add this line to include the addon-mock

  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // staticDirs: ['../public', '../static'], //added for mocking according tio the storybook.js.org

  // viteFinal: (config) => {
  //   config.optimizeDeps = {
  //     include: ['msw'], // Ensures msw is pre-bundled to avoid issues
  //   };
  //   return config;
  // },
};
export default config;