// src/stories/DataPage.stories.jsx

import DataPage from "../components/DataPage";

export default {
    title: 'Components/DataPage',
    component: DataPage,
};

const Template = (args) => <DataPage {...args} />;

// Story for empty state
export const Empty = Template.bind({});
Empty.args = {
    isLoading: false,
    isEmpty: true,
    data: [],
};

// Story for loading state
export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
    isEmpty: false,
    data: [],
};

// Story for fetched data state
export const FetchedData = Template.bind({});
FetchedData.args = {
    isLoading: false,
    isEmpty: false,
    data: [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
    ],
};