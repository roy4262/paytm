
import PropTypes from "prop-types";
export function Heading({title}){
    return(
        <div className="font-bold text-4xl pt-6">{title}</div>
    )
}
Heading.propTypes = {
  title: PropTypes.string.isRequired,
};


