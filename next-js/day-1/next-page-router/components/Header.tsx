
const Header: React.FC = ()=>
{
return(
    <nav className="bg-purple-800 text-white">
    <div className="max-w-7xl mx-auto px-4">
      <ul className="flex justify-center space-x-8 py-4">
        <li>
          <a href="#" className="hover:text-gray-300 text-lg font-medium">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300 text-lg font-medium">About</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300 text-lg font-medium">Contact Us</a>
        </li>
      </ul>
    </div>
  </nav>
)
}

export default Header