import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = ({ name, gen, label }) => (
    <div className="pokemon">
        {gen === 'sun-moon' ? (
            <img
                src={`https://www.pkparaiso.com/imagenes/sol-luna/sprites/animados/${name}.gif`}
                alt={name}
            />
        ) : (
            <img
                src={`http://www.pokestadium.com/sprites/${gen}/${name}.${(gen === 'xy') ? 'gif' : 'png'}`}
                alt={name}
            />
        )}
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
