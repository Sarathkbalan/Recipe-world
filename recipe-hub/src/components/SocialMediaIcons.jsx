import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';

function SocialMediaIcons() {
  return (
    <div className="flex gap-8 mt-6">
      {[FaInstagram, FaFacebook, FaTwitter, FaPinterest].map((Icon, index) => (
        <a href="#" key={index} className="text-4xl hover:text-green-600 transition-transform transform hover:scale-125">
          <Icon />
        </a>
      ))}
    </div>
  );
}

export default SocialMediaIcons;
