// src/components/UserProfile.stories.js

import UserProfile from "../components/UserProfile";

export default {
  title: 'Components/UserProfile',
  component: UserProfile,
  parameters: {
    mockData: [
      {
        url: '/api/user',          // The endpoint URL to mock
        method: 'GET',             // HTTP method to mock
        status: 200,               // HTTP status code for the response
        response: {                // Mocked response data
          name: 'Mike',
          email: 'mike@example.com',
        },
      },
    ],
  },
};

const Template = (args) => <UserProfile {...args} />;

export const Default = Template.bind({});