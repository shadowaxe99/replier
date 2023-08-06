import { css } from 'styled-components';

// Breakpoints for responsive design
const size = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
};

// Media queries for responsive design
export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`,
};

// Function to apply responsive styles
export const responsiveDesign = css`
  @media ${device.mobile} {
    /* Styles for mobile devices */
  }

  @media ${device.tablet} {
    /* Styles for tablet devices */
  }

  @media ${device.desktop} {
    /* Styles for desktop devices */
  }
`;