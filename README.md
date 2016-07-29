# Lyef Pokemon
[![Build Status](https://travis-ci.org/lyef/lyef-pokemon.svg?branch=master)](https://travis-ci.org/lyef/lyef-pokemon)
![Badge size](https://badge-size.herokuapp.com/lyef/lyef-pokemon/master/dist/Main.min.js.svg)
![Badge gzip size](https://badge-size.herokuapp.com/lyef/lyef-pokemon/master/dist/Main.min.js.svg?compression=gzip)
[![NPM version](https://badge-me.herokuapp.com/api/npm/lyef-pokemon.png)](http://badges.enytc.com/for/npm/lyef-pokemon)

![Pokemons](pokemons.gif)

> A react component show any pokemon from different generations.

## Demo

[Live examples](https://lyef.github.io/lyef-pokemon)

## Installation

```sh
$ npm install --save lyef-pokemon
```

*Remember to import the styles on `css/main.css` folder to your project.*

## Basic Usage

```jsx
import Pokemon from 'lyef-pokemon';

...
render() {
    return (
        <Pokemon name="pikachu" gen="black-white" label />
    );
}
...
```

## Props

- `name` (string) - pokemon name - *required*
- `gen` (string) - generation ['xy', 'black-white', 'diamond-pearl', 'emerald', 'silver', 'green']
- `label` (bool) - show pokemon name

## Architecture

We've developed this component using the following boilerplate:
[lyef-react-component](https://github.com/lyef/lyef-react-component).

To know more about the architecture or if you want to contribute with this component:
[Contributing Documentation](https://github.com/lyef/lyef-pokemon/blob/master/CONTRIBUTING.md).

## License

[MIT License](https://github.com/lyef/lyef-pokemon/blob/master/LICENSE.md) @ [lyef](https://lyef.github.io/)
