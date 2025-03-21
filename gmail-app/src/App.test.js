// Import necessary functions from the testing library
import { render, screen } from '@testing-library/react';
import App from './App';
// Define the test for rendering the "learn react" link
test('renders learn react link', () => {
  render(<App />);
   // Find the link element containing the text
  const linkElement = screen.getByText(/learn react/i);
  // Check if the link element is present in the document
  expect(linkElement).toBeInTheDocument();
});
