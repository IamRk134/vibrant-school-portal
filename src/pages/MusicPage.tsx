import { Calendar, Users, Clock, MapPin } from "lucide-react";
import ActivityDetailPage from "@/components/ActivityDetailPage";
import music1 from "@/assets/music-1.jpg";
import music2 from "@/assets/music-2.jpg";

const MusicPage = () => (
  <ActivityDetailPage
    title="Music & Band"
    subtitle="Where rhythm meets passion"
    description="Our music program offers students the opportunity to explore their musical talents through marching band, jazz ensemble, concert band, choir, and solo performance opportunities. Students develop technical skills, artistic expression, and collaborative abilities while performing at school events, competitions, and community concerts throughout the year."
    heroImage={music1}
    color="bg-accent"
    photos={[
      { src: music1, alt: "Marching band performing on the field" },
      { src: music2, alt: "Choir performing on stage" },
      { src: music1, alt: "Band practice session" },
    ]}
    details={[
      { icon: Users, label: "Ensembles", value: "6 performing groups" },
      { icon: Calendar, label: "Concerts", value: "4 major performances/year" },
      { icon: Clock, label: "Rehearsal", value: "Tues & Thurs, 3:30–5:00 PM" },
      { icon: MapPin, label: "Venue", value: "Performing Arts Center" },
    ]}
    highlights={[
      "Award-winning marching band with regional honors",
      "Annual spring musical collaboration with drama department",
      "Private lesson program with professional musicians",
      "Opportunities for solo and ensemble competition",
      "Music theory and composition electives available",
    ]}
  />
);

export default MusicPage;
