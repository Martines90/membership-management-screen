import React from 'react';
import { queryByAttribute, render } from '@testing-library/react';
import App from './App';

const getById = queryByAttribute.bind(null, 'id');

test('renders learn react link', () => {
  const dom = render(<App />);
  const linkElement = getById(dom.container, 'age-native-simple');
  expect(linkElement).toBeInTheDocument();
});
