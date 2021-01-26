import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color: "primary",
    title: "Products in Data Base",
    value: 135,
    icon: "fa-clipboard-list",
    dolarSign: false
}

let amountInProducts = {
    color: "success",
    title: "Amount in products",
    value: 546.456,
    icon: "fa-dollar-sign",
    dolarSign: true
}

let usersQuantity = {
    color: "warning",
    title: "Users quantity",
    value: 38,
    icon: "fa-user-check",
    dolarSign: false
}

let cardProps = [productInDataBase, amountInProducts, usersQuantity];

function ContentRowTop () {
    return (
        <React.Fragment>
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">
                    {
                        cardProps.map((card, i) => {
                            return <SmallCard {...card} key= {i}/>
                        })
                    }
                </div>
        </React.Fragment>
    )
}

export default ContentRowTop;