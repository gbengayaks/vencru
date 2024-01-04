import React from "react";

const TopBar = () => {
  let Links = [
    {name: 'Features', link: '/'},
    {name: 'Industries', link: '/'},
    {name: 'Downloads', link: '/'},
    {name: 'Resources', link: '/'},
    {name: 'Pricing', link: '/'},
  ]
  return (
    <div className="text-lg flex md:px-10 py-4 px-7 md:flex justify-between items-center">
      <div className="">
        <img src="https://b6efee71.flyingcdn.com/wp-content/uploads/2022/07/Logo-Regular.png" alt="Logo" className="w-22 h-12 text-lg" />
      </div>

      <ul className="md:flex pl-9 text-gray-500 md:pl-0">
        {
          Links.map(link => (
            <li className="my-7 md:my-0 md:ml-8">
                <a href='/'>{link.name}</a>
            </li>
          ))
        }
      </ul>
      <div className="flex mt-2">
        <a href="/" className="mr-7 text-lg">Book a Call</a>
        <span className="">|</span>
        <a href="/" className="mx-7 text-lg">Login</a>
        <button className="bg-blue-600 p-2 text-white rounded-lg"><span className="p-2">Try Vencru Free</span></button>
      </div>
    </div>
  );
};

export default TopBar;
