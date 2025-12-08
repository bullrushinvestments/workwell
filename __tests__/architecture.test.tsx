import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockUseExternalData = (data?: any) => {
    return jest.fn().mockReturnValue({
      data,
      loading: false,
      error: null,
      refetch: jest.fn(),
    });
  };

  beforeEach(() => {
    (useExternalData as jest.Mock).mockClear();
  });

  test('renders Design Architecture Component without errors', () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/design architecture/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: null,
      loading: true,
      error: null,
      refetch: jest.fn(),
    });
    render(<DesignArchitectureComponent />);
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when fetching data fails', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: null,
      loading: false,
      error: new Error('Fetching data failed'),
      refetch: jest.fn(),
    });
    render(<DesignArchitectureComponent />);
    expect(await screen.findByText(/fetching data failed/i)).toBeInTheDocument();
  });

  test('handles user interaction with buttons', () => {
    const mockData = { /* some sample data */ };
    (useExternalData as jest.Mock).mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
      refetch: jest.fn(),
    });
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByText(/click me/i));
    expect(useExternalData).toHaveBeenCalled();
  });

  test('tests accessibility features', () => {
    const mockData = { /* some sample data */ };
    (useExternalData as jest.Mock).mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
      refetch: jest.fn(),
    });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/design architecture/i)).toHaveAttribute('aria-label', 'Design Architecture');
  });

  test('tests edge cases with empty data', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
      error: null,
      refetch: jest.fn(),
    });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });

  test('tests edge cases with no data', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: undefined,
      loading: false,
      error: null,
      refetch: jest.fn(),
    });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });

  test('tests edge cases with error', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: undefined,
      loading: false,
      error: new Error('Error occurred'),
      refetch: jest.fn(),
    });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/error occurred/i)).toBeInTheDocument();
  });

  test('tests refetch functionality', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: undefined,
      loading: false,
      error: new Error('Error occurred'),
      refetch: jest.fn(() => Promise.resolve({ data: { /* some sample data */ }, loading: false, error: null })),
    });
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByText(/refetch/i));
    await waitFor(() => expect(useExternalData).toHaveBeenCalledWith());
  });

});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockUseExternalData = (data?: any) => {
    return jest.fn().mockReturnValue({
      data,
      loading: false,
      error: null,
      refetch: jest.fn(),
    });
  };

  beforeEach(() => {
    (useExternalData as jest.Mock).mockClear();
  });

  test('renders Design Architecture Component without errors', () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/design architecture/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: null,
      loading: true,
      error: null,
      refetch: jest.fn(),
    });
    render(<DesignArchitectureComponent />);
    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when fetching data fails', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: null,
      loading: false,
      error: new Error('Fetching data failed'),
      refetch: jest.fn(),
    });
    render(<DesignArchitectureComponent />);
    expect(await screen.findByText(/fetching data failed/i)).toBeInTheDocument();
  });

  test('handles user interaction with buttons', () => {
    const mockData = { /* some sample data */ };
    (useExternalData as jest.Mock).mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
      refetch: jest.fn(),
    });
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByText(/click me/i));
    expect(useExternalData).toHaveBeenCalled();
  });

  test('tests accessibility features', () => {
    const mockData = { /* some sample data */ };
    (useExternalData as jest.Mock).mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
      refetch: jest.fn(),
    });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/design architecture/i)).toHaveAttribute('aria-label', 'Design Architecture');
  });

  test('tests edge cases with empty data', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
      error: null,
      refetch: jest.fn(),
    });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });

  test('tests edge cases with no data', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: undefined,
      loading: false,
      error: null,
      refetch: jest.fn(),
    });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });

  test('tests edge cases with error', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: undefined,
      loading: false,
      error: new Error('Error occurred'),
      refetch: jest.fn(),
    });
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/error occurred/i)).toBeInTheDocument();
  });

  test('tests refetch functionality', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: undefined,
      loading: false,
      error: new Error('Error occurred'),
      refetch: jest.fn(() => Promise.resolve({ data: { /* some sample data */ }, loading: false, error: null })),
    });
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByText(/refetch/i));
    await waitFor(() => expect(useExternalData).toHaveBeenCalledWith());
  });

});