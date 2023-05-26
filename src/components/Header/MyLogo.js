import React from 'react';

const MyLogo = ({ size, ...props }) => (
  <img src="/images/BL.png" alt="My Logo" width={75} height={75} {...props} />
);

export { MyLogo };
