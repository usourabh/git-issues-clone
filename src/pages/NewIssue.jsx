import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { TextField } from '../components/Forms/TextField';
import { Textarea } from '../components/Forms/Textarea';
import { Button } from '../components/Forms/Button';
import { getUsername } from '../utils';
import { useNavigate } from 'react-router-dom';

export const NewIssue = () => {
  const navigate = useNavigate();
  const [issueForm, setIssueForm] = useState({
    title: '',
    description: '',
    createdBy: '',
    createdAt: new Date(),
    status: 'open'
  });

  useEffect(() => {
    const username = getUsername();

    setIssueForm((prev) => ({
      ...prev,
      createdBy: username,
    }));
  }, []);

  const handleChange = (e) => {
    setIssueForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (issueForm.title !== '' && issueForm.description !== '') {
      const allIssues = JSON.parse(localStorage.getItem('all_issues'));
      let updatedIssues = [];
      let currentIssueId = 1;

      if (allIssues) {
        currentIssueId = allIssues.length + 1;
        updatedIssues = [
          ...allIssues,
          { ...issueForm, id: currentIssueId },
        ];
      } else {
        updatedIssues = [{ ...issueForm, id: currentIssueId }];
      }

      localStorage.setItem('all_issues', JSON.stringify(updatedIssues));
      setIssueForm((prev) => ({
        ...prev,
        title: '',
        description: '',
        createdAt: new Date(),
      }));

      return navigate(`/issues/${currentIssueId}`);
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Create New Issue</h1>

      <form method="POST" className="flex flex-col gap-4">
        <TextField
          label="title"
          name="title"
          value={issueForm.title}
          placeholder="title here..."
          handleChange={handleChange}
        />
        <Textarea
          label="description"
          name="description"
          value={issueForm.description}
          placeholder="description here..."
          handleChange={handleChange}
        />
        <Button type="submit" label="Create" handleClick={handleClick} />
      </form>
    </Layout>
  );
};
