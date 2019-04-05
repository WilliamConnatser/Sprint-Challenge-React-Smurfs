import React, {Component} from 'react';

class SmurfForm extends Component {
    constructor(props) {
        super(props);

        //If editing a smurf then the smurf prop will contain an Object
        if (props.smurf) {
            const {name, age, height} = props.smurf;
            this.state = {
                name,
                age,
                height
            };

        } else {
            this.state = {
                name: '',
                age: '',
                height: ''
            }
        }

    }

    formSubmitHandler = (event) => {
        event.preventDefault();

        if (this.props.smurf === undefined) {
            this.addSmurf()
        } else {
            this.editSmurf(event)
        }
    }

    addSmurf() {
        this
            .props
            .addSmurfHandler(this.state);

        this.setState({name: '', age: '', height: ''});
    }

    editSmurf() {
        this
            .props
            .editSmurfHandler(this.props.smurf.id, this.state);
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <div className="SmurfForm">
                <form onSubmit={this.formSubmitHandler}>
                    <input
                        onChange={this.handleInputChange}
                        placeholder="name"
                        value={this.state.name}
                        name="name"/>
                    <input
                        onChange={this.handleInputChange}
                        placeholder="age"
                        value={this.state.age}
                        name="age"/>
                    <input
                        onChange={this.handleInputChange}
                        placeholder="height"
                        value={this.state.height}
                        name="height"/>
                    <button type="submit">Add to the village</button>
                </form>
            </div>
        );
    }
}

export default SmurfForm;
