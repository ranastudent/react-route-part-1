import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
      const {id, name, price, features} = option
      return (
            <div className="bg-blue-300 rounded-md p-4 flex flex-col text-white ">
                  <h1 className="text-center my-8"> 
                        <span className="text-7xl font-extrabold">{price}</span>
                        <span className="text-2xl">/Month</span>
                  </h1>
                  <h4 className="text-3xl text-center ">{name}</h4>
                  <div className="pl-5 flex-grow">
                  {
                        features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                  }
                  </div>
                  <button className="mt-12 bg-green-400 w-full py-4 font-bold rounded-xl hover:bg-green-900">Buy Now</button>
            </div>
      );
};
Option.propTypes = {
      option : PropTypes.object
}
export default PriceOption;