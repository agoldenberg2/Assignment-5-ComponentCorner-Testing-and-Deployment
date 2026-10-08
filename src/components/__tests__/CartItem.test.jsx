import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from '../CartItem';

describe('CartItem', () => {
  const testItem = {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
  };

  test('displays cart item information', () => {
    render(
      <CartItem
        item={testItem}
        onRemove={() => {}}
      />
    );

    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();
    expect(screen.getByText('$79.99')).toBeInTheDocument();
  });

  test('calls onRemove when Remove is clicked', () => {
    const mockRemove = vi.fn();

    render(
      <CartItem
        item={testItem}
        onRemove={mockRemove}
      />
    );

    fireEvent.click(
      screen.getByRole('button', { name: /remove/i })
    );

    expect(mockRemove).toHaveBeenCalledWith(1);
  });
});