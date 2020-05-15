import React from "react";
import axios from 'axios';

const url = 'http://localhost:3333/smurfs';
export default class SmurfForm extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
            age: 0,
            height: '',
        }
    }
    handleChanges = e => {
        e.preventDefault();
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height,
        }
        this.postSmurf(newSmurf)
    }

    postSmurf = smurf => {
        axios.post(url, smurf)
            .then(res => {
                console.log(res.data)
            })
    }
    render(){
        return(
            <form>
                {/* Smurf Name Input */}
                <div className='nameC'>
                <label>Name</label>
                <input
                type='text'
                value={this.state.name}
                name='name'
                onChange={this.handleChanges} />
                </div>
                {/* Smurf Age Input  */}
                <div className='ageC'>
                <label>Age</label>
                <input
                type='number'
                value={this.state.age}
                name='age'
                onChange={this.handleChanges} />
                </div>
                {/* Smurf Height Input */}
                <div className='heightC'>
                <label>Height</label>
                <input
                type='text'
                value={this.state.height}
                name='height'
                onChange={this.handleChanges} />
                </div>
               <button onClick={this.handleSubmit}>Add Smurf!</button>
            </form>
        )
    }
}