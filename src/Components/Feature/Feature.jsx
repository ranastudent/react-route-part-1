import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa6";
const Feature = ({feature}) => {
      return (
            <div>
                  <p className="flex items-center"><FaCheck className="text-green-800 mr-4"></FaCheck> {feature}</p>
            </div>
      );
};
Feature.propTypes = {
      feature : PropTypes.string,
}
export default Feature;