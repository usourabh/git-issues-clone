import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';

export const IssueList = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Issue List</h1>
        <Link
          to="/new-issue"
          className="bg-green-500 px-4 py-2 rounded-lg text-white"
        >
          New Issue
        </Link>
      </div>
    </Layout>
  );
};
