import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-secondary">CDCF Church</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              A place to belong and grow in faith, building a Christ-driven community 
              where love thrives and disciples are made.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#location" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#location" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Ministries
                </a>
              </li>
              <li>
                <a href="#location" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.facebook.com/cdcf.sanpablo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.youtube.com/@CDCPhilippines"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:scale-110 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="mailto:eduard.matundan@gmail.com"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Stay updated with our latest news and events
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} CDCF Church. All rights reserved.
          </p>
          {/* <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
              Terms of Service
            </a>
          </div> */}
        </div> 
      </div>
    </footer>
  );
};

export default Footer;
