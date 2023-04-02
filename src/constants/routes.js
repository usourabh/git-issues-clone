import { IssueList } from '../pages/IssueList';
import { NewIssue } from '../pages/NewIssue';

// Define path along with Components to create routes for application
export const routes = [
  {
    path: '/',
    element: <IssueList />,
  },
  {
    path: '/new-issue',
    element: <NewIssue />,
  },
];
