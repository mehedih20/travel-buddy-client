const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1516571802202-335011e323a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-5xl">
          <h1 className="mb-5 text-5xl max-w-2xl mx-auto font-bold">
            Travel Smart, Travel Together: Meet Your New Best Friend!
          </h1>
          <p className="mb-5 text-lg">
            Welcome to Travel Buddy, where travel enthusiasts find the perfect
            companions for their adventures. Whether it’s a weekend getaway or a
            globe-trotting expedition, connect with like-minded travelers and
            make every trip unforgettable.
            <br /> <br />
            Join us today to start your journey with new friends. Travel smart,
            travel together, and experience the world in a whole new way!
          </p>
          <button className="btn mt-5 bg-blue-500 border-none text-white hover:text-black animate-pulsate">
            Share Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
