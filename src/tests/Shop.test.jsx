import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CartProvider } from '../context/CartContext';
import Shop from '../pages/Shop';

// Mock fetch
global.fetch = vi.fn();

const mockProducts = [
  {
    id: 1,
    title: 'Test Product 1',
    price: 29.99,
    image: 'https://example.com/image1.jpg',
    category: 'electronics',
    rating: { rate: 4.5, count: 100 },
  },
  {
    id: 2,
    title: 'Test Product 2',
    price: 49.99,
    image: 'https://example.com/image2.jpg',
    category: 'clothing',
    rating: { rate: 4.0, count: 50 },
  },
];

const mockCategories = ['electronics', 'clothing'];

describe('Shop Page', () => {
  beforeEach(() => {
    fetch.mockReset();
  });

  it('renders loading state initially', () => {
    fetch.mockImplementation(() => new Promise(() => {})); // Never resolves

    render(
      <BrowserRouter>
        <CartProvider>
          <Shop />
        </CartProvider>
      </BrowserRouter>
    );

    expect(screen.getByText(/Loading amazing products/i)).toBeInTheDocument();
  });

  it('renders products after loading', async () => {
    fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockProducts,
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockCategories,
      });

    render(
      <BrowserRouter>
        <CartProvider>
          <Shop />
        </CartProvider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Test Product 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Test Product 2/i)).toBeInTheDocument();
    });
  });

  it('renders error state on fetch failure', async () => {
    fetch.mockRejectedValueOnce(new Error('Failed to fetch'));

    render(
      <BrowserRouter>
        <CartProvider>
          <Shop />
        </CartProvider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    });
  });

  it('displays shop header', async () => {
    fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockProducts,
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockCategories,
      });

    render(
      <BrowserRouter>
        <CartProvider>
          <Shop />
        </CartProvider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Our Products/i)).toBeInTheDocument();
    });
  });
});