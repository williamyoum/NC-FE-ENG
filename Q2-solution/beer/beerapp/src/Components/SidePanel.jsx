import React from 'react';

function SidePanel(props){

    return(
        // create a table that takes data from state and displays to user
        <div className = "data-container">
            { 
                // take data passed via props from parent to child
                    // and map it to a "row"
                props.data.map(data =>(
                    <tr>
                        {/* display categories by key in respective columns */}
                        <div>{data.image_url}</div>
                    </tr>    
                ))
            }
        </div>
    )
}

export default SidePanel;