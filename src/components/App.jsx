import React, { Component } from 'react';
import NameList from './NameList/NameList';
import DisplayNames from './DisplayName/DisplayNames';
import Alert from './Alert/Alert';
import Superheroes from './Superheroes/Superheroes';
import SuperheroCreate from './SuperheroCreate/SuperheroCreate';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            alert: this.alertOnClick,
            superheroes : [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondaryAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondaryAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondaryAbility: 'Shoots web'
                }
            ]
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
                <Superheroes superheroes={this.state.superheroes} addHero={this.state.addHero}/>
                <SuperheroCreate />
            </div>
        )
    }
}

export default App;