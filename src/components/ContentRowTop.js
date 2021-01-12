import React from 'react';
import SmallCard from './SmallCard';

function ContentRowTop () {
    return (
        <React.Fragment>
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">
                    <SmallCard />
                </div>
        </React.Fragment>
    )
}

export default ContentRowTop;