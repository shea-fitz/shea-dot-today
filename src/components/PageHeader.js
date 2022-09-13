import React from "react";

const PageHeader = ({title, year, type}) => {

return (
    <> 
    <div className="page-header">
            <h1 className="page-title">{title}</h1>

        </div>

        <div className="page-details">
            <div className="page-type">{type}</div>
            |
            <div className="page-year">{year}</div>
        </div>  
    </>


     );
}

    
export default PageHeader;