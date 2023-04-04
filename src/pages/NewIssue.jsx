import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { TextField } from '../components/Forms/TextField';
import { Textarea } from '../components/Forms/Textarea';
import { Button } from '../components/Forms/Button';

export const NewIssue = () => {
  const [issueForm, setIssueForm] = useState({
    title: '',
    description: '',
    createdBy: '',
    createdAt: Date.now(),
  });

  useEffect(() => {
    let username = localStorage.getItem('username');

    if (!username) {
      username = 'usourabh';
      localStorage.setItem('username', username);
    }

    setIssueForm((prev) => ({
      ...prev,
      createdBy: username,
    }));
  }, []);

  const handleChange = (e) => {
    setIssueForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <Layout>
      <section className="max-w-5xl m-auto">
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
          <Button label='Create' />
        </form>
      </section>
    </Layout>
  );
};
