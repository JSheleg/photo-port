import React from "react";
//retrieve functions from React Testing Library
import { render, cleanup } from '@testing-library/react';
//import extend-expect library from the jest-dom package
import '@testing-library/jest-dom/extend-expect';

//import About component
import About from "..";


//call cleanup function after each global function to ensure no leftover memory
afterEach(cleanup);

//declare the component we're testing
describe('About component', () => {
    //First test-baseline
    it('renders', () => {
        render(<About />);
    });

    //Second test- test case(snapshot) is a serialized version  of the DOM node structure 
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})