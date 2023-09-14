
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from '../Card/Card'

const Cards = () => {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        const loadData = async ()=>{
            const res = await fetch('data.json');
            const data = await res.json();
            setCourses(data);
        }
        loadData();
    },[])
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {
        courses.map(course => <Card key={course.id} course={course}/>)
      }
    </div>
  )
}

Cards.propTypes = {

}

export default Cards
