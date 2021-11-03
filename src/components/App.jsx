import React, { Component } from 'react';
import NameList from './NameList/NameList';
import DisplayNames from './DisplayName/DisplayNames';
import Alert from './Alert/Alert';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            alert: this.alertOnClick
        };
    }

    alertOnClick = () => {
        alert('devCodeCamp');
    }

    render(){
        return(
            <div>
                <DisplayNames firstName={this.state.firstName} lastName={this.state.lastName}/>
                <NameList listOfNames={this.state.names}/>
                <Alert alert={this.state.alert}/>
            </div>
        )
    }
}

export default App;