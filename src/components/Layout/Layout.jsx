import Cards from "../Cards/Cards";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
        {/* overall layout */}
        <Header/>
      <div className="flex justify-between mt-16">
        <div className="">
          <Cards/>
        </div>
        <div className="w-1/3">
          <h1>cart</h1>
        </div>
      </div>
    </div>
  );
};

export default Layout;
