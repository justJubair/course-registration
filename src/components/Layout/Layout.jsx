import Cards from "../Cards/Cards";

const Layout = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
        {/* overall layout */}
      <div className="flex justify-between">
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
