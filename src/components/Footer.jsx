import React from 'react';

function Footer() {
  return <div>
    <footer className="page-footer teal darken-2">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="https://github.com/Dev1NA/react-shop.git" target='_black'>Repo</a>
            </div>
          </div>
        </footer>
  </div>;
}

export default Footer;
