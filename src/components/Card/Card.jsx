import PropTypes from "prop-types";

const Card = ({ course }) => {
    const {img, course_name, credit_time, details, price} = course
    console.log(course)
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt={course_name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course_name}</h2>
          <p>{details}</p>
          <div className="card-actions">
            <button className="btn btn-primary w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
