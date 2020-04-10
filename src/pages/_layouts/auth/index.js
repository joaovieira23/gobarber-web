import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function AuthLayouts({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

AuthLayouts.propTypes = {
  children: PropTypes.element.isRequired,
};
