export const getUsername = () => {
  let username = localStorage.getItem('username');

  if (!username) {
    username = 'usourabh';
    localStorage.setItem('username', username);
  }

  return username;
};
