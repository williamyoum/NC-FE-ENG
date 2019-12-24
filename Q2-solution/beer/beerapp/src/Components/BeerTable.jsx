import React from 'react';

export default function BeerTable(props){
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>
                        <button
                            onClick = {() => props.sortBy('abv')}
                        >ABV level</button>
                    </th>
                    <th>IBU level</th>
                    <th>pH levels</th>
                    <th>Food pairing</th>

                </tr>
            </thead>
            <tbody>
                {
                    props.beers.map(row =>(
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