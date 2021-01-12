import React from 'react';
import LastProductInDB from './LastProductInDB';
import CategoriesInDB from './CategoriesInDB';
function ContentRowBottom () {
    return (
        <React.Fragment>
             {/* <!-- Content Row --> */}
             <div className="row">
                <LastProductInDB />
                <CategoriesInDB />
            </div>
        </React.Fragment>
    )
}

export default ContentRowBottom;