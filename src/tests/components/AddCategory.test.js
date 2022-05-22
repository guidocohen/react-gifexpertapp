import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en<AddCategory/>', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    // Podria no inicializarse acá, ya que se hace en beforeEach pero,
    // es para tener la ayuda de sus propiedades al usar wrapper.

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('NO debe postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).not.toHaveBeenCalled();
    });

});