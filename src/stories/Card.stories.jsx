import React from 'react';
import Card from '../components/Card';


export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    imageUrl: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://via.placeholder.com/300',
  title: 'Card Title',
  description: 'This is a description of the card.',
};