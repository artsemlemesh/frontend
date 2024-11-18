import List from "../../components/List/List";
import ListItem from "../../components/List/ListItem";
import { Clickable, Default, Selected } from "./ListItem.stories";


export default {
    title: 'Stories/L/List',
    component: List,
    subcomponents: {ListItem}
  };


export const Empty = {
    render: (args) => <List {...args}/> //renders nothing bcz no children are passed
}

export const OneItem = {
    render: (args) => (
        <List {...args}>
            <ListItem {...Default.args}/>
        </List>
    )
}

export const ManyItems = {
    render: (args) => (
        <List {...args}>
            <ListItem {...Default.args}/>
            <ListItem {...Selected.args}/>
            <ListItem {...Clickable.args}/>
        </List>
    )
}