import ListItem from "../../components/List/ListItem";


export default {
    title: 'Stories/L/ListItem',
    component: ListItem,
  };


  const Template = (args) => <ListItem {...args}/>


  export const Default = Template.bind({})
  Default.args = {
    title: 'ITEM 1'
  }

  export const Selected = Template.bind({})
  Selected.args = {
    title: 'Selected',
    isSelected: true
  }

  export const Clickable = Template.bind({})
  Clickable.args = {
    title: 'Clickable item',
    onClick: () => alert('Item clicked')
  }