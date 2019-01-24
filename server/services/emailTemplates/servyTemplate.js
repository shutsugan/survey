const keys = require('../../config/keys');

module.exports = ({body}) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I like your input!!</h3>
          <p>Please answer the following question:<p>
          <p>${body}<p>
          <div><a href="${keys.domain}/api/servys/thanks">Yes</a></div>
          <div><a href="${keys.domain}/api/servys/thanks">no</a></div>
        </div>
      </body>
    </html>
  `;
};
