import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
};

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
});

describe('App localStorage Integration', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorageMock.getItem.mockReturnValue(null);
    });

test('renders without crashing', () => {
    render(<App />);

    expect(
  screen.getByRole('heading', { name: 'Welcome to ComponentCorner' })
).toBeInTheDocument();
});


test('loads cart from localStorage on startup', () => {
    const savedCart = [
      {
        id: 1,
        name: 'Wireless Headphones',
        price: 79.99,
      },
    ];

    localStorageMock.getItem.mockReturnValue(
      JSON.stringify(savedCart)
    );

    render(<App />);

     expect(localStorageMock.getItem).toHaveBeenCalledWith(
      'componentCorner-Cart'
    );
  });

  test('saves cart to localStorage', async () => {
    localStorageMock.getItem.mockReturnValue(null);

    render(<App />);

    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'componentCorner-Cart',
        '[]'
      );
    });
  });
});