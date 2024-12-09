import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
       
        <div>
          <div className="flex items-center space-x-2">
            <img src="/Image/comforty.png" alt="Comforty Logo" className="w-20 h-auto" />
          </div>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Vivamus tristique odio sit amet velit semper, <br /> eu posuere turpis interdum. <br /> Cras egestas purus.
          </p>
          <div className="flex space-x-4 mt-4">
            {["facebook", "twitter", "instagram", "pinterest", "youtube"].map((icon) => (
              <a key={icon} href="#" className="text-gray-600 hover:text-gray-800">
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Category</h3>
          <ul className="mt-4 space-y-2 text-sm sm:text-base">
            {["Sofa", "Armchair", "Wing Chair", "Desk Chair", "Wooden Chair", "Park Bench"].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Useful Links</h3>
          <ul className="mt-4 space-y-2 text-sm sm:text-base">
            {["About Us", "Privacy Policy", "Terms & Conditions", "Contact Us", "Support"].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm sm:text-base">
            <li>
              <a href="mailto:info@comforty.com" className="text-gray-600 hover:text-gray-800">
                info@comforty.com
              </a>
            </li>
            <li>
              <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-800">
                +1 234 567 890
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-600">
        <p>&copy; 2024 Comforty. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

  
         
<div>
  <h3 className="text-lg font-semibold text-gray-800">Support</h3>
  <ul className="mt-4 space-y-2">
    {["Help & Support", "Terms & Conditions", "Privacy Policy", "Help"].map((item) => (
      <li key={item}>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          {item}
        </a>
      </li>
    ))}
  </ul>
</div>

{/* Newsletter */}
<div>
  <h3 className="text-lg font-semibold text-gray-800">Newsletter</h3>
  <p className="text-gray-600 mt-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
  </p>
  <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center">
    <input
      type="email"
      placeholder="Your email"
      className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto sm:mr-2"
    />
    <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-2 sm:mt-0 hover:bg-blue-600">
      Subscribe
    </button>
  </div>
</div>

{/* Bottom Footer */}
<div className="border-t border-gray-200 mt-8 pt-4">
  <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
    <p className="text-center sm:text-left">© 2024 – Blogy – Designed & Developed by Muhammad Ammaz</p>
    <div className="flex space-x-4 mt-4 sm:mt-0">
      <img
        src="https://w7.pngwing.com/pngs/665/281/png-transparent-logo-computer-icons-paypal-paypal-blue-angle-rectangle.png"
        alt="PayPal"
        className="h-6"
      />
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAACFCAMAAACND6jkAAAAxlBMVEX///8AcNDn5+fm5ubl5eXu7u7x8fH19fXq6ur5+fn7+/v39/fv7+8Aac8AbtAAZc4AaM4AX8wAYs3w7egXdNH58umguOBvndqGqd61xOL8+fW/1e5DhdaApdnu7Oirw+HZ6PXV3+jq8vrO1+N0oNrW4fS9zuTk7vrd4ubL1OmkweeGqNp3m9YAW8tnmNdYkdgtetK4zulSi9ZGh9aUteQ4f9SvwOLE0eJhk9ehwOkATsm4yeGwyuzU2eSRs+Okxej///QAVszNhLFGAAAeXUl..." alt="" />
     
    </div>
  </div>
</div>

  