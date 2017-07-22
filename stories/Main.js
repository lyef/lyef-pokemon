import React from 'react';
import Pokemon from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('Pokemon', module)
    .add('pikachu without gen passed', () => (
        <Pokemon name="pikachu" />
    ))
    .add('pikachu xy with label', () => (
        <Pokemon name="pikachu" gen="xy" label />
    ))
    .add('pikachu black-white', () => (
        <Pokemon name="pikachu" gen="black-white" />
    ))
    .add('pikachu diamond-pearl', () => (
        <Pokemon name="pikachu" gen="diamond-pearl" />
    ))
    .add('pikachu emerald', () => (
        <Pokemon name="pikachu" gen="emerald" />
    ))
    .add('pikachu silver', () => (
        <Pokemon name="pikachu" gen="silver" />
    ))
    .add('pikachu green', () => (
        <Pokemon name="pikachu" gen="green" />
    ))
    .add('with all pikachu gen', () => (
        <div>
            <Pokemon name="pikachu" />
            <Pokemon name="pikachu-kantocap" gen="sun-moon" />
            <Pokemon name="pikachu-hoenncap" gen="sun-moon" />
            <Pokemon name="pikachu-sinnohcap" gen="sun-moon" />
            <Pokemon name="pikachu-unovacap" gen="sun-moon" />
            <Pokemon name="pikachu-kaloscap" gen="sun-moon" />
            <Pokemon name="pikachu-alolacap" gen="sun-moon" />
            <Pokemon name="pikachu" gen="black-white" />
            <Pokemon name="pikachu" gen="diamond-pearl" />
            <Pokemon name="pikachu" gen="emerald" />
            <Pokemon name="pikachu" gen="silver" />
            <Pokemon name="pikachu" gen="green" />
        </div>
    ))
    .add('with all charizard gen', () => (
        <div>
            <Pokemon name="charizard" />
            <Pokemon name="charizard-megax" />
            <Pokemon name="charizard-megay" />
            <Pokemon name="charizard" gen="black-white" />
            <Pokemon name="charizard" gen="diamond-pearl" />
            <Pokemon name="charizard" gen="emerald" />
            <Pokemon name="charizard" gen="silver" />
            <Pokemon name="charizard" gen="green" />
        </div>
    ))
    .add('with different pokemons from xy', () => (
        <div>
            <Pokemon name="pikachu" />
            <Pokemon name="charmander" />
            <Pokemon name="bulbasaur" />
            <Pokemon name="squirtle" />
        </div>
    ))
    .add('with all starters', () => (
        <div>
            <Pokemon name="bulbasaur" />
            <Pokemon name="charmander" />
            <Pokemon name="squirtle" />
            <Pokemon name="chikorita" />
            <Pokemon name="cyndaquil" />
            <Pokemon name="totodile" />
            <Pokemon name="treecko" />
            <Pokemon name="torchic" />
            <Pokemon name="mudkip" />
            <Pokemon name="turtwig" />
            <Pokemon name="chimchar" />
            <Pokemon name="piplup" />
            <Pokemon name="snivy" />
            <Pokemon name="tepig" />
            <Pokemon name="oshawott" />
            <Pokemon name="chespin" />
            <Pokemon name="fennekin" />
            <Pokemon name="froakie" />
            <Pokemon name="rowlet" gen="sun-moon" />
            <Pokemon name="litten" gen="sun-moon" />
            <Pokemon name="popplio" gen="sun-moon" />
        </div>
    ))
    .add('pikachu family', () => (
        <div>
            <Pokemon name="pichu" />
            <Pokemon name="pikachu" />
            <Pokemon name="raichu" />
            <Pokemon name="raichu-alola" gen="sun-moon" />
            <Pokemon name="plusle" />
            <Pokemon name="minun" />
            <Pokemon name="pachirisu" />
            <Pokemon name="emolga" />
            <Pokemon name="dedenne" />
            <Pokemon name="togedemaru" gen="sun-moon" />
        </div>
    ))
    .add('mega evolutions', () => (
        <div>
            <Pokemon name="venusaur-mega" />
            <Pokemon name="charizard-megax" />
            <Pokemon name="charizard-megay" />
            <Pokemon name="blastoise-mega" />
            <Pokemon name="gengar-mega" />
            <Pokemon name="kangaskhan-mega" />
            <Pokemon name="mewtwo-megax" />
            <Pokemon name="mewtwo-megay" />
            <Pokemon name="latias-mega" />
        </div>
    ))
    .add('alola forms', () => (
        <div>
            <Pokemon name="raticate-alola" gen="sun-moon" />
            <Pokemon name="raichu-alola" gen="sun-moon" />
            <Pokemon name="sandslash-alola" gen="sun-moon" />
            <Pokemon name="ninetales-alola" gen="sun-moon" />
            <Pokemon name="dugtrio-alola" gen="sun-moon" />
            <Pokemon name="meowth-alola" gen="sun-moon" />
            <Pokemon name="muk-alola" gen="sun-moon" />
            <Pokemon name="marowak-alola" gen="sun-moon" />
            <Pokemon name="exeggutor-alola" gen="sun-moon" />
        </div>
    ))
