import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Task4Content from '@/app/components/taskscomponents/Task4Content';
import { generateToken } from '@/app/utils/auth';

describe('Authentication', () => {
    beforeEach(() => {
        localStorage.clear();
    });


    it('should generate token', () => {
        const user = { id: 1, username: 'username', password: 'password', name: 'Anish Aryal' };
        const token = generateToken(user);
        expect(token).not.toBeNull();
    });

    it('should set the token to local storage', () => {
        const user = { id: 1, username: 'username', password: 'password', name: 'Anish Aryal' };
        const token = generateToken(user);
        localStorage.setItem("token", token);
        expect(localStorage.getItem('token')).toEqual(token);
    })

  });

  jest.mock('next/navigation', () => ({
    useRouter() {
      return {
        push: jest.fn(),
      };
    },
  }));

  describe('Login Page', () => {
    beforeEach(() => {
        localStorage.clear();
    });
    it('submits the form with user credentials', async () => {
        const mockResponse = {username: 'username', password: 'password'}; ;
        fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

        render(<Task4Content />);

        const loginButton = screen.getByText("LOGIN");
        fireEvent.click(loginButton);

        await waitFor(() => {
          expect(fetchMock).toHaveBeenCalledWith('/api/login', expect.any(Object));
        });


      });
  });