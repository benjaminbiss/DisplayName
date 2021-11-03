import React from 'react';


const Superheroes = (props) => {
    return ( 
        <div>
            <table>
                <tr>
                    <th>Superhero Information</th>
                </tr>
                <tr>
                    <td>Name: </td>
                    {props.superheroes.map((names) => (
                        <td>{ names.name }</td>
                     ))}
                </tr>
                <tr>
                    <td>Primary Ability: </td>
                    {props.superheroes.map((names) => (
                        <td>{ names.primaryAbility }</td>
                     ))}
                </tr>
                <tr>
                    <td>Secondary Ability: </td>
                    {props.superheroes.map((names) => (
                        <td>{ names.secondaryAbility }</td>
                     ))}
                </tr>
            </table>
        </div>
     );
}
 
export default Superheroes;