import { Textarea } from './Forms/Textarea';
import { Button } from './Forms/Button';
import { useEffect, useState } from 'react';
import { getUsername } from '../utils';
import { json, useNavigate } from 'react-router-dom';

export const Comment = ({ id, setIsCommentUpdated }) => {
  const [commentForm, setCommentForm] = useState({
    description: '',
    issueId: Number(id),
    createdBy: '',
    createdAt: new Date(),
  });
  const navigate = useNavigate();

  useEffect(() => {
    const username = getUsername();

    setCommentForm((prev) => ({
      ...prev,
      createdBy: username,
    }));
  }, []);

  const handleChange = (e) => {
    setCommentForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (commentForm.description !== '') {
      const allComments = JSON.parse(localStorage.getItem('comments'));
      let updatedComments = [];

      if (allComments) {
        updatedComments = [
          ...allComments,
          { ...commentForm, id: allComments.length + 1 },
        ];
      } else {
        updatedComments = [{ ...commentForm, id: 1 }];
      }

      localStorage.setItem('comments', JSON.stringify(updatedComments));
      setCommentForm((prev) => ({
        ...prev,
        description: '',
        createdAt: new Date(),
      }));

      setIsCommentUpdated(true);
    }
  };

  const handleClose = () => {
    const allIssues = JSON.parse(localStorage.getItem('all_issues'));

    if (allIssues) {
      const issue = allIssues.find((issue) => {
        return issue.id === Number(id)
      });

      if (issue) {
        issue.status = 'closed';
        localStorage.setItem('all_issues', JSON.stringify(allIssues));
        navigate(0);
      }
    }
  }

  return (
    <form method="POST" className="flex flex-col gap-4 mt-4 py-4">
      <Textarea
        label="Write a comment below:"
        value={commentForm.description}
        placeholder="comment here..."
        name="description"
        handleChange={handleChange}
      />
      <div className='flex items-center gap-4 justify-between'>
        <Button type="button" label="Comment" handleClick={handleClick} />
        <Button type="button" label="Close" handleClick={handleClose} styleClass="bg-purple-500" />
      </div>
    </form>
  );
};
