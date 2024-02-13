const Navbar = () => {
  return (
    <div className="flex justify-between bg-red-700 p-3">
        <div className="flex space-x-2">
        <div><div className = "text-left font-[poppins]">Blog-Fest</div></div>
        <div>
        <div><img className ="h-5 inline"src = "https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/comment-blog-icon.png" alt="Blog-Icon"/></div>
        </div>
        </div>
      <div className="text-3xl">
        <div className="space-y-2">
          <div className="w-8 h-0.5 bg-white"></div>
          <div className="w-8 h-0.5 bg-white"></div>
          <div className="w-8 h-0.5 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
