import PropTypes from "prop-types";
import { FiDollarSign } from "react-icons/fi";
import { GoBook } from "react-icons/go";
const Card = ({ course, handleSelect }) => {
  const { img, course_name, credit_time, details, price } = course;

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="p-4">
          <img src={img} alt={course_name} />
        </figure>
        <div className="card-body lg:h-60">
          <h2 className="card-title">{course_name}</h2>
          <p>{details}</p>
          {/* price and credit hour section */}
          <div className="flex items-center justify-between p-2">
            <div className="flex items-center gap-2">
              <span className="text-xl"><FiDollarSign /></span>
              <p>Price: {price}</p>
            </div>
            <div className="flex items-center gap-2">
             <span className="text-xl"> <GoBook /></span>
              <p>Credit: {credit_time}hr</p>
            </div>
          </div>
          <div className="card-actions">
            <button onClick={()=>handleSelect(course)} className="btn btn-outline btn-info w-full text-white">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
    handleSelect:PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
};

export default Card;
