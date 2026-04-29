import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Home from '../pages/Home';

describe('Home Page', () => {
  it('renders welcome heading', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText(/Welcome to ShopEasy/i)).toBeInTheDocument();
  });

  it('renders hero subtitle', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText(/Discover amazing products/i)).toBeInTheDocument();
  });

  it('renders Start Shopping button', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText(/Start Shopping/i)).toBeInTheDocument();
  });

  it('renders all four feature cards', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText(/Free Shipping/i)).toBeInTheDocument();
    expect(screen.getByText(/Secure Payment/i)).toBeInTheDocument();
    expect(screen.getByText(/Easy Returns/i)).toBeInTheDocument();
    expect(screen.getByText(/Quality Products/i)).toBeInTheDocument();
  });

  it('renders about section', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText(/Why Choose ShopEasy/i)).toBeInTheDocument();
  });
});