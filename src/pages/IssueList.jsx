import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { useEffect, useState } from 'react';

export const IssueList = () => {
  const [allIssues, setAllIssues] = useState([]);

  useEffect(() => {
    const issues = JSON.parse(localStorage.getItem('all_issues'));

    if (issues) {
      setAllIssues(issues);
    }
  }, []);

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

      <div className="mt-4">
        {allIssues.map((issue) => (
          <Link
            to={`/issues/${issue.id}`}
            key={issue.id}
            className="border border-neutral-500 flex items-center justify-between p-4"
          >
            <div className='flex items-center gap-2'>
              <p>{issue.title}</p>
              <span
                className={`text-xs rounded-lg p-1 text-neutral-800 ${
                  issue.status === 'open' ? 'bg-green-500' : 'bg-purple-500'
                }`}
              >
                {issue.status}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="text-blue-500">{issue.createdBy}</span>
              <span className="text-neutral-600">{issue.createdAt}</span>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};
