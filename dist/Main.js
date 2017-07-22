Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Pokemon = function Pokemon(_ref) {
    var name = _ref.name,
        gen = _ref.gen,
        label = _ref.label;
    return _react2['default'].createElement(
        'div',
        { className: 'pokemon' },
        gen === 'sun-moon' ? _react2['default'].createElement('img', {
            src: 'https://www.pkparaiso.com/imagenes/sol-luna/sprites/animados/' + String(name) + '.gif',
            alt: name
        }) : _react2['default'].createElement('img', {
            src: 'http://www.pokestadium.com/sprites/' + String(gen) + '/' + String(name) + '.' + (gen === 'xy' ? 'gif' : 'png'),
            alt: name
        }),
        label && _react2['default'].createElement(
            'p',
            null,
            name
        )
    );
};

Pokemon.propTypes = {
    name: _propTypes2['default'].string.isRequired,
    gen: _propTypes2['default'].string,
    label: _propTypes2['default'].bool
};

Pokemon.defaultProps = {
    gen: 'xy'
};

exports['default'] = Pokemon;