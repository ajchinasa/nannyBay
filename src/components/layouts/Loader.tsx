const Loader = () => {
  const letters = "NannyBay".split("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <h1
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontStyle: "italic",
          fontSize: "2rem",
          letterSpacing: "0.01em",
        }}
      >
        {letters.map((letter, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              animation: "shimmer 2s ease-in-out infinite",
              animationDelay: `${index * 0.1}s`,
              opacity: 0.15,
            }}
          >
            {letter}
          </span>
        ))}
      </h1>

      <style>{`
        @keyframes shimmer {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
