const Navbar = () => {
  return (
    <div className="flex justify-between bg-red-700 p-3 w-[100vw]">
        <div className="flex space-x-2">
        <div><div className = "text-left font-[poppins]">Blog-Fest</div></div>
        <div>
        <div><img className ="h-5 inline cursor-pointer"src = "https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/comment-blog-icon.png" alt="Blog-Icon"/></div>
        </div>
        </div>
        <div className="flex space-x-5">
        <ul className="flex space-x-5">
            <li>
                <a href="#" className="text-xl peer-hover:text-cyan-500 duration-500">Home</a>
            </li>
            <li>
                <a href="#" className="text-xl peer-hover:text-cyan-500 duration-500">About</a>
            </li>
            <li>
                <a href="#" className="text-xl peer-hover:text-cyan-500 duration-500">Press</a>
            </li>
            <li>
                <a href="#" className="text-xl peer-hover:text-cyan-500 duration-500">Contact</a>
            </li>
            <li>
                <a href="#" className="text-xl peer-hover:text-cyan-500 duration-500">Login</a>
            </li>
        </ul>
      <div className="text-3xl ">
        <div className="flex-col">
        <div className="space-y-2">
          <div className="w-8 h-0.5 bg-white"></div>
          <div className="w-8 h-0.5 bg-white"></div>
          <div className="w-8 h-0.5 bg-white"></div>
        </div>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Navbar;
