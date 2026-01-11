import React from 'react';
import { Github, Linkedin, Twitter, Facebook, Instagram, Youtube, Factory, User } from 'lucide-react'; // Icons from Lucide

const Footer = () => {
  return (
    <footer className="border-t bg-muted/40 mt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left" style={{ columnGap: "224px" }}>

          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Desh Raj</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto md:mx-0">
              Full-stack developer focused on building clean, scalable, and modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Education", "#education"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          {/* About me */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <User className="h-5 w-5 mr-2 text-primary" />
              Quick Facts
            </h3>

            <ul className="text-muted-foreground space-y-1">
              <li><strong>Age:</strong> 23</li>
              <li><strong>Height:</strong> 5'8"</li>
              <li><strong>Location:</strong> Chandigarh</li>
              <li><strong>Hobbies:</strong> Exploring new tech, hiking, and gaming</li>
            </ul>

          </div>
          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex flex-col justify-center md:justify-start gap-4">
              <a href="https://github.com/yourusername" className="footer-icon">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/yourusername" className="footer-icon">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/yourusername" className="footer-icon">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/yourusername" className="footer-icon">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/yourusername" className="footer-icon">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Desh Raj. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


export default Footer;