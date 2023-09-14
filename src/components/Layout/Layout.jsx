import { useState } from "react";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import swal from 'sweetalert';

const Layout = () => {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const handleSelect = (course) => {
    const isExist = selectedCourse.find(item=> course.id === item.id);
    if(isExist){
      return swal({
        title: "Already selected",
        icon: "error",
      });
    }
    const updatedRemainingCredit = remainingCredit - course.credit_time
    if(updatedRemainingCredit<0){
      return swal({
        title: "Zero credit hour",
        icon: "error",
      });
    }
    setRemainingCredit(updatedRemainingCredit)
    setSelectedCourse([...selectedCourse, course]);
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* overall layout */}
      <Header />
      <div className="flex flex-col-reverse p-4 justify-between py-10 gap-8 md:flex-row">
        <div className="">
          <Cards handleSelect={handleSelect} />
        </div>
        <div className="w-full md:w-1/2">
          <Cart remainingCredit={remainingCredit} selectedCourse={selectedCourse} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
