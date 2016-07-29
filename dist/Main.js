Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Pokemon = function Pokemon(_ref) {
    var name = _ref.name;
    var gen = _ref.gen;
    var label = _ref.label;
    return _react2['default'].createElement(
        'div',
        { className: 'pokemon' },
        _react2['default'].createElement('img', {
            src: 'http://www.pokestadium.com/sprites/' + String(gen) + '/' + String(name) + (gen === 'xy' ? '.gif' : '.png'),
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
    name: _react.PropTypes.string.isRequired,
    gen: _react.PropTypes.string,
    label: _react.PropTypes.bool
};

Pokemon.defaultProps = {
    gen: 'xy'
};

exports['default'] = Pokemon;