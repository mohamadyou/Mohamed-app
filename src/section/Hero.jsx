import Logo from '../assets/img.jpg';

const Hero = () => {
  return (
    <section id="hero" className="hero bg-gray-900  text-white h-screen flex flex-col justify-center text-center pt-24">


      <div className="max-w-[80%] mx-auto items-center gap-3  max-h-max flex">
        
        <div className="text-xl text-left flex flex-col mb-6 px-10 gap-3">
        <h1 className="text-4xl font-bold mb-4  text-left">
        Welcome to My Portfolio</h1>
          <p >
            I&apos;m a self-taught web developer and Mobile App Developer with experience
            in designing new features from ideation to production,
            implementation of wireframes and design flows into high-performance
            software applications. I take into consideration the user experience
            while writing reusable and efficient code. I passionately combine
            good design, technology, and innovation
            in all my projects, which I like to accompany from the first idea to release.
            Currently, I&apos;m focused on backend development.

          </p>
          <a
            href="#contact"
            className="bg-blue-500 text-center w-fit text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
          >
            Get in Touch
          </a>

        </div>


        <span className="w-[300vh] h-[300px] -mt-20 border rounded-full" >
          <img
            src={Logo}
            alt="img"
            className="w-full h-full shadow-[0_0_30px_8px_rgba(0,0,255,0.5)]
               transition duration-300 ease-in-out object-top object-cover rounded-full"
          />
        </span>


      </div>
    </section>
  );
};

export default Hero;
