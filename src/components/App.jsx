import React, { Component } from 'react';
import NameList from './NameList/NameList';
import DisplayNames from './DisplayName/DisplayNames';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
        };
    }

    render(){
        return(
            <div>
                <DisplayNames firstName={this.state.firstName} lastName={this.state.lastName}/>
                <NameList listOfNames={this.state.names}/>
            </div>
        )
    }
}

export default App;