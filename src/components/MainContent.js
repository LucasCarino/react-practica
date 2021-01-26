import React from 'react';
import ContentRowTop from './ContentRowTop';
import ContentRowBottom from './ContentRowBottom';
import Product from './Product';


function MainContent () {
    return (
        <React.Fragment>
            {/* <!-- Container Fluid --> */}
            <div className="container-fluid">
                <ContentRowTop />
                <ContentRowBottom />
                <Product />
            </div>
        </React.Fragment>
    )
}

export default MainContent;