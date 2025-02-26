import React from "react"
const Footer:React.FC =()=>{
return(
    <footer className="bg-purple-800 text-white py-6 fixed bottom-0 w-full ">
        <div className="max-w-7xl  px-4 space-y-2">
          
           
          
          <div className="flex space-x-6 ">
          <span>© 2025 To The New. All rights reserved</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
)
}

export default Footer;