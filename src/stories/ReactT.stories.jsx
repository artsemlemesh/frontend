import App from '../components/ReactT';
import { expect, fireEvent, userEvent, within } from '@storybook/test';
 
export default {
  title: 'Component/FilterPro',
  component: App,
};

const Template = (args) => <App {...args} />;

export const FilterProducts = Template.bind({});

export const OnlyAvailable = Template.bind({});
OnlyAvailable.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const onlyABtn = await canvas.getByLabelText('Only show products in stock');
  await userEvent.click(onlyABtn);
  expect(await canvas.getAllByRole('row').length).toBe(9)
};
 


export const SearchFruit = Template.bind({});
SearchFruit.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  const searchInput = await canvas.getByPlaceholderText('Search...')
  await userEvent.click(searchInput)
  await userEvent.keyboard('fruit')
  expect(await canvas.getAllByRole('row').length).toBe(5)

};


export const SearchVeggies = Template.bind({})
SearchVeggies.play = async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const searchInput = await canvas.getByPlaceholderText('Search...')
    await userEvent.click(searchInput)
    await userEvent.keyboard('veg')
    expect(await canvas.getAllByRole('row').length).toBe(5)
}
 