import Pages from "./Pages";


const Navber = () => {
    return (
        <div className="bg-[#f9f8ff] py-5">
            <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <h1 className="text-3xl font-bold">CareerHub</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <Pages></Pages>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn normal-case bg-gradient-to-r text-white from-[#7E90FE] to-[#9873FF] hover:from-pink-500 hover:to-yellow-500 ">Star Applying</button>
  </div>
</div>
        </div>
    );
};

export default Navber;