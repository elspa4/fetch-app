import React from 'react'
import axios from 'axios'
import { render, screen } from '@testing-library/react'
import App from './App'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

const mockedResponse = [
  { id: 755, listId: 2, name: 'test name' },
  { id: 203, listId: 2, name: 'Test 1' },
  { id: 684, listId: 1, name: 'Item 684' },
  { id: 276, listId: 1, name: 'Item 276' },
]

test('Integration test for the challenge app', async () => {
  mockedAxios.get.mockImplementation(() =>
    Promise.resolve({ data: mockedResponse }),
  )

  // await load
  const { findByText } = render(<App />)
  await findByText('List ID')

  const title = screen.getByText(/Elena's Coding Challenge App/i)
  expect(title).toBeInTheDocument()

  // Testing UI is tricky, but I prefer not to use snapshots, and use individual
  // asserts instead.
  expect(screen.getByTestId('table-row-2-755')).toBeInTheDocument()
  expect(screen.getByTestId('table-row-2-203')).toBeInTheDocument()
  expect(screen.getByTestId('table-row-1-684')).toBeInTheDocument()
  expect(screen.getByTestId('table-row-1-276')).toBeInTheDocument()
})

test('Error test for challenge app', async () => {
  const mockError = jest.fn()
  console.error = mockError

  mockedAxios.get.mockImplementation(() => Promise.reject({}))

  // await load
  const { findByTestId } = render(<App />)
  await findByTestId('error')

  const errorMsg = screen.getByText(/Oh no, something went wrong!/i)
  expect(errorMsg).toBeInTheDocument()
  expect(mockError).toHaveBeenCalled()
})
