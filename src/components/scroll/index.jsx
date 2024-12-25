const AnimatedScrollIcon = () => {
  return (
    <svg
      width={30}
      height={46}
      viewBox="0 0 247 390"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 1.5,
      }}
    >
      <style>{`
        @keyframes scroll {
          0% { transform: translateY(0); }
          30% { transform: translateY(100px); }
        }
        #wheel {
          animation: scroll ease 2s infinite;
        }
      `}</style>
      <path
        id="wheel"
        d="M123.359,79.775l0,72.843"
        style={{
          fill: 'none',
          stroke: '#626262',
          strokeWidth: '20px',
        }}
      />
      <path
        id="mouse"
        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
        style={{
          fill: 'none',
          stroke: '#9C9C9C',
          strokeWidth: '15px',
        }}
      />
    </svg>
  );
};

export default AnimatedScrollIcon;