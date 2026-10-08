import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../HomePage';

const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('HomePage', () => {
    test('renders without crashing', () => {
        renderWithRouter(<HomePage />);
    });

    test('displays main content', () => {
        renderWithRouter(<HomePage />);

        expect(
            screen.getByText('Welcome to ComponentCorner')
        ).toBeInTheDocument();

        expect(
            screen.getByText('About ComponentCorner')
        ).toBeInTheDocument();

        expect(
            screen.getByText('Shop Now')
        ).toBeInTheDocument();
    });
});