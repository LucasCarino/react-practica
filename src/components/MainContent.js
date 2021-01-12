import React from 'react';
import ContentRowTop from './ContentRowTop';
import ContentRowBottom from './ContentRowBottom';


function MainContent () {
    return (
        <React.Fragment>
            {/* <!-- Container Fluid --> */}
            <div className="container-fluid">
                <ContentRowTop />
                <ContentRowBottom />
               
            </div>
        </React.Fragment>
    )
}

export default MainContent;