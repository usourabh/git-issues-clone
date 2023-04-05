import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { useEffect, useState } from 'react';

export const Issue = () => {
  const { id } = useParams();
  const [issue, setIssue] = useState({});

  useEffect(() => {
    const allIssues = JSON.parse(localStorage.getItem('all_issues'));

    if (allIssues && allIssues.length > 0) {
      const issue = allIssues.find((issue) => {
        return issue.id === Number(id);
      });

      if (issue) {
        setIssue(issue);
      }
    }
  }, []);

  return (
    <Layout>
      {/* {!issue && Object.keys(issue).length === 0 ? (
        <p>Issue Not Found</p>
      ) : ( */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{issue.title}</h1>

        <div className="flex flex-col border border-neutral-500">
          <div className="flex items-center gap-2 text-sm font-semibold w-full px-4 py-2 bg-neutral-600 border-b border-neutral-500">
            <span className="text-blue-400">{issue.createdBy}</span>
            <span className="text-neutral-200">{issue.createdAt}</span>
          </div>
          <p className="p-4">{issue.description}</p>
        </div>
      </div>
      {/* )} */}
    </Layout>
  );
};
