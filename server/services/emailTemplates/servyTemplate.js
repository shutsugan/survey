const keys = require('../../config/keys');

module.exports = ({id, body}) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I like your input!!</h3>
          <p>Please answer the following question:<p>
          <p>${body}<p>
          <div><a href="${keys.domain}/api/servys/${id}/yes">Yes</a></div>
          <div><a href="${keys.domain}/api/servys/${id}/no">no</a></div>
        </div>
      </body>
    </html>
  `;
};
