import { ThemeProvider } from '../src/context/ThemeContext';
import '../src/index.css';
import { initialize, mswLoader } from 'msw-storybook-addon';
initialize();

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        // 👇 Default values
        { name: 'Dark', value: '#333' },
        { name: 'Light', value: '#F7F9F2' },
        // 👇 Add your own
        { name: 'Maroon', value: '#400' },
      ],
      // 👇 Specify which background is shown by default
      default: 'Light',
    },
  },
  loaders: [mswLoader],
  decorators: [
    (Story, context) => {
      const defaultTheme = context.globals.theme || 'light'; //reads the current global theme from the toolbar, light default
      return (
        <ThemeProvider defaultTheme={defaultTheme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
  
  // initialGlobals: {
  //   value: 'light', //default global values for all stories
  // },
  // globalTypes: {
  //   theme: {
  //     name: 'Theme',
  //     description: 'global theme for components',
  //     defaultValue: 'light',
  //     toolbar: {
  //       icon: 'circlehollow',
  //       items: ['light', 'dark'],
  //       showName: true,
  //     },
  //   },
  // },
};

export default preview;
