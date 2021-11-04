import React, { Component } from 'react';

class SuperheroCreate extends Component {
    
    state = {
        name: '',
        primaryAbility: '',
        secondaryAbility: '',
        errors: {
            name: '',
            primaryAbility: '',
            secondaryAbility: ''
        }
    }

    handleChange = (event) => {
        let errors = this.state.errors;
        switch(event.target.name){
            case 'name':
                errors.name = event.target.value.length < 3 ? 'Superhero name must be at least three characters': null;
                break;
                case 'primaryAbility':
                    errors.primaryAbility = event.target.value.length < 3 ? 'The superhero Primary Ability must be at least three characters': null;
                    break;
                case 'secondaryAbility':
                    errors.secondaryAbility = event.target.value.length < 3 ? 'The superhero Secondary Ability must be at least three characters': null;
                    break;
                default:
                    break;
            }
        this.setState({
            [event.target.name]: event.target.value,
            errors: errors
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${this.state.name}\nPrimary Ability: ${this.state.primaryAbility}\nSecondary Ability: ${this.state.secondaryAbility}\n\nSuccessfully added.`)
    };

    render(){
        return(
            <form onSubmit={(event) => this.handleSubmit(event)}>\
                <div>
                    <label>Superhero Name</label>
                    <input type="text" name='name' onChange={this.handleChange} value={this.state.name}/>
                    {this.state.errors.name ? <p style={{color:'red'}}>{this.state.errors.name}</p> : ''}
                </div>
                <div>
                    <label>Superhero Primary Ability</label>
                    <input type="text" name='primaryAbility' onChange={this.handleChange} value={this.state.primaryAbility}/>
                    {this.state.errors.primaryAbility ? <p style={{color:'red'}}>{this.state.errors.primaryAbility}</p> : ''}
                </div>
                <div>
                    <label>Superhero Secondary Ability</label>
                    <input type="text" name='secondaryAbility' onChange={this.handleChange} value={this.state.secondaryAbility}/>
                    {this.state.errors.secondaryAbility ? <p style={{color:'red'}}>{this.state.errors.secondaryAbility}</p> : ''}
                </div>
                <button type='submit'>Add Hero</button>
            </form>
        );
    }
}
export default SuperheroCreate;