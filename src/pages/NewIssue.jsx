import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';

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

  return <Layout>NewIssue</Layout>;
};
