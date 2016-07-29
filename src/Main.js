import React, { PropTypes } from 'react';

const Pokemon = ({ name, gen, label }) => (
    <div className="pokemon">
        <img
            src={`http://www.pokestadium.com/sprites/${gen}/${name}${(gen === 'xy') ? '.gif' : '.png'}`}
            alt={name}
        />
        {label &&
            <p>{name}</p>
        }
    </div>
);

Pokemon.propTypes = {
    name: PropTypes.string.isRequired,
    gen: PropTypes.string,
    label: PropTypes.bool,
};

Pokemon.defaultProps = {
    gen: 'xy',
};

export default Pokemon;
