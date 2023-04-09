import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { Comment } from '../components/Comment';
import { Button } from '../components/Forms/Button';

export const Issue = () => {
  const { id } = useParams();
  const [issue, setIssue] = useState({});
  const [comments, setComments] = useState([]);
  const [isCommentUpdated, setIsCommentUpdated] = useState(true);

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

  useEffect(() => {
    if (isCommentUpdated) {
      const allComments = JSON.parse(localStorage.getItem('comments'));

      if (allComments) {
        const filteredIssueComments = allComments.filter((comment) => {
          return comment.issueId === Number(id);
        });
        setComments(filteredIssueComments);
      }

      setIsCommentUpdated(false);
    }
  }, [isCommentUpdated]);

  return (
    <Layout>
      <div>
        <div className='flex items-center gap-4'>
          <h1 className="text-3xl font-bold mb-4">{issue.title}</h1>
          <span
            className={`text-xs rounded-lg p-1 text-neutral-800 ${
              issue.status === 'open' ? 'bg-green-500' : 'bg-purple-500'
            }`}
          >
            {issue.status}
          </span>
        </div>

        <Card
          username={issue.createdBy}
          createdAt={issue.createdAt}
          description={issue.description}
        />

        <section className="flex flex-col gap-4 mt-4">
          <h3 className='text-base font-semibold text-neutral-300'>Comments: </h3>
          {comments.map((comment) => (
            <Card
              key={comment.id}
              username={comment.createdBy}
              createdAt={comment.createdAt}
              description={comment.description}
            />
          ))}
        </section>

        {issue.status === 'open' && (
          <Comment id={id} setIsCommentUpdated={setIsCommentUpdated} />
        )}
      </div>
    </Layout>
  );
};
