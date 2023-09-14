
import PropTypes from 'prop-types'

const Cart = ({selectedCourse}) => {
    console.log(selectedCourse)
  return (
    <div className='bg-white p-6 rounded-xl'>
    <div>
        <h3 className='text-lg font-bold text-blue-500 border-b-2 pb-2 mb-2'>Credit Hour Remaining</h3>
    </div>
    <h3 className='font-semibold text-lg mb-4'>Course Name</h3>
   <div className='text-gray-500 border-b-2 pb-4'>
   {
        selectedCourse.map(course=><li className='list-decimal' key={course.id}><small>{course.course_name}</small>
        </li>)
     }
   </div>
   <p className='text-gray-500 border-b-2 pb-2 mt-2 font-semibold'>Total Credit Hour:</p>
   <p className='text-gray-500 mt-3 font-semibold'>Total Price: </p>
    
    </div>
  )
}

Cart.propTypes = {
    selectedCourse:PropTypes.array.isRequired
}

export default Cart
