import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-lg mb-6">
          I'm always open to new opportunities and collaborations. Feel free to reach out to me
          through any of the following channels:
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="w-6 h-6 mr-4 text-blue-500" />
            <a href="mailto:emil@example.com" className="text-blue-500 hover:text-blue-600">
              emil@example.com
            </a>
          </div>
          <div className="flex items-center">
            <Phone className="w-6 h-6 mr-4 text-blue-500" />
            <a href="tel:+1234567890" className="text-blue-500 hover:text-blue-600">
              +1 (234) 567-890
            </a>
          </div>
          <div className="flex items-center">
            <Linkedin className="w-6 h-6 mr-4 text-blue-500" />
            <a
              href="https://www.linkedin.com/in/emil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              linkedin.com/in/emil
            </a>
          </div>
          <div className="flex items-center">
            <Github className="w-6 h-6 mr-4 text-blue-500" />
            <a
              href="https://github.com/emil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              github.com/emil
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;