function SvgIconVue(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={55} height={55} fill='none' {...props}>
      <path fill='#C4E7D7' d='M0 0h55v55H0z' />
      <path
        d='M37.36 14h6.84L27.1 43.773 10 14h13.081l4.019 6.904L31.033 14h6.327z'
        fill='#41B883'
      />
      <path
        d='M10 14l17.1 29.773L44.2 14h-6.84L27.1 31.864 16.754 14H10z'
        fill='#41B883'
      />
      <path
        d='M16.755 14L27.1 31.95 37.36 14h-6.327L27.1 20.904 23.081 14h-6.326z'
        fill='#35495E'
      />
    </svg>
  );
}

export default SvgIconVue;
