import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import experienceBg from "@/assets/meta-1280x720.jpg";
import { Gem, Wine, Globe, Heart } from "lucide-react";

const experiences = [
  { icon: Wine, text: "Private dinner companionship" },
  { icon: Globe, text: "Travel & getaway partners" },
  { icon: Gem, text: "VIP event accompaniment" },
  { icon: Heart, text: "Personalized luxury experiences" },
];

const ExperienceSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative overflow-hidden" id="experience">
      <div>
        {/* Image side */}
        <h1><strong>Dehradun Escort Service – Trusted Luxury Companionship &amp; Private Booking
          Support</strong></h1>
        <p>Welcome to one of the most searched premium companionship platforms in Dehradun, offering discreet,
          professional, and personalized escort experiences for visitors, travelers, working professionals, and local
          clients. Our service is designed for individuals who value privacy, comfort, respectful communication, and
          memorable companionship in a safe environment.</p>
        <p>Whether you are visiting Dehradun for business, tourism, nightlife, or relaxation, we provide
          flexible booking options that suit different lifestyles and preferences. From elegant dinner companionship and
          social events to overnight bookings and travel partners, our platform connects clients with stylish and
          confident companions for quality private moments.</p>
        <h2><strong>Professional &amp; Discreet Escort Service in Dehradun</strong></h2>
        <p>Our Dehradun escort service focuses on professionalism, client comfort, and discreet arrangements. We
          work with independent companions, models, college escorts, and VIP companions who maintain high standards of
          grooming, communication, and hospitality.</p>
        <p>Clients can choose from:</p>
        <ul>
          <li>Independent Escorts in Dehradun</li>
          <li>VIP &amp; High Profile Companions</li>
          <li>College Escorts &amp; Young Companions</li>
          <li>Hotel Escort Service</li>
          <li>Outcall &amp; In-call Booking</li>
          <li>Overnight Companion Services</li>
          <li>Party &amp; Event Companions</li>
          <li>Travel &amp; Dinner Date Partners</li>
        </ul>
        <p>Every interaction is managed with attention to confidentiality, convenience, and professionalism.</p>
        <h2><strong>Why Clients Prefer Our Dehradun Escort Platform</strong></h2>
        <p>Finding a reliable escort service online can often be confusing because many websites lack
          transparency and genuine support. Our goal is to provide a more trustworthy and user-friendly experience for
          clients searching for companionship services in Dehradun.</p>
        <h3><strong>What Makes Our Service Different</strong></h3>
        <ul>
          <li>24/7 Booking Assistance</li>
          <li>Quick Response Support</li>
          <li>Private &amp; Confidential Communication</li>
          <li>Verified Profiles &amp; Real Photos</li>
          <li>Easy Booking Process</li>
          <li>Flexible Packages for Different Budgets</li>
          <li>Hotel &amp; Home Visit Availability</li>
          <li>Respectful &amp; Professional Interaction</li>
        </ul>
        <p>We focus on creating a smooth experience where clients can comfortably explore companionship options
          without unnecessary complications.</p>
        <h2><strong>Affordable Luxury Companionship in Dehradun</strong></h2>
        <p>Many visitors search for affordable yet premium companionship experiences while staying in Dehradun.
          Our platform offers multiple categories and flexible packages based on client preferences, schedule, and
          comfort.</p>
        <p>Whether you are looking for:</p>
        <ul>
          <li>A charming dinner companion</li>
          <li>A stylish party partner</li>
          <li>A private overnight experience</li>
          <li>A luxury hotel companion</li>
          <li>A travel partner for city outings</li>
          <li>A relaxing companionship experience after work</li>
        </ul>
        <p>our service provides suitable options for different expectations and occasions.</p>
        <h2><strong>Independent &amp; Well-Groomed Companions</strong></h2>
        <p>Our independent companions are known for their modern personality, confidence, and friendly
          communication style. We prioritize profiles that maintain professionalism, hygiene standards, respectful
          behavior, and client comfort.</p>
        <p>Clients often prefer independent escorts because they provide a more relaxed, personalized, and
          genuine companionship experience. Many companions are educated, socially confident, and experienced in
          interacting with travelers, business professionals, and regular clients.</p>
        <h2><strong>Hotel Escort Service Across Dehradun</strong></h2>
        <p>We provide hotel companionship support across popular areas and premium hotels in Dehradun. Whether
          you are staying in a business hotel, luxury property, or private apartment, our team helps arrange bookings
          according to your schedule and location preferences.</p>
        <p>Popular searches related to our service include:</p>
        <ul>
          <li>Escort Service in Dehradun</li>
          <li>Independent Escorts Near Me</li>
          <li>VIP Escorts in Dehradun</li>
          <li>Hotel Escort Service</li>
          <li>Luxury Companion Service</li>
          <li>High Profile Escorts</li>
          <li>Russian Escorts in Dehradun</li>
          <li>Premium Call Girl Service</li>
        </ul>
        <p>Our platform is designed to match these user requirements with fast support and discreet booking
          assistance.</p>
        <h2><strong>Comfortable &amp; Private Booking Experience</strong></h2>
        <p>Privacy remains one of the most important parts of our service. All conversations and booking details
          are handled discreetly. We understand that many clients prefer complete confidentiality and stress-free
          communication while arranging companionship services.</p>
        <p>For added convenience, we support flexible payment methods and secure booking assistance. Same-day
          and advance bookings may also be available depending on companion availability and location.</p>
        <h2><strong>Personalized Experiences for Different Preferences</strong></h2>
        <p>Every client has different expectations when booking companionship services. Some prefer social
          company for dinners and parties, while others look for relaxed private time and meaningful conversations. Our
          platform allows clients to choose companions based on personality, appearance, communication style, and comfort
          level.</p>
        <p>We aim to create a balanced experience that combines elegance, comfort, and personalized attention.
        </p>
        <h2><strong>Trusted Dehradun Escort Service with 24/7 Support</strong></h2>
        <p>Our customer support team remains available throughout the day to assist with bookings, profile
          selection, scheduling, and service-related questions. We focus on maintaining a professional approach while
          helping clients find companionship options that match their preferences.</p>
        <p>If you are searching for a discreet and premium escort service in Dehradun with classy companions,
          private booking support, and luxury companionship experiences, our platform offers a reliable and comfortable
          solution designed around your convenience.</p>
        <p><br /><br /></p>
        <h1><strong>Frequently Asked Questions – Dehradun Escort Service</strong></h1>
        <h2><strong>1. How can I book an escort service in Dehradun?</strong></h2>
        <p>Booking is simple and private. You can contact the support team through call or WhatsApp to check
          companion availability, preferred timings, location, and booking details. Advance and same-day bookings may both
          be available depending on availability.</p>
        <h2><strong>2. Is your Dehradun escort service discreet and confidential?</strong></h2>
        <p>Yes, privacy and confidentiality are among the top priorities. All communication, booking details,
          and client information are handled professionally and discreetly to ensure a comfortable experience.</p>
        <h2><strong>3. What types of companions are available?</strong></h2>
        <p>Clients can choose from different categories including independent escorts, VIP companions, college
          companions, party partners, travel companions, and hotel escort services in Dehradun.</p>
        <h2><strong>4. Do you provide hotel escort service in Dehradun?</strong></h2>
        <p>Yes, hotel companionship service is available across popular hotels and private accommodations in
          Dehradun. Clients can schedule bookings according to their convenience and location.</p>
        <h2><strong>5. Are outcall and incall services available?</strong></h2>
        <p>Both outcall and incall options may be available depending on the companion and booking preferences.
          Clients can discuss requirements directly with the support team before confirmation.</p>
        <h2><strong>6. Is advance booking available?</strong></h2>
        <p>Yes, advance booking is recommended for weekends, holidays, special events, and overnight
          companionship requests. Early scheduling helps ensure better availability and smoother arrangements.</p>
        <h2><strong>7. What payment methods are accepted?</strong></h2>
        <p>Flexible payment options may include cash, UPI, and other secure payment methods. Payment details are
          usually shared during the booking process for client convenience.</p>
        <h2><strong>8. Are the profiles verified?</strong></h2>
        <p>The platform focuses on maintaining verified and professionally managed profiles to provide a better
          and more trustworthy user experience.</p>
        <h2><strong>9. Can travelers and tourists book escort services in Dehradun?</strong></h2>
        <p>Yes, many clients visiting Dehradun for business trips, tourism, or events prefer companionship
          services for social outings, dinner dates, nightlife, or private relaxation.</p>
        <h2><strong>10. What areas in Dehradun do you cover?</strong></h2>
        <p>Escort and companionship services may be available across major hotels, business areas, tourist
          locations, and nearby premium localities in Dehradun.</p>
        <h2><strong>11. Is customer support available 24/7?</strong></h2>
        <p>Yes, booking assistance and customer support are generally available 24/7 to help clients with
          profile selection, scheduling, and service-related queries.</p>
        <h2><strong>12. Why do clients prefer independent escorts in Dehradun?</strong></h2>
        <p>Many clients prefer independent companions because they often provide a more relaxed, personalized,
          and comfortable companionship experience with better communication and flexibility.</p>
        <h2><strong>13. Can I choose a companion according to my preferences?</strong></h2>
        <p>Yes, clients can usually select companions based on personality, appearance, language, availability,
          and preferred companionship style.</p>
        <h2><strong>14. Is the service suitable for social events and parties?</strong></h2>
        <p>Yes, many clients book companions for dinner dates, private parties, nightlife outings, business
          events, and travel companionship in Dehradun.</p>
        <h2><strong>15. How quickly can bookings be arranged?</strong></h2>
        <p>Depending on companion availability and location, same-day and quick bookings may often be arranged
          within a short time frame.</p>
        <p><br /><br /></p>
        <p><br /></p>
      </div>
    </section>
  );
};

export default ExperienceSection;
