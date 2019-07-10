export const getLatestEmails = () => {
  return new Promise(resolve => {
    fetch('/api/v1/email/latest', { methos: 'GET', redirect: 'follow' })
      .then(response => {
        if (response.redirected) {
          window.location.href = response.url
        } else {
          response
            .json()
            .then(({data}) => {
              resolve({
                emails: data
              });
            })
        }
      })
  });
};

export const getEmails = () => {
  return new Promise(resolve => {
    fetch('/api/v1/email', { methos: 'GET', redirect: 'follow' })
      .then(response => {
        if (response.redirected) {
          window.location.href = response.url
        } else {
          response
            .json()
            .then(({data}) => {
              resolve({
                emails: data
              });
            })
        }
      })
  });
};
