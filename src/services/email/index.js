export const getLatestEmails = () => {
  return new Promise(resolve => {
    fetch('/api/v1/email/latest', { methos: 'GET' })
      .then(response =>
        response
          .json()
          .then(({data, error}) => {
            resolve({
              emails: data
            });
          })
      )
  });
};

export const getEmails = () => {
  return new Promise(resolve => {
    fetch('/api/v1/email', { methos: 'GET' })
      .then(response =>
        response
          .json()
          .then(({data, error}) => {
            resolve({
              emails: data
            });
          })
      )
  });
};