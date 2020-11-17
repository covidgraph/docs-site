import React, { FunctionComponent } from 'react'; // importing FunctionComponent


const ServerStatus: FunctionComponent = () => <aside>
<a href="#">
    <img src="https://registry.my-netdata.io/api/v1/badge.svg?chart=system.cpu&after=-60"></img>
</a>

<img src="./../src/components/Schema_NLP.svg"></img>

<svg id="schema" height="400" width="600" version="1.1" xmlns="http://www.w3.org/2000/svg"
               xmlnsXlink="http://www.w3.org/1999/xlink" >
  <image x="0" y="0" height="400" width="600"  xlinkHref="../../src/components/Schema_NLP.svg" />
</svg>



</aside>

export default ServerStatus;
