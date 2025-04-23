export const WelcomePage = () => {
  return (
    <div
      style={{
        zIndex: 20,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '400px',
      }}
    >
      <h2
        className="font-bold bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] bg-[length:200%_auto] bg-clip-text text-transparent inline-block"
        style={{ marginTop: '-2.2rem', fontSize: '1.8rem' }}
      >
        are you here to build or to design?
      </h2>
    </div>
  );
};
