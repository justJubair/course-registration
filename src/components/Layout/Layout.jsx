import { useState } from "react";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";

const Layout = () => {
  const [selectedCourse, setSelectedCourse] = useState([])
  const handleSelect =(course)=>{
    setSelectedCourse([...selectedCourse, course])
  }
  return (
    <div className="max-w-screen-xl mx-auto">
        {/* overall layout */}
        <Header/>
      <div className="flex justify-between mt-16">
        <div className="">
          <Cards handleSelect={handleSelect}/>
        </div>
        <div className="w-1/3">
          <Cart selectedCourse={selectedCourse}/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
