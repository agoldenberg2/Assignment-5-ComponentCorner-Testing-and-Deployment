import {render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '../ProductCard';

const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ProductCard', () => {
    const testProduct = {
        id: 1,
        name: 'Wireless Headphones',
        price: 99.99,
        image: 'https://example.com/headphones.jpg',
        description: 'High-quality wireless headphones with noise cancellation.',
    };

    test('renders without crashing', () => {
        renderWithRouter(
            <ProductCard
                product={testProduct}
                name={testProduct.name}
                price={testProduct.price}
                image={testProduct.image}
                description={testProduct.description}
                onAddToCart={() => {}}
            />
        );
    });

    test('displays product information', () => {
        renderWithRouter(
            <ProductCard
                product={testProduct}
                name={testProduct.name}
                price={testProduct.price}
                image={testProduct.image}
                description={testProduct.description}
                onAddToCart={() => {}}
            />
        );

        expect(screen.getByText(testProduct.name)).toBeInTheDocument();
        expect(screen.getByText('$99.99')).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /add to cart/i })
        ).toBeInTheDocument();
    });
 test('calls onAddToCart when Add to Cart is clicked', () => {
        const mockAddToCart = vi.fn();

        renderWithRouter(
            <ProductCard
                product={testProduct}
                name={testProduct.name}
                price={testProduct.price}
                image={testProduct.image}
                description={testProduct.description}
                onAddToCart={mockAddToCart}
            />
        );
        fireEvent.click(
            screen.getByRole('button' , { name: /add to cart/i})
        );

        expect(mockAddToCart).toHaveBeenCalledWith(testProduct);
 });
});