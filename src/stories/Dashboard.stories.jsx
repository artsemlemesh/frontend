// src/components/Dashboard.stories.js
import { http, HttpResponse, delay } from 'msw';
import Dashboard from '../components/Dashboard';

export default {
  title: 'Components/Dashboard',
  component: Dashboard,
};

const userMockData = { name: 'John Doe', email: 'john.doe@example.com' };
const postsMockData = [
  { id: 1, title: 'First Post' },
  { id: 2, title: 'Second Post' },
];
const commentsMockData = [
  { id: 1, postId: 1, body: 'Great post!' },
  { id: 2, postId: 1, body: 'Thanks for sharing!' },
];

// Successful mock data
export const Success = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/user', () => HttpResponse.json(userMockData)),
        http.get('/api/posts', () => HttpResponse.json(postsMockData)),
        http.get('/api/comments?postId=1', () => HttpResponse.json(commentsMockData)),
      ],
    },
  },
};

// Empty posts and comments
export const EmptyData = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/user', () => HttpResponse.json(userMockData)),
        http.get('/api/posts', () => HttpResponse.json([])), // No posts
        http.get('/api/comments?postId=1', () => HttpResponse.json([])), // No comments
      ],
    },
  },
};

// Error on fetching user data
export const UserError = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/user', () => HttpResponse.error(500)), // Simulate error
        http.get('/api/posts', () => HttpResponse.json(postsMockData)),
        http.get('/api/comments?postId=1', () => HttpResponse.json(commentsMockData)),
      ],
    },
  },
};

// Delayed response for posts
export const DelayedPosts = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/user', () => HttpResponse.json(userMockData)),
        http.get('/api/posts', async () => {
          await delay(2000);
          return HttpResponse.json(postsMockData);
        }),
        http.get('/api/comments?postId=1', () => HttpResponse.json(commentsMockData)),
      ],
    },
  },
};