import { delay, http, HttpResponse } from 'msw';
import MyMock from '../components/MyMock';

export default {
  title: 'Components/MyMock',
  component: MyMock,
};

const TestData = {
  users: [
    {
      id: '1',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'Bob Smith',
      email: 'bob@example.com',
      avatar: 'https://via.placeholder.com/150',
    },
  ],
  posts: [
    {
      id: '101',
      userId: '1',
      title: 'Understanding React Hooks',
      content:
        'React Hooks are functions that let you use state and other React features in functional components...',
      date: '2023-10-01',
    },
    {
      id: '102',
      userId: '2',
      title: 'A Guide to JavaScript Promises',
      content:
        'JavaScript promises are used to handle asynchronous operations in JavaScript...',
      date: '2023-10-02',
    },
  ],
  comments: [
    {
      id: '1001',
      postId: '101',
      userId: '2',
      content: 'Great article on hooks! Very informative.',
      date: '2023-10-03',
    },
    {
      id: '1002',
      postId: '102',
      userId: '1',
      content: 'Thanks for the guide on promises!',
      date: '2023-10-04',
    },
  ],
};

export const MockedSuccess = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://your-restful-endpoint/', () => {
          return HttpResponse.json(TestData);
        }),
      ],
    },
  },
};

export const MockedError = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://your-restful-endpoint', async () => {
          await delay(800);
          return new HttpResponse(null, { status: 403 });
        }),
      ],
    },
  },
};

export const Bob = {
    parameters: {
        msw: {
            handlers: [
                http.get('https://your-restful-endpoint', () => {
                    return HttpResponse.json({
                        users: [TestData.users[1]],
                        posts: TestData.posts.filter(post => post.userId === '2'),
                        comments: TestData.comments.filter( comment => comment.userId === '2')
                    })
                })
            ]
        }
    }
}
export const Alice = {
    parameters: {
        msw: {
            handlers: [
                http.get('https://your-restful-endpoint', () => {
                    return HttpResponse.json({
                        users: [TestData.users[0]],
                        posts: TestData.posts.filter(post => post.userId === '1'),
                        comments: TestData.comments.filter( comment => comment.userId === '1')
                    })
                })
            ]
        }
    }
}
