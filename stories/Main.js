import React from 'react';
import Pokemon from '../src/Main'; // This is our component
import { storiesOf } from '@kadira/storybook';

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
            <Pokemon name="charizard" gen="black-white" />
            <Pokemon name="charizard" gen="diamond-pearl" />
            <Pokemon name="charizard" gen="emerald" />
            <Pokemon name="charizard" gen="silver" />
            <Pokemon name="charizard" gen="green" />
        </div>
    ))

