export const getLatestEmails = () => {
  return new Promise(resolve => {
    fetch('/api/v1/email/latest', { methos: 'GET' })
      .then(response => {
        if (response.redirected) {
          localStorage.setItem('isAuthenticated', false);
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
    fetch('/api/v1/email', { methos: 'GET' })
      .then(response => {
        if (response.redirected) {
          localStorage.setItem('isAuthenticated', false);
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

export const getEmailsKPI = () => {
  return new Promise(resolve => {
    fetch('/api/v1/email/kpi', { methos: 'GET' })
      .then(response =>
        response
          .json()
          .then(({data}) => {
            resolve({
              kpi: data
            });
          })
      )
  });
};
