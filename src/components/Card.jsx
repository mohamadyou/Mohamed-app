import PropTypes from 'prop-types';

const Card = ({ skillName, icon, description }) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition hover:scale-105">
      <div className="flex items-center justify-center mb-4">
        <span className="w-12 h-12">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{skillName}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
};

Card.propTypes = {
  skillName: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
