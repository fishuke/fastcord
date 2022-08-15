import React from 'react';
import laravelLogo from './../assets/icon_laravel.svg';

function SvgIconLaravel({ tailwindProps, alt }) {
  return <img src={laravelLogo} alt={alt} className={tailwindProps} />;
}

export default SvgIconLaravel;
