import Card from "../components/Card";
import { FaHtml5, FaReact, FaJava, FaFigma, FaCss3, FaPhp, FaNodeJs, FaGitAlt, FaGithub, FaSlack, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiTrello, SiPostgresql } from "react-icons/si";

const Skills = () => {
  const frontendSkills = [
    { skillName: "HTML", icon: <FaHtml5 size={24} className="text-orange-700" />, description: "Advanced" },
    { skillName: "CSS", icon: <FaCss3 size={24} className="text-blue-700" />, description: "Advanced" },
    { skillName: "JavaScript", icon: <IoLogoJavascript size={24} className="text-yellow-500" />, description: "Intermediate" },
    { skillName: "React", icon: <FaReact size={24} className="text-blue-400" />, description: "Intermediate" },
    { skillName: "TailwindCSS", icon: <RiTailwindCssFill size={24} className="text-teal-500" />, description: "Intermediate" },
    { skillName: "Python", icon: <FaPython size={24} className="text-blue-700" />, description: "Intermediate" },
  ];

  const backendSkills = [
    { skillName: "Node.js", icon: <FaNodeJs size={24} className="text-green-600" />, description: "Advanced" },
    { skillName: "Express", icon: <SiExpress size={24} className="text-gray-500" />, description: "Advanced" },
    { skillName: "MongoDB", icon: <SiMongodb size={24} className="text-green-500" />, description: "Advanced" },
    { skillName: "MySQL", icon: <SiPostgresql size={24} className="text-blue-700" />, description: "Advanced" },
    { skillName: "PHP", icon: <FaPhp size={24} className="text-blue-700" />, description: "Intermediate" },
    { skillName: "Java", icon: <FaJava size={24} className="text-red-700" />, description: "Intermediate" },
  ];

  const toolsSkills = [
    { skillName: "Figma", icon: <FaFigma size={24} className="text-yellow-500" />, description: "Intermediate" },
    { skillName: "Git", icon: <FaGitAlt size={24} className="text-red-500" />, description: "Advanced" },
    { skillName: "GitHub", icon: <FaGithub size={24} className="text-gray-700" />, description: "Advanced" },
    { skillName: "Trello", icon: <SiTrello size={24} className="text-blue-400" />, description: "Advanced" },
    { skillName: "Slack", icon: <FaSlack size={24} className="text-purple-600" />, description: "Advanced" },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto p-6 text-center pt-[6rem]">
      <h2 className="text-4xl font-bold mb-8">My Skills</h2>

      <div className="mb-12">
        <h3 className="text-3xl font-bold text-gray-700 mb-6">Frontend</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {frontendSkills.map((skill, index) => (
            <Card key={index} skillName={skill.skillName} icon={skill.icon} description={skill.description} />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-3xl font-bold text-gray-700 mb-6">Backend</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {backendSkills.map((skill, index) => (
            <Card key={index} skillName={skill.skillName} icon={skill.icon} description={skill.description} />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-3xl font-bold text-gray-700 mb-6">Tools</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolsSkills.map((skill, index) => (
            <Card key={index} skillName={skill.skillName} icon={skill.icon} description={skill.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;