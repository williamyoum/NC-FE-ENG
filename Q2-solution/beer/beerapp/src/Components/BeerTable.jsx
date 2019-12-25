import React from 'react';

function BeerTable(props){

    return(
        // create a table that takes data from state and displays to user
        <div className = "data-container">
            <table className = "beerTable">
                <thead>
                    <tr>
                        <th>
                            <div className= "category">Name</div>

                            {/*create buttons that call the respective functions for sorting*/}
                            <div className = "sortButtons">
                                <button onClick = {() => props.sortBy('name')}> A -> Z
                                    </button>
                                <button onClick = {() => props.downSortBy('name')}>  Z -> A
                                    </button>    
                            </div>
                        </th>
                        <th>
                            <div className= "category">Tagline</div>                            
                        </th>
                        <th>
                            <div className= "category">ABV levels</div>         
                            <div className = "sortButtons">
                                <button onClick = {() => props.sortBy('abv')}>  Sort Low
                                    </button>
                                <button onClick = {() => props.downSortBy('abv')}>  Sort High
                                    </button>    
                            </div>
                        </th>
                        <th>
                            <div className= "category">IBU levels</div>     
                            <div className = "sortButtons">
                                <button onClick = {() => props.sortBy('ibu')}>  Sort Low
                                    </button>
                                <button onClick = {() => props.downSortBy('ibu')}>  Sort High
                                    </button>    
                            </div>
                        </th>
                        <th>
                            <div className= "category">pH levels</div>         
                            <div className = "sortButtons">
                                <button onClick = {() => props.sortBy('ph')}>  Sort Low
                                    </button>
                                <button onClick = {() => props.downSortBy('ph')}>  Sort High
                                    </button>    
                            </div>
                        </th>
                        <th>Food pairing</th>
                    </tr>
                </thead>
                    <tbody>
                        { 
                            // take data passed via props from parent to child
                                // and map it to a "row"
                            props.data.map(row =>(
                                <tr>
                                    {/* display categories by key in respective columns */}
                                    <td>{row.name}</td>
                                    <td>{row.tagline}</td>
                                    <td>{row.abv}%</td>
                                    <td>{row.ibu}</td>
                                    <td>{row.ph}</td>
                                    <td>{row.food_pairing[0]}</td>
                                </tr>    
                            ))
                        }
                    </tbody>
            </table>
        </div>
    )
    
}

export default BeerTable;