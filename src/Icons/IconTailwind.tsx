import React from 'react';
import tailwindLogo from './../assets/icon_tailwind.svg';

function SvgIconTailwind({ tailwindProps, alt }) {
  return <img src={tailwindLogo} alt={alt} className={tailwindProps} />;
}

export default SvgIconTailwind;
