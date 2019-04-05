import React, {Component} from 'react';
import SmurfForm from './SmurfForm';

class Smurf extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false
        }
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    render() {
        return (
            <div className="Smurf">
                <h3>{this.props.smurf.name}</h3>
                <strong>{this.props.smurf.height}
                    tall</strong>
                <p>{this.props.smurf.age}
                    smurf years old</p>
                <button onClick={this.toggleEditMode}>Edit Smurf</button>
                <button onClick={this.props.deleteSmurfHandler} id={this.props.smurf.id}>Delete Smurf</button>
                {this.state.editMode
                    ? <SmurfForm
                            smurf={this.props.smurf}
                            editSmurfHandler={this.props.editSmurfHandler}/>
                    : null}
            </div>
        );
    }
};

Smurf.defaultProps = {
    editSmurfHandler: () => null,
    deleteSmurfHandler: () => null,
    smurf: {
        id: '',
        name: '',
        height: '',
        age: ''
    }
};

export default Smurf;
