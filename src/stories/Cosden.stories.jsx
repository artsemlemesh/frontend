import Cosden from "../components/Cosden";
import { fn } from '@storybook/test';




export default {
    title: 'Components/Cosden',
    component: Cosden,
    argTypes: {
        color: {control: 'color'},
        onClick: {action: 'clicked'}, //logs onclick event
        padding: {
            control: 'select',
            options: ['3px', '6px', '9px', '12px'],

        },
        label: {
            control: 'select',
            options: ['first', 'second']
        }
    },
    // args: {
    //     onClick: fn()   //maybe its functional is done by onclick above
    // }
}

const Template = (args) => <Cosden {...args}/>


export const Default = Template.bind({})
Default.args = {
    label: 'first',
    padding: '3px',
    onClick: () => alert('Default button clicked!'), // Custom click handler

}

export const First = Template.bind({})
First.args = {
    ...Default.args,
    // label: 'Im first button',
    onClick: () => alert('First button clicked!'), // Custom click handler

}