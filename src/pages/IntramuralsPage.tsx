import { Calendar, Users, Clock, MapPin } from "lucide-react";
import ActivityDetailPage from "@/components/ActivityDetailPage";
import intramurals1 from "@/assets/intramurals-1.jpg";

const IntramuralsPage = () => (
  <ActivityDetailPage
    title="Intramurals"
    subtitle="Fun, fitness, and friendship for everyone"
    description="Our intramural program provides recreational sports leagues for every skill level and interest. Whether you're a seasoned athlete or trying something new, intramurals offer a low-pressure, high-fun environment to stay active and build friendships. From volleyball and flag football to dodgeball and ultimate frisbee, there's something for everyone."
    heroImage={intramurals1}
    color="bg-secondary"
    photos={[
      { src: intramurals1, alt: "Students playing recreational volleyball" },
      { src: intramurals1, alt: "Intramural flag football game" },
      { src: intramurals1, alt: "Students enjoying sports together" },
    ]}
    details={[
      { icon: Users, label: "Participation", value: "300+ students" },
      { icon: Calendar, label: "Leagues", value: "Seasonal rotations" },
      { icon: Clock, label: "Games", value: "Lunch & after school" },
      { icon: MapPin, label: "Venues", value: "Gym, Fields, Courts" },
    ]}
    highlights={[
      "Open to all students regardless of athletic experience",
      "Rotating seasonal sports leagues throughout the year",
      "Co-ed and single-gender options available",
      "End-of-season tournaments with school-wide participation",
      "Focus on fun, fitness, and sportsmanship over competition",
    ]}
  />
);

export default IntramuralsPage;
