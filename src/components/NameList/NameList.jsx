import React from 'react';

const NameList = (props) => {
    return ( 
        <div>
            {props.listOfNames.map((listOfNames) => (
                <li>{ listOfNames }</li>
            ))}
        </div>
     );
}
 
export default NameList;