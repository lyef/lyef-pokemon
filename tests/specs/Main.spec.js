import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Pokemon from '../../src/Main';

describe('Pokemon', () => {

    it('should have props for name', () => {
        const wrapper = shallow(<Pokemon name="pikachu" />);
        expect(wrapper.props().name).to.be.defined;
    });

    it('should have an image element', () => {
        const wrapper = shallow(<Pokemon name="pikachu" />);
        expect(wrapper.find('img')).to.have.length(1);
    });

    it('should have an p element if label passed', () => {
        const wrapper = shallow(<Pokemon name="pikachu" label />);
        expect(wrapper.find('img')).to.have.length(1);
    });

    it('should have an image element', () => {
        const wrapper = shallow(<Pokemon name="pikachu" />);
        expect(wrapper.find('img')).to.have.length(1);
    });

    it('should get image from xy gen if gen not passed', () => {
        const wrapper = shallow(<Pokemon name="pikachu" />);
        expect(wrapper.find('img').props().src.includes('/xy/')).to.equal(true);
    });

    it('should get gif image when xy gen', () => {
        const wrapper = shallow(<Pokemon name="pikachu" />);
        expect(wrapper.find('img').props().src.includes('.gif')).to.equal(true);
    });

    it('should get gif image when sun-moon gen', () => {
        const wrapper = shallow(<Pokemon name="rowlet" gen="sun-moon" />);
        expect(wrapper.find('img').props().src.includes('.gif')).to.equal(true);
    });

    it('should get png image when gen is different than xy or sun-moon', () => {
        const wrapper = shallow(<Pokemon name="pikachu" gen="black-white" />);
        expect(wrapper.find('img').props().src.includes('.png')).to.equal(true);
    });

    it('should get image from sun-moon gen if gen passed', () => {
        const wrapper = shallow(<Pokemon name="litten" gen="sun-moon" />);
        expect(wrapper.find('img').props().src.includes('/sol-luna/')).to.equal(true);
    });

    it('should get image from black-white gen if gen passed', () => {
        const wrapper = shallow(<Pokemon name="pikachu" gen="black-white" />);
        expect(wrapper.find('img').props().src.includes('/black-white/')).to.equal(true);
    });

    it('should get image from diamond-pearl gen if gen passed', () => {
        const wrapper = shallow(<Pokemon name="pikachu" gen="diamond-pearl" />);
        expect(wrapper.find('img').props().src.includes('/diamond-pearl/')).to.equal(true);
    });

    it('should get image from emerald gen if gen passed', () => {
        const wrapper = shallow(<Pokemon name="pikachu" gen="emerald" />);
        expect(wrapper.find('img').props().src.includes('/emerald/')).to.equal(true);
    });

    it('should get image from silver gen if gen passed', () => {
        const wrapper = shallow(<Pokemon name="pikachu" gen="silver" />);
        expect(wrapper.find('img').props().src.includes('/silver/')).to.equal(true);
    });

    it('should get image from green gen if gen passed', () => {
        const wrapper = shallow(<Pokemon name="pikachu" gen="green" />);
        expect(wrapper.find('img').props().src.includes('/green/')).to.equal(true);
    });
});
