import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <footer className="backdrop-blur-sm border-t py-12 bg-teal-800 text-primary-foreground border-teal-300">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 border-primary-foreground text-primary-foreground">
            <div className="flex flex-col items-start text-destructive">
              <img
                src="/assets/outklass-logo.png"
                alt=" outklass"
                className="h-8 md:h-10 w-auto mb-2"
              />
              <p className="mb-4 text-primary-foreground">
                Zero to Industry-Ready training for the next generation of tech
                professionals.
              </p>
              <div className="flex items-center gap-3 text-destructive">
                <a href={" https://www.linkedin.com/company/outklass"}>
                  {" "}
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="LinkedIn"
                    className="text-white bg-destructive"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </a>
                <a href="">
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Twitter"
                    className="hover-scale bg-destructive text-primary-foreground"
                  >
                    <FaXTwitter className="w-5 h-5 text-primary-foreground" />
                  </Button>
                </a>
                <a
                  href={"https://youtube.com/@outklass_ed?si=aWtCWx1hEDB4xRXt"}
                >
                  {" "}
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="YouTube"
                    className="bg-destructive text-primary-foreground"
                  >
                    <Youtube className="w-5 h-5" />
                  </Button>
                </a>
                <a
                  href={
                    " https://www.instagram.com/outklass_ed?igsh=MWd1cGdyZGU3aTl0eg%3D%3D&utm_source=qr"
                  }
                >
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Twitter"
                    className="text-primary-foreground bg-destructive"
                  >
                    <Instagram className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-accent">Courses</h4>
              <div className="space-y-2 text-sm text-primary-foreground">
                <Link
                  to="/course/iot"
                  className="block hover:text-[#ffffffa7] transition-colors duration-300"
                >
                  outklass IoT Developer Program
                </Link>

                <Link
                  to="/courses"
                  className="block hover:text-[#ffffffa7] transition-colors duration-300"
                >
                  All Courses
                </Link>
              </div>
            </div>

            <div className="text-primary-foreground">
              <h4 className="font-bold mb-4 text-accent">Company</h4>
              <div className="space-y-2 text-sm text-primary-foreground">
                <Link
                  to="/career-support"
                  className="block hover:text-[#ffffffa7] transition-colors duration-300"
                >
                  Career Support
                </Link>

                <Link
                  to="/contact"
                  className="block hover:text-[#ffffffa7] transition-colors duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-accent">Support</h4>
              <div className="space-y-2 text-sm text-primary-foreground">
                <div>Email: support@outklass.com</div>
                <div>Phone: +91 8838194157</div>
                <div>WhatsApp: +91 8838194157</div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p className="text-gray-400">
              © 2025 outklass. All rights reserved. | Bridging the gap between
              classroom and industry.
            </p>
          </div>
        </div>
      </footer>
      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/918838194157?text=Hello%20outklass!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="rounded-full w-14 h-14 shadow-lg bg-green-500 hover:bg-green-600 floating-animation">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688" />
            </svg>
          </Button>
        </a>
      </div>
    </div>
  );
};
export default Footer;