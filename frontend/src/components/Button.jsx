import PropTypes from "prop-types";

const Button = ({ label, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-gray-800 hover:bg-gray-900 cursor-pointer"
      } focus:outline-none focus:ring-4 focus:gray-300`}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default Button;
