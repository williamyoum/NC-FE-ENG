import React from 'react';

export default function BeerTable(props){
    return(
        <table className = "beerTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>
                        ABV levels
                        <button onClick = {() => props.abvSortUp()}>
                            low to high
                        </button>
                        <button onClick = {() => props.abvSortDown()}>
                            high to low
                        </button>
                    </th>
                    <th>
                        IBU levels
                        <button onClick = {() => props.ibuSortUp()}>
                            low to high
                        </button>
                        <button onClick = {() => props.ibuSortDown()}>
                            high to low
                        </button>
                    </th>
                    <th>
                        pH levels
                        <button onClick = {() => props.phSortUp()}>
                            low to high
                        </button>
                        <button onClick = {() => props.phSortDown()}>
                            high to low
                        </button>
                    </th>
                    <th>Food pairing</th>

                </tr>
            </thead>
            <tbody>
                { 
                    props.data.map(row =>(
                        <tr>
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