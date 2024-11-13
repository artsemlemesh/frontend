import React from 'react';
import MyButton from '../components/MyButton';




export default {
    title: 'Components/MyButton',
    component: MyButton,
    argTypes: {
        color: { control: 'color'}, //adds a color picker control
        onClick: {action: 'clicked'}, // logs click events in the storybook actions panel
    },
}

//template for stories
const Template = (args) => <MyButton {...args}/>

//basic story
export const Default = Template.bind({})
Default.args = {
    label: 'Click me',
    color: '#007bff',
}

//custom color story
export const CustomColor = Template.bind({})
CustomColor.args = {
    ...Default.args,//copies default args (label and color)
    label: 'Custom Color Button', //overrides
    color: '#28a745'//overrides
}

export const Disabled = Template.bind({})
Disabled.args = {
    ...Default.args, //copies default label and color
    disabled: true, //adds a new property
}


//custom click event
export const CustomClickEvent = Template.bind({})
CustomClickEvent.args = {
    label: 'Custom Click event',
    onClick: () => alert('button with custom clicked')
}