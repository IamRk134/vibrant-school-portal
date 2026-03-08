import { Calendar, Users, Clock, MapPin } from "lucide-react";
import ActivityDetailPage from "@/components/ActivityDetailPage";
import art1 from "@/assets/art-1.jpg";

const ArtClubPage = () => (
  <ActivityDetailPage
    title="Art Club"
    subtitle="Creativity without boundaries"
    description="The Art Club provides a welcoming space for students to explore visual arts through painting, drawing, sculpture, digital media, and mixed-media projects. Members participate in exhibitions, collaborative installations, and community art initiatives. Our art studio is equipped with professional-grade materials and our faculty advisor brings years of gallery experience to guide budding artists."
    heroImage={art1}
    color="bg-accent"
    photos={[
      { src: art1, alt: "Students painting in the art studio" },
      { src: art1, alt: "Student art exhibition" },
      { src: art1, alt: "Collaborative art project" },
    ]}
    details={[
      { icon: Users, label: "Members", value: "35+ artists" },
      { icon: Calendar, label: "Exhibitions", value: "2 shows per year" },
      { icon: Clock, label: "Studio Hours", value: "Tues & Thurs, 3:30–5:00 PM" },
      { icon: MapPin, label: "Location", value: "Visual Arts Studio" },
    ]}
    highlights={[
      "Annual student art exhibition open to the community",
      "Portfolio development for college applications",
      "Guest workshops with local and visiting artists",
      "Mural projects beautifying school campus",
      "Digital art and graphic design instruction available",
    ]}
  />
);

export default ArtClubPage;
