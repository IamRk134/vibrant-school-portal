import schoolLogo from "@/assets/school-logo.png";

const Footer = () => (
  <footer className="bg-foreground py-12 px-4">
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={schoolLogo} alt="Crestview Academy" className="h-10 w-auto" />
            <span className="font-display text-lg font-bold text-background">Crestview Academy</span>
          </div>
          <p className="text-background/60 text-sm leading-relaxed">
            Empowering students since 1965 with academic excellence, character development, and community spirit.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-background mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
            <li><a href="#academics" className="hover:text-secondary transition-colors">Academics</a></li>
            <li><a href="#activities" className="hover:text-secondary transition-colors">Activities</a></li>
            <li><a href="#news" className="hover:text-secondary transition-colors">News & Events</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-background mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><a href="#" className="hover:text-secondary transition-colors">Student Portal</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Parent Portal</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Library</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-background mb-4">Connect</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><a href="#" className="hover:text-secondary transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/15 pt-6 text-center text-sm text-background/50">
        © {new Date().getFullYear()} Crestview Academy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
