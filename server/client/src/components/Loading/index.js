import React from 'react';

import './index.css';

const Loading = _ => (
  <div className="loading flex flex-center">
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  </div>
);

export default Loading;
