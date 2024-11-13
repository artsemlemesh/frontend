import MikeFirst from '../components/MikeFirst';

export default {
  title: 'Components/MikeFirst',
  component: MikeFirst,
  argTypes: {
    color: { control: 'color' }, //color picker
    onClick: { action: 'clicked' }, //logs click event
    borderRadius: {
      control: 'select',
      options: ['1px', '2px', '3px', '4px'],
    },
    padding: {
      control: 'select',
      options: ['3px', '6px', '9px', '12px'],
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <MikeFirst {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Im default btn',
  borderRadius: '5px',
  padding: '10px',
};

export const CustomColorPadd = Template.bind({});
CustomColorPadd.args = {
  ...Default.args,
  label: 'im custom color/padding',
  padding: '9px',
  borderRadius: '4px',
  color: '#2c2020',
};

export const CustomColorPaddBor = Template.bind({});
CustomColorPaddBor.args = {
  ...Default.args,
  label: 'Custom color, padding, and border radius',
  padding: '6px', // Uses an option from the control settings
  borderRadius: '2px',
  color: '#9e1cb2',
};
