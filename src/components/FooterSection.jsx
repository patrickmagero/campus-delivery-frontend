// src/components/FooterSection.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function FooterSection() {
  return (
    <footer className="bg-black text-white px-6 pt-16 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Signup */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">Get The Latest Updates</h2>
          <form className="flex justify-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-black w-full max-w-md"
            />
            <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-yellow-500 hover:text-white transition">
              Subscribe
            </button>
          </form>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Products</h4>
            <ul className="space-y-2">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/clients">Clients List</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/outdoor-living">Outdoor Living</Link></li>
              <li><Link to="/services/pool">Pool</Link></li>
              <li><Link to="/services/landscaping">Landscaping</Link></li>
              <li><Link to="/services/patios">Patios</Link></li>
              <li><Link to="/services/kitchens">Outdoor Kitchens</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">About Us</h4>
            <ul className="space-y-2">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/clients">Clients List</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/terms">Terms</Link></li>
              <li><Link to="/policy">Policy</Link></li>
              <li><Link to="/payments">Payments</Link></li>
            </ul>
          </div>
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <h4 className="text-lg font-semibold mb-2">Legacy Core</h4>
              <p className="text-sm">Book Online Or Call</p>
              <p className="text-lg font-bold">(000) 000 - 0000</p>
            </div>
            <div className="flex gap-4 text-xl mt-2">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2023 uhubs.com. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/cookie">Cookie</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
