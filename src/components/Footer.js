import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} BuzzFetch. All rights reserved.</p>
        <p className="mb-0">
          Developed by Vaibhav Panchal|{' '}
          <a href="/about" className="text-decoration-none text-light">
            About Us
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
