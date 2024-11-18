import { expect, userEvent, within } from '@storybook/test';
import ThemeBtn from '../components/UseThemeBtn';
import { ThemeProvider } from '../context/ThemeContext';

export default {
  title: 'Components/UseThemeBtn',
  component: ThemeBtn,
  parameters: {
    backgrounds: {
        default: 'Maroon' //overrides default global 'Light'
    }
  }
};

const Template = (args) => <ThemeBtn {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'click me',
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  label: 'click me in the darkness',
};
DarkTheme.parameters = {
    backgrounds: {
        default:'Dark' //overrides story default 'Maroon'
    }
  };
  DarkTheme.decorators = [
    (Story) => (
      <ThemeProvider defaultTheme="dark">
        <Story />
      </ThemeProvider>
    ),
  ];

export const PinkTheme = Template.bind({})
PinkTheme.args = {
    label: 'pinkness'
}
PinkTheme.parameters = {
    backgrounds: {
        default: 'Pink'
    }
}
 
PinkTheme.play = async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = await canvas.getByText('pinkness \(Current theme: pink\)')
        await userEvent.click(button)

       
    },

PinkTheme.decorators = [
    (Story) => (
      <ThemeProvider defaultTheme="pink">
        <Story />
      </ThemeProvider>
    ),
  ];