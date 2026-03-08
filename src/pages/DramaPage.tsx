import { Calendar, Users, Clock, MapPin } from "lucide-react";
import ActivityDetailPage from "@/components/ActivityDetailPage";
import drama1 from "@/assets/drama-1.jpg";

const DramaPage = () => (
  <ActivityDetailPage
    title="Drama Club"
    subtitle="All the world's a stage"
    description="The Crestview Drama Club brings stories to life through annual plays, musicals, and improv comedy nights. Students gain confidence, creativity, and collaboration skills while exploring all aspects of theatrical production — from acting and directing to set design, lighting, and costume creation. Our productions are a highlight of the school year and a beloved community tradition."
    heroImage={drama1}
    color="bg-secondary"
    photos={[
      { src: drama1, alt: "Students performing a play on stage" },
      { src: drama1, alt: "Cast rehearsal in the auditorium" },
      { src: drama1, alt: "Musical performance finale" },
    ]}
    details={[
      { icon: Users, label: "Members", value: "60+ active members" },
      { icon: Calendar, label: "Productions", value: "3 shows per year" },
      { icon: Clock, label: "Rehearsals", value: "Mon–Fri, 3:30–6:00 PM" },
      { icon: MapPin, label: "Venue", value: "800-seat auditorium" },
    ]}
    highlights={[
      "Fall play, spring musical, and one-act festival annually",
      "Technical theater training in lighting, sound, and set design",
      "Improv comedy troupe with monthly shows",
      "Regional theater competition participation",
      "Mentorship from local professional theater artists",
    ]}
  />
);

export default DramaPage;
