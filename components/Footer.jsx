import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-background lg:pt-24 pt-12 px-2.5 text-link">
      <div className="max-w-screen-xl mx-auto">
        {/* Footer content organized in a grid layout */ }
        <section className="grid grid-cols-1 lg:grid-cols-4 mb-16 gap-6">

          {/* Section 1: Golden Triangle Tours links */ }
          <nav aria-label="Golden Triangle Tours">
            <h6 className="font-bold text-foreground mb-2.5 text-lg">Golden Triangle Tours</h6>
            <ul className="space-y-1.5">
              <li><a className="cursor-pointer">Golden Triangle Tour With Pushkar</a></li>
              <li><a className="cursor-pointer">Golden Triangle Tour With Varanasi</a></li>
              <li><a className="cursor-pointer">Golden Triangle Tour With Ranthambore</a></li>
            </ul>
          </nav>

          {/* Section 2: Company links */ }
          <nav aria-label="Company">
            <h6 className="font-bold text-foreground mb-2.5 text-lg">Company</h6>
            <ul className="space-y-1.5">
              <li><a className="cursor-pointer">About us</a></li>
              <li><a className="cursor-pointer">Community Blog</a></li>
              <li><a className="cursor-pointer">Careers</a></li>
            </ul>
          </nav>

          {/* Section 3: Contact links */ }
          <nav aria-label="Contact">
            <h6 className="font-bold text-foreground mb-2.5 text-lg">Contact</h6>
            <ul className="space-y-1.5">
              <li><a className="cursor-pointer">Partnerships</a></li>
              <li><a className="cursor-pointer">FAQ</a></li>
              <li><a className="cursor-pointer">Get in touch</a></li>
            </ul>
          </nav>

          {/* Section 4: Social media links */ }
          <nav aria-label="Social media">
            <h6 className="font-bold text-foreground mb-2.5 text-lg">Social</h6>
            <div className="flex gap-2.5">
              {/* Facebook icon */ }
              <a href="#" aria-label="Facebook" className="block">
                <FaFacebook className="text-white bg-sky-900 w-10 h-10 rounded" />
              </a>
              {/* Instagram icon */ }
              <a href="#" aria-label="Instagram" className="block">
                <FaInstagram className="text-white bg-pink-600 w-10 h-10 rounded" />
              </a>
            </div>
          </nav>
        </section>

        {/* Divider line between the sections and footer bottom */ }
        <hr className="border border-link opacity-10 my-6 w-full" />

        {/* Footer bottom section */ }
        <section className="mb-4 flex flex-col md:flex-row items-start lg:justify-between gap-2.5">
          <p>&copy; Explore BD Tours 2024 | Developed By Noushin Pervez.</p>
          <Image
            src="https://modtour.travelerwp.com/wp-content/uploads/2022/04/Frame-3182.svg"
            alt="Company logo"
            sizes="100vw"
            width={ 0 }
            height={ 0 }
            className="w-auto h-8"
          />
        </section>
      </div>
    </footer>
  );
};

export default Footer;