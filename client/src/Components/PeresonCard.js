import React, {Component} from 'react'; 

class PersonCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num:0
        }
    }
    addBirthday() {
        this.setState({
            num: this.state.num + 1
        })
    }


    render(){
        const {firstName, lastName, age, hairColor}= this.props
        const age1 = age + this.state.num
        return(
            <div>
                <h1>{firstName}, {lastName}</h1> 
                <p>Age: {age1}</p> 
                <button onClick={() => this.addBirthday()}>Birthday button for {firstName} {lastName}</button>
                <p>Hair Color: {hairColor}</p>
            </div>
        )
    }
}

export default PersonCard;