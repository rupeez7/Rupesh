import React from 'react';

const Footer = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '40%', paddingLeft: '1%', color: 'white', }}>


        <div>
          <h3>Contact Us</h3>
          <p>Email: rupeshxtha@gmail.com</p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '10px' }}>
                <i className="fab fa-facebook-f"></i>  Facebook
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '10px' }}>
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} Example Company. All Rights Reserved.</p>
        </div>
      </div>


      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ width: '100%', height: 'auto', zIndex: '0' }}>
        <path fill="black" fillOpacity="1" d="M0,96L1440,192L1440,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default Footer;
