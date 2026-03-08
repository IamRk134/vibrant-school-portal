import { Calendar, Users, Clock, MapPin } from "lucide-react";
import ActivityDetailPage from "@/components/ActivityDetailPage";
import athletics1 from "@/assets/athletics-1.jpg";
import athletics2 from "@/assets/athletics-2.jpg";
import athletics3 from "@/assets/athletics-3.jpg";

const AthleticsPage = () => (
  <ActivityDetailPage
    title="Athletics"
    subtitle="Building champions on and off the field"
    description="Our athletics program is one of the most comprehensive in the region, offering competitive sports across multiple seasons. From football and basketball to track and swimming, our student-athletes learn discipline, teamwork, and perseverance while competing at the highest level. Our dedicated coaching staff focuses on developing well-rounded individuals who excel both in competition and in the classroom."
    heroImage={athletics1}
    color="bg-secondary"
    photos={[
      { src: athletics1, alt: "Basketball game in the gymnasium" },
      { src: athletics2, alt: "Track and field competition" },
      { src: athletics3, alt: "Swimming team practice" },
    ]}
    details={[
      { icon: Users, label: "Teams", value: "15+ Varsity & JV teams" },
      { icon: Calendar, label: "Seasons", value: "Fall, Winter, Spring" },
      { icon: Clock, label: "Practice", value: "Mon–Fri, 3:30–5:30 PM" },
      { icon: MapPin, label: "Facilities", value: "Gymnasium, Track, Pool, Fields" },
    ]}
    highlights={[
      "State championship appearances in 5 sports over the past 3 years",
      "NCAA Division I scholarship recipients annually",
      "Full-time certified athletic trainers on staff",
      "Modern weight room and conditioning facilities",
      "Character-first coaching philosophy emphasizing sportsmanship",
    ]}
  />
);

export default AthleticsPage;
