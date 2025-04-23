import { RippleButton } from '../buttons/RippleButton';

export const WelcomePage = () => {
  return (
    <>
      <div
        style={{
          zIndex: 20,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '400px',
        }}
      >
        <h1
          className="font-bold animate-welcome-page-text bg-clip-text text-transparent inline-block"
          style={{ marginTop: '-2.2rem', fontSize: '2.2rem' }}
        >
          are you a builder or a designer?
        </h1>

        <div
          style={{
            marginTop: '2px',
            display: 'flex',
            gap: '20px',
          }}
        >
          <RippleButton
            rippleColor="#ADD8E6"
            duration={600}
            style={{
              width: '125px',
              height: '40px',
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: '20px',
              cursor: 'pointer',
            }}
          >
            Sign Up
          </RippleButton>
          <RippleButton
            rippleColor="#ADD8E6"
            style={{
              width: '125px',
              height: '40px',
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: '20px',
              cursor: 'pointer',
            }}
          >
            Sign In
          </RippleButton>
        </div>
      </div>
    </>
  );
};
