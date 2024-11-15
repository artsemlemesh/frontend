import { http, HttpResponse } from 'msw';
import MyDashboard from '../components/MyDashboard';

export default {
  title: 'Components/MyDashboard',
  component: MyDashboard,
};

const userMockData = [
  { name: 'Mike', email: 'Mike.doe@example.com' },
  { name: 'joe', email: 'rogan@example.com' },
];
const postsMockData = [
  { id: 1, title: 'FIRST POST' },
  { id: 2, title: 'SECOND POST' },
];
const commentsMockData = [
  { id: 1, postId: 1, body: 'GREATE post!' },
  { id: 2, postId: 1, body: 'THATBKGS for sharing!' },
];

//successful mock data
export const MySuccess = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/users', () => HttpResponse.json(userMockData)),
        http.get('/api/posts', () => HttpResponse.json(postsMockData)),
        http.get('/api/comments?postId=1', () =>
          HttpResponse.json(commentsMockData)
        ),
      ],
    },
  },
};
export const MyEmptyData = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/users', () => HttpResponse.json([])),
        http.get('/api/posts', () => HttpResponse.json([])),
        http.get('/api/comments?postId=1', () => HttpResponse.json([])),
      ],
    },
  },
};
export const MyUserError = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/users', () => HttpResponse.error(500)),
        http.get('/api/posts', () => HttpResponse.json([])),
        http.get('/api/comments?postId=1', () => HttpResponse.json([])),
      ],
    },
  },
};
export const MikeUser = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/users', () => HttpResponse.json([userMockData[0]])),
        http.get('/api/posts', () => HttpResponse.json(postsMockData)),
        http.get('/api/comments?postId=1', () => HttpResponse.json(commentsMockData)),
      ],
    },
  },
};
export const JoeUser = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/users', () => HttpResponse.json([userMockData[1]])), //put also in []
        http.get('/api/posts', () => HttpResponse.json(postsMockData)),
        http.get('/api/comments?postId=1', () => HttpResponse.json(commentsMockData)),
      ],
    },
  },
};
