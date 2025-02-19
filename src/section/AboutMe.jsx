const AboutMe = () => {
  return (
    <div id="about" className="w-full flex pt-[6rem] flex-col items-center justify-center min-h-screen bg-gray-900 px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-6">About Me</h2>

      <div className="text-white max-w-3xl bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg shadow-blue-500">
        <p className="text-base sm:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab 
          cumque asperiores alias nobis dicta nulla. Quasi, veritatis consequatur,
          unde eligendi error ex quidem placeat repellat qui repellendus rem?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab 
          cumque asperiores alias nobis dicta nulla. Quasi, veritatis consequatur,
          unde eligendi error ex quidem placeat repellat qui repellendus rem?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab 
          cumque asperiores alias nobis dicta nulla. Quasi, veritatis consequatur,
          unde eligendi error ex quidem placeat repellat qui repellendus rem?
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
