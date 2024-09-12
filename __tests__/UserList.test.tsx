import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import UserList from '@/app/components/taskscomponents/Task2Content';


jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;



describe('UserList Component', () => {
  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ];

  beforeEach(() => {
    mockedAxios.get.mockReset(); // Reseting all the informatio stored in the mock every time new test is executed
  });

  it('renders loading state initially', () => { //checking if the loading is displayed initially / while fetching the data
    mockedAxios.get.mockImplementationOnce(() => new Promise(() => {}));
    render(<UserList />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders user list when data is fetched successfully', async () => { //check if the userlist is rendered when data is fetched
    mockedAxios.get.mockResolvedValueOnce({ data: mockUsers });
    render(<UserList />);

    await waitFor(() => {//wait for the data to be fetched and check if the expected data is visible
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });

  it('renders error message when API call fails', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('API Error'));
    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText('Failed to fetch users.')).toBeInTheDocument();
    });
  });

  it('renders correct number of user cards', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockUsers });
    render(<UserList />);

    await waitFor(() => {
      const userCards = screen.getAllByRole('img');
      expect(userCards).toHaveLength(2);
    });
  });
});