const AboutMe = () => {
  return (
    <div id="about" className="w-full flex pt-[6rem] flex-col items-center justify-center min-h-screen bg-gray-900 px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-6">About Me</h2>

      <div className="text-white max-w-3xl bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg shadow-blue-500">
        <p className="text-base sm:text-lg leading-relaxed">
          I’m a Fullstack Developer skilled in frontend technologies like HTML5,
          CSS3, JavaScript, React.js, and TailwindCSS to create responsive, user-friendly
          interfaces. On the backend, I specialize in Node.js, Express, and MongoDB to
          build scalable, efficient applications. I focus on writing clean, maintainable
          code that ensures performance and scalability. Passionate about building dynamic
          web apps, I continuously learn new technologies to deliver innovative solutions.
          My goal is to create seamless experiences across the entire development stack.
        </p>
      </div>
      <div className="flex justify-center items-center mt-10">

        <a href="/CV.pdf" download className="bg-gray-900 rounded-lg p-2 border hover:bg-gray-700 text-white mb-32 border-gray-200">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
