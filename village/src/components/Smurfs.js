import React, {Component} from 'react';

import Smurf from './Smurf';

function Smurfs(props) {
    return (
        <div className="Smurfs">
            <h1>Smurf Village</h1>
            <ul>
                {props
                    .smurfs
                    .map(smurf => {
                        return (<Smurf
                            editSmurfHandler={props.editSmurfHandler}
                            deleteSmurfHandler={props.deleteSmurfHandler}
                            smurf={smurf}
                            key={smurf.id}/>);
                    })}
            </ul>
        </div>
    );
}

Smurf.defaultProps = {
    smurfs: [],
    editSmurfHandler: () => null,
    deleteSmurfHandler: () => null,
};

export default Smurfs;
