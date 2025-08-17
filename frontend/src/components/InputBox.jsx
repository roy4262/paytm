import PropTypes from "prop-types";

const InputBox = ({ label, placeholder, onChange, value, type = "text" }) => {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <div>
        <input
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          type={type}
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
    </div>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
};

export default InputBox;
