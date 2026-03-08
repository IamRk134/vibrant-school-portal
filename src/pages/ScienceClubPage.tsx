import { Calendar, Users, Clock, MapPin } from "lucide-react";
import ActivityDetailPage from "@/components/ActivityDetailPage";
import science1 from "@/assets/science-1.jpg";

const ScienceClubPage = () => (
  <ActivityDetailPage
    title="Science Club"
    subtitle="Exploring the wonders of discovery"
    description="The Science Club at Crestview Academy fosters curiosity and innovation through hands-on research projects, science fair competitions, and STEM-focused activities. Students work alongside faculty mentors to design experiments, analyze data, and present their findings at regional and state competitions. Our club has a proud track record of producing award-winning researchers."
    heroImage={science1}
    color="bg-accent"
    photos={[
      { src: science1, alt: "Students conducting experiments in the lab" },
      { src: science1, alt: "Science fair presentation" },
      { src: science1, alt: "Collaborative research project" },
    ]}
    details={[
      { icon: Users, label: "Members", value: "40+ members" },
      { icon: Calendar, label: "Competitions", value: "3 major fairs/year" },
      { icon: Clock, label: "Meetings", value: "Wed, 3:30–5:00 PM" },
      { icon: MapPin, label: "Location", value: "STEM Innovation Lab" },
    ]}
    highlights={[
      "State Science Fair qualifiers every year",
      "Partnerships with local university research labs",
      "Robotics and engineering sub-teams",
      "Guest lectures from working scientists",
      "Environmental science field research projects",
    ]}
  />
);

export default ScienceClubPage;
