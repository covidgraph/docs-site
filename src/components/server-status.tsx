import React, { FunctionComponent } from 'react'; // importing FunctionComponent


const ServerStatus: FunctionComponent = () => <aside>
<a href="#">
    <img src="https://registry.my-netdata.io/api/v1/badge.svg?chart=system.cpu&after=-60"></img>
</a>

</aside>

export default ServerStatus;
