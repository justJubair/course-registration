import PropTypes from "prop-types";
import {FiDollarSign } from "react-icons/fi";
import { GoBook } from "react-icons/go";
const Card = ({ course }) => {
    const {img, course_name, credit_time, details, price} = course
    console.log(course)
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-96">
        <figure>
          <img
            src={img}
            alt={course_name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course_name}</h2>
          <p>{details}</p>
          <div>
            <div>
            <FiDollarSign/>
                <p>Price: {price}</p>
            </div>
            <div>
                <GoBook/>
                <p>Credit: {credit_time}hr</p>
            </div>
          </div>
          <div className="card-actions">
            <button className="btn btn-outline btn-info w-full text-white">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
