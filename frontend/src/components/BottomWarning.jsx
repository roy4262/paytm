import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BottomWarning = ({ label, buttonText, to }) => {
  return (
    <div className="py-2  text-sm flex justify-center">
      <div className="">{label}</div>

      <Link className="pointer underline pl-1 cursor-pointer" to={to}>
        {buttonText}
      </Link>
    </div>
  );
};

BottomWarning.propTypes = {
  label: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default BottomWarning;
