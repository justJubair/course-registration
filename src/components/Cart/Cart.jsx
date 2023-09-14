
import PropTypes from 'prop-types'

const Cart = ({selectedCourse}) => {
    console.log(selectedCourse)
  return (
    <div>
     {
        selectedCourse.map(course=><li className='list-decimal' key={course.id}>{course.course_name}
        </li>)
     }
    </div>
  )
}

Cart.propTypes = {
    selectedCourse:PropTypes.array.isRequired
}

export default Cart
