import { Textarea } from './Forms/Textarea';
import { Button } from './Forms/Button';
import { useEffect, useState } from 'react';
import { getUsername } from '../utils';
import { json } from 'react-router-dom';

export const Comment = ({ id, setIsCommentUpdated }) => {
  const [commentForm, setCommentForm] = useState({
    description: '',
    issueId: id,
    createdBy: '',
    createdAt: new Date(),
  });

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

  return (
    <form method="POST" className="flex flex-col gap-4 mt-4 py-4">
      <Textarea
        label="Write a comment below:"
        value={commentForm.description}
        placeholder="comment here..."
        name="description"
        handleChange={handleChange}
      />
      <Button type="button" label="Comment" handleClick={handleClick} />
    </form>
  );
};
