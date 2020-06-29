const error = (() => {
  const renderErrors = (errorMessage) => {
    const content = document.querySelector('#app');
    const body = document.querySelector('body');
    if (content) {
      content.remove();
    }
    const errorDiv = document.createElement('section');
    errorDiv.setAttribute('id', 'errors');
    const h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode(errorMessage));
    errorDiv.appendChild(h2);
    body.prepend(errorDiv);
  };

  return {
    renderErrors,
  };
})();

export default error;