import Logo from '../assets/img.jpg';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section id="hero" className="hero bg-gray-900 pt-[6rem] text-white h-screen flex flex-col justify-center items-center text-center pt-24">
      <div className="max-w-5xl justify-center  mx-auto flex flex-col md:flex-row items-center gap-6 px-6">
        
     
        <div className="md:w-1/2 text-left flex flex-col gap-4 ">
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <Typewriter
          options={{
            strings: ["Hi I'm Mohamed", "Full-Stack Developer","Creative Thinker"],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
          />
          <p>
            I&apos;m a self-taught web and mobile app developer, passionate about 
            designing and building high-performance applications. My focus is on 
            backend development, creating efficient and reusable code.
          </p>
          <a
            href="#contact"
            className="bg-gray-900 w-fit text-white px-4 py-2 border border-gray-600 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
          >
            Get in Touch
          </a>
        </div>

        <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 border-4 border-gray-700  rounded-full overflow-hidden shadow-[0_0_30px_8px_rgba(0,0,255,0.5)]">
          <img
            src={Logo}
            alt="Profile"
            className="w-full h-full object-cover object-top"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;

