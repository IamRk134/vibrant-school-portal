export interface NewsItem {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
}

export interface EventItem {
  slug: string;
  date: string;
  title: string;
  description: string;
}

export const newsData: NewsItem[] = [
  {
    slug: "science-fair-winners",
    date: "Mar 5, 2026",
    category: "Achievement",
    title: "Crestview Students Win Regional Science Fair",
    excerpt: "Three students earned top honors at the Regional Science Fair, qualifying for the state competition.",
    content: `Three exceptional Crestview Academy students have brought home top honors from the 2026 Regional Science Fair, earning their place at the upcoming State Science Competition.

Sophomore Maya Chen took first place in the Environmental Science category with her project on microplastic filtration using naturally occurring fungi. Her innovative approach caught the attention of judges from the University of Illinois, who praised the project's real-world applications.

Junior David Okonkwo earned second place in the Engineering division for his solar-powered water purification device designed for rural communities. His project demonstrated both technical skill and a commitment to solving global challenges.

Freshman Aisha Patel received an honorable mention in Biochemistry for her research on antibiotic-resistant bacteria found in local waterways. Her work was noted for its rigorous methodology and clear presentation.

"These students represent the best of what Crestview has to offer," said Science Department Chair Dr. Rebecca Torres. "Their curiosity, dedication, and willingness to tackle real-world problems make us incredibly proud."

The State Science Competition will be held April 18–20 at the Illinois State Fairgrounds. The school community is encouraged to show their support as our students compete against the best young scientists from across the state.`,
  },
  {
    slug: "spring-musical",
    date: "Feb 28, 2026",
    category: "Event",
    title: "Spring Musical: 'Into the Woods' Opens March 15",
    excerpt: "The drama department presents their annual spring musical. Tickets available at the front office.",
    content: `The Crestview Academy Drama Department is thrilled to announce its spring 2026 production of Stephen Sondheim's beloved musical "Into the Woods." Performances will run March 15–17 in the school's Performing Arts Center.

This Tony Award-winning musical intertwines the plots of several Brothers Grimm fairy tales, exploring the consequences of the characters' wishes and quests. The show features a talented cast of over 40 students, with stunning sets designed and built by the Technical Theater class.

Senior Emily Rodriguez stars as the Baker's Wife, while junior Marcus Thompson takes on the role of the Baker. The Witch is played by sophomore powerhouse vocalist Sierra Williams, whose audition left the directing team speechless.

"This is one of the most ambitious productions we've ever undertaken," said Drama Director Mr. James Patterson. "The students have been rehearsing since January, and their growth as performers has been remarkable."

The production features a live orchestra of 15 student musicians under the direction of Music Director Ms. Sarah Kim, showcasing the strong collaboration between the school's performing arts programs.

**Performance Schedule:**
- Friday, March 15 — 7:00 PM
- Saturday, March 16 — 2:00 PM & 7:00 PM
- Sunday, March 17 — 2:00 PM

**Tickets:** $12 for adults, $8 for students and seniors. Available at the front office or online through the school website. A portion of proceeds will support the Performing Arts Scholarship Fund.`,
  },
  {
    slug: "basketball-playoffs",
    date: "Feb 20, 2026",
    category: "Sports",
    title: "Varsity Basketball Advances to Playoffs",
    excerpt: "The Eagles secured a playoff spot with a thrilling overtime victory last Friday night.",
    content: `In one of the most exciting games of the season, the Crestview Eagles varsity basketball team clinched a playoff berth with a dramatic 78–74 overtime victory over rival Lincoln High last Friday night.

The game, played before a packed home crowd at Eagle Arena, saw the Eagles trailing by 8 points entering the fourth quarter. A furious rally led by senior point guard Jaylen Washington, who scored 14 of his game-high 28 points in the final period, sent the game into overtime.

In the extra session, junior forward Marcus Williams dominated with 6 points and crucial rebounds, while sophomore guard Tyler Chen hit a clutch three-pointer that gave the Eagles a lead they wouldn't relinquish.

"This team has heart," said Head Coach Robert Martinez. "We've been in tight games all season, and tonight they showed they know how to win when it matters most. I couldn't be prouder."

The victory gives the Eagles a 22–6 record and the third seed in the regional playoffs. They will face Westfield Academy in the first round on March 8 at a venue to be determined.

**Season Highlights:**
- 22–6 overall record (best since 2019)
- 12–2 in conference play
- Jaylen Washington averaging 22.3 points per game
- Team averaging 71.5 points per game

The school pep band and cheerleading squad will travel to support the team at the playoff game. Student fan buses are being organized — sign up at the athletics office by March 5.

Go Eagles! 🦅`,
  },
];

export const eventsData: EventItem[] = [
  {
    slug: "parent-teacher-conference",
    date: "Mar 12",
    title: "Parent-Teacher Conference",
    description: `Join us for our spring Parent-Teacher Conference on March 12, 2026. This is an important opportunity for parents and guardians to meet with teachers, discuss student progress, and set goals for the remainder of the academic year.

**Schedule:**
- Morning Session: 8:00 AM – 12:00 PM
- Afternoon Session: 1:00 PM – 4:00 PM
- Evening Session: 5:30 PM – 8:00 PM

Appointments can be scheduled through the parent portal. Walk-ins are welcome but may experience longer wait times. Translators will be available for Spanish, Mandarin, and Arabic-speaking families.

Refreshments will be provided, and the school bookstore will be open for browsing.`,
  },
  {
    slug: "spring-musical-performances",
    date: "Mar 15-17",
    title: "Spring Musical Performances",
    description: `The Crestview Drama Department presents "Into the Woods" — a magical journey through intertwined fairy tales featuring our talented student cast and orchestra.

**Showtimes:**
- Friday, March 15 at 7:00 PM
- Saturday, March 16 at 2:00 PM & 7:00 PM
- Sunday, March 17 at 2:00 PM

Tickets: $12 adults, $8 students/seniors. Available at the front office or online.`,
  },
  {
    slug: "college-career-fair",
    date: "Mar 22",
    title: "College & Career Fair",
    description: `Our annual College & Career Fair brings over 50 colleges, universities, and employers to Crestview Academy. Students and families can explore post-graduation options, meet admissions counselors, and learn about scholarship opportunities.

**Highlights:**
- Representatives from 50+ institutions including state universities, community colleges, trade schools, and military branches
- Resume workshop and mock interview sessions
- Financial aid information booth
- Career exploration panels featuring Crestview alumni

The fair is open to all Crestview students and their families from 9:00 AM to 2:00 PM in the main gymnasium. Juniors and seniors are especially encouraged to attend.`,
  },
  {
    slug: "spring-break",
    date: "Apr 5-12",
    title: "Spring Break",
    description: `Spring Break runs from April 5–12, 2026. Classes resume on Monday, April 13. 

The school office will be open April 7–9 from 9:00 AM to 3:00 PM for administrative needs. The library and athletics facilities will be closed during the break.

Wishing all Crestview families a restful and enjoyable break!`,
  },
];
