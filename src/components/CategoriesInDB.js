import React from 'react';
import Category from './Category';

function CategoriesInDB () {
    return (
        <React.Fragment>
            {/* <!-- Categories in DB --> */}
            <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                   <Category />
                                </div>
                            </div>
                        </div>
                    </div>
        </React.Fragment>
    )
}

export default CategoriesInDB;