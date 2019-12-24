import React from 'react';

export default function BeerTable(props){

    

    return(
        // create a table that takes data from state and displays to user
        <table className = "beerTable">
            <thead>
                <tr>
                    <th>Name
                        <button onClick = {() => props.sortBy('name')}> A -> Z
                            </button>
                        <button onClick = {() => props.downSortBy('name')}>  Z -> A
                            </button>
                    </th>
                    {/*create buttons that call the respective functions for sorting*/}
                    <th>
                        ABV levels
                        <button onClick = {() => props.sortBy('abv')}>  sort ascending
                            </button>
                        <button onClick = {() => props.downSortBy('abv')}>  sort descending
                            </button>
                    </th>
                    <th>
                        IBU levels
                        <button onClick = {() => props.sortBy('ibu')}>  sort ascending
                            </button>
                        <button onClick = {() => props.downSortBy('ibu')}>  sort descending
                            </button>
                    </th>
                    <th>
                        pH levels
                        <button onClick = {() => props.sortBy('ph')}>  sort ascending
                            </button>
                        <button onClick = {() => props.downSortBy('ph')}>  sort descending
                            </button>
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
                            <td>{row.abv}%</td>
                            <td>{row.ibu}</td>
                            <td>{row.ph}</td>
                            <td>{row.food_pairing[0]}</td>
                        </tr>    
                    ))
                }
            </tbody>
        </table>
    )
}