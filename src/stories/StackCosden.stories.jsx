import Stack from "../components/StackCosden";



export default {
    title: 'Components/Stack',
    component: Stack,
    argTypes: {
        numberOfChildren: {
            options: [1, 5, 10],
            control: {
                type: 'select'
            }
        },
        orientation: {
            options: ['horizontal', 'vertical'],
            control: {
                type: 'select'
            }
        }
    },
    args: {
        numberOfChildren: 5,
    }
}

//render squares
function createChildren(numberOfChildren){
    return Array(numberOfChildren)
    .fill(null)
    .map((_, index) => (
        <div
            key={index}
            style={{width: 100, height: 100, backgroundColor: 'red'}}
        />
    ))
}
//we put our funciton into the template
const Template = (args) => <Stack {...args}>{createChildren(args.numberOfChildren)}</Stack>


export const Horizontal = Template.bind({})
Horizontal.args = {
    orientation: 'horizontal',
}
export const Vertical = Template.bind({})
Vertical.args = {
    orientation: 'vertical',
}