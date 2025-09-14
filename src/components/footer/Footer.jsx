const Footer = () => (
  <footer className="w-full bg-gray-900 text-white">
    {/* Línea de copy */}
    <div className="border-gray-700 p-5 text-center text-xs">
      © {new Date().getFullYear()} MyDietApp. All rights reserved..
    </div>
  </footer>
);

export default Footer;
