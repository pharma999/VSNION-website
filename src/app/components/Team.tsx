// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { Linkedin, Twitter, Mail } from "lucide-react";
// import adarsh from "../assets/adarsh.png";
// import rishi from "../assets/rishi.png";
// import golu from "../assets/golu.png";
// import umi from "../assets/umi.png";
// import chandu from "../assets/chandu.png";
// import harshit from "../assets/harshit.png";
// import aftab from "../assets/aftab.jpeg";


// // import owner2 from "../../assets/chacha.png";

// export function Team() {
//   const team = [
//     {
//       name: "Adarsh",
//       role: "CEO & Co-Founder",
//       image:
//         // "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDI2NjI0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
//         adarsh,
//       bio: "Visionary leader with 15+ years in tech innovation",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "alex@vsnion.com",
//       },
//     },
//     {
//       name: "Rishi Pathak",
//       role: "CTO & Co-Founder",
//       image:
//         rishi,
//       bio: "Tech architect specializing in AI and scalable systems",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "sarah@vsnion.com",
//       },
//     },
//     {
//       name: "Golu Viswa",
//       role: "Head of Engineering",
//       image:
//         golu,
//       bio: "Full-stack expert passionate about clean code",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "david@vsnion.com",
//       },
//     },
//     {
//       name: "Umesh Verma",
//       role: "Head of Design",
//       image:
//         // "https://images.unsplash.com/photo-1712174766230-cb7304feaafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHRlY2glMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQzNDg0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
//         umi,
//       bio: "Award-winning designer creating beautiful experiences",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "emily@vsnion.com",
//       },
//     },
//     {
//       name: "Chandan Verma",
//       role: "Head of AI Division",
//       image:
//         // "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDI2NjI0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
//         chandu,
//       bio: "ML researcher pioneering next-gen AI solutions",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "marcus@vsnion.com",
//       },
//     },
//     {
//       name: "Harshit Pathak",
//       role: "Head of AI",
//       image:
//         // "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDM0ODQ2OXww&ixlib=rb-4.1.0&q=80&w=1080",
//       harshit,
//         bio: "Product strategist turning ideas into reality",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "lisa@vsnion.com",
//       },
//     },
//     {
//       name: "Aftab Kalim",
//       role: "Full stack AI",
//       image:
//         // "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDM0ODQ2OXww&ixlib=rb-4.1.0&q=80&w=1080",
//       aftab,
//         bio: "Product strategist turning ideas into reality",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "lisa@vsnion.com",
//       },
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % team.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
//   };

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
//   };

//   const handleDragEnd = (
//     _: MouseEvent | TouchEvent | PointerEvent,
//     info: { offset: { x: number } }
//   ) => {
//     if (info.offset.x < -80) nextSlide();
//     if (info.offset.x > 80) prevSlide();
//   };

//   const currentMember = team[currentIndex];

//   return (
//     <section id="team" className="bg-gradient-to-b from-gray-50 to-white py-14">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mb-10 text-center"
//         >
//           <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
//             Meet Our{" "}
//             <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               Team
//             </span>
//           </h2>
//           <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
//             Brilliant minds working together to create extraordinary solutions
//           </p>
//         </motion.div>

//         <div className="relative mx-auto max-w-4xl">
//           <div className="overflow-hidden rounded-2xl">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentMember.name}
//                 initial={{ opacity: 0, x: 40 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -40 }}
//                 transition={{ duration: 0.3 }}
//                 drag="x"
//                 dragConstraints={{ left: 0, right: 0 }}
//                 onDragEnd={handleDragEnd}
//                 className="relative cursor-grab active:cursor-grabbing"
//               >
//                 <div className="grid overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg md:grid-cols-2">
//                   <div className="relative h-[240px] sm:h-[280px] md:h-[340px]">
//                     <img
//                       src={currentMember.image}
//                       alt={currentMember.name}
//                       className="h-full w-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />

//                     <div className="absolute bottom-0 left-0 right-0 p-4 text-white md:p-6">
//                       <h3 className="mb-1 text-xl font-bold md:text-2xl">
//                         {currentMember.name}
//                       </h3>
//                       <p className="text-sm font-medium text-indigo-200">
//                         {currentMember.role}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex flex-col justify-center p-5 md:p-7">
//                     <span className="mb-3 inline-block w-fit rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 sm:text-sm">
//                       Team Member {currentIndex + 1} / {team.length}
//                     </span>

//                     <p className="mb-5 text-sm leading-6 text-gray-600 md:text-base md:leading-7">
//                       {currentMember.bio}
//                     </p>

//                     <div className="flex items-center gap-3">
//                       <a
//                         href={currentMember.social.linkedin}
//                         className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition hover:scale-105 hover:bg-indigo-100"
//                         aria-label={`${currentMember.name} LinkedIn`}
//                       >
//                         <Linkedin className="h-4 w-4" />
//                       </a>

//                       <a
//                         href={currentMember.social.twitter}
//                         className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition hover:scale-105 hover:bg-indigo-100"
//                         aria-label={`${currentMember.name} Twitter`}
//                       >
//                         <Twitter className="h-4 w-4" />
//                       </a>

//                       <a
//                         href={`mailto:${currentMember.social.email}`}
//                         className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition hover:scale-105 hover:bg-indigo-100"
//                         aria-label={`${currentMember.name} Email`}
//                       >
//                         <Mail className="h-4 w-4" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           <div className="mt-5 flex justify-center gap-2">
//             {team.map((member, index) => (
//               <button
//                 key={member.name}
//                 onClick={() => goToSlide(index)}
//                 className={`h-2 rounded-full transition-all ${
//                   currentIndex === index
//                     ? "w-7 bg-indigo-600"
//                     : "w-2 bg-gray-300 hover:bg-gray-400"
//                 }`}
//                 aria-label={`Go to ${member.name}`}
//               />
//             ))}
//           </div>

//           <div className="mt-6 overflow-x-auto pb-2">
//   <div className="flex min-w-max gap-3">
//     {team.map((member, index) => (
//       <button
//         key={member.name}
//         onClick={() => goToSlide(index)}
//         className={`w-36 flex-shrink-0 overflow-hidden rounded-lg border bg-white transition-all ${
//           currentIndex === index
//             ? "border-indigo-600 ring-2 ring-indigo-200"
//             : "border-gray-200 hover:border-gray-300"
//         }`}
//       >
//         <div className="h-16 overflow-hidden">
//           <img
//             src={member.image}
//             alt={member.name}
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className="p-2 text-left">
//           <p className="truncate text-xs font-semibold text-gray-900">
//             {member.name}
//           </p>
//           <p className="truncate text-[10px] text-gray-500">
//             {member.role}
//           </p>
//         </div>
//       </button>
//     ))}
//   </div>
// </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { Linkedin, Twitter, Mail } from "lucide-react";
// import adarsh from "../assets/adarsh.png";
// import rishi from "../assets/rishi.png";
// import golu from "../assets/golu.png";
// import umi from "../assets/umi.png";
// import chandu from "../assets/chandu.png";
// import harshit from "../assets/harshit.png";
// import aftab from "../assets/aftab.jpeg";

// export function Team() {
//   const team = [
//     {
//       name: "Adarsh",
//       role: "CEO & Co-Founder",
//       image: adarsh,
//       bio: "Visionary leader with 15+ years in tech innovation",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "alex@vsnion.com",
//       },
//     },
//     {
//       name: "Rishi Pathak",
//       role: "CTO & Co-Founder",
//       image: rishi,
//       bio: "Tech architect specializing in AI and scalable systems",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "sarah@vsnion.com",
//       },
//     },
//     {
//       name: "Golu Viswa",
//       role: "Head of Engineering",
//       image: golu,
//       bio: "Full-stack expert passionate about clean code",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "david@vsnion.com",
//       },
//     },
//     {
//       name: "Umesh Verma",
//       role: "Head of Design",
//       image: umi,
//       bio: "Award-winning designer creating beautiful experiences",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "emily@vsnion.com",
//       },
//     },
//     {
//       name: "Chandan Verma",
//       role: "Head of AI Division",
//       image: chandu,
//       bio: "ML researcher pioneering next-gen AI solutions",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "marcus@vsnion.com",
//       },
//     },
//     {
//       name: "Harshit Pathak",
//       role: "Head of AI",
//       image: harshit,
//       bio: "Product strategist turning ideas into reality",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "lisa@vsnion.com",
//       },
//     },
//     {
//       name: "Aftab Kalim",
//       role: "Full stack AI",
//       image: aftab,
//       bio: "Product strategist turning ideas into reality",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "lisa@vsnion.com",
//       },
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % team.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
//   };

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
//   };

//   const handleDragEnd = (
//     _: MouseEvent | TouchEvent | PointerEvent,
//     info: { offset: { x: number } }
//   ) => {
//     if (info.offset.x < -80) nextSlide();
//     if (info.offset.x > 80) prevSlide();
//   };

//   const currentMember = team[currentIndex];

//   return (
//     <section id="team" className="bg-gradient-to-b from-gray-50 to-white py-14">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mb-10 text-center"
//         >
//           <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
//             Meet Our{" "}
//             <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               Team
//             </span>
//           </h2>
//           <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
//             Brilliant minds working together to create extraordinary solutions
//           </p>
//         </motion.div>

//         <div className="relative mx-auto max-w-3xl">
//           <div className="overflow-hidden rounded-xl">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentMember.name}
//                 initial={{ opacity: 0, x: 40 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -40 }}
//                 transition={{ duration: 0.3 }}
//                 drag="x"
//                 dragConstraints={{ left: 0, right: 0 }}
//                 onDragEnd={handleDragEnd}
//                 className="relative cursor-grab active:cursor-grabbing"
//               >
//                 <div className="grid overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md md:grid-cols-2">
//                   <div className="relative h-[200px] sm:h-[220px] md:h-[260px]">
//                     <img
//                       src={currentMember.image}
//                       alt={currentMember.name}
//                       className="h-full w-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />

//                     <div className="absolute bottom-0 left-0 right-0 p-3 text-white md:p-4">
//                       <h3 className="mb-1 text-lg font-bold md:text-xl">
//                         {currentMember.name}
//                       </h3>
//                       <p className="text-xs font-medium text-indigo-200 md:text-sm">
//                         {currentMember.role}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex flex-col justify-center p-4 md:p-5">
//                     <span className="mb-2 inline-block w-fit rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold text-indigo-700 sm:text-xs">
//                       Team Member {currentIndex + 1} / {team.length}
//                     </span>

//                     <p className="mb-4 text-xs leading-5 text-gray-600 sm:text-sm md:text-sm md:leading-6">
//                       {currentMember.bio}
//                     </p>

//                     <div className="flex items-center gap-2">
//                       <a
//                         href={currentMember.social.linkedin}
//                         className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition hover:scale-105 hover:bg-indigo-100"
//                         aria-label={`${currentMember.name} LinkedIn`}
//                       >
//                         <Linkedin className="h-4 w-4" />
//                       </a>

//                       <a
//                         href={currentMember.social.twitter}
//                         className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition hover:scale-105 hover:bg-indigo-100"
//                         aria-label={`${currentMember.name} Twitter`}
//                       >
//                         <Twitter className="h-4 w-4" />
//                       </a>

//                       <a
//                         href={`mailto:${currentMember.social.email}`}
//                         className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition hover:scale-105 hover:bg-indigo-100"
//                         aria-label={`${currentMember.name} Email`}
//                       >
//                         <Mail className="h-4 w-4" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           <div className="mt-5 flex justify-center gap-2">
//             {team.map((member, index) => (
//               <button
//                 key={member.name}
//                 onClick={() => goToSlide(index)}
//                 className={`h-2 rounded-full transition-all ${
//                   currentIndex === index
//                     ? "w-7 bg-indigo-600"
//                     : "w-2 bg-gray-300 hover:bg-gray-400"
//                 }`}
//                 aria-label={`Go to ${member.name}`}
//               />
//             ))}
//           </div>

        

//           <div className="mt-6 w-full overflow-x-auto pb-3">
//   <div className="flex w-full gap-3">
//     {team.map((member, index) => (
//       <button
//         key={member.name}
//         onClick={() => goToSlide(index)}
//         className={`min-w-[128px] sm:min-w-[144px] flex-shrink-0 overflow-hidden rounded-lg border bg-white transition-all ${
//           currentIndex === index
//             ? "border-indigo-600 ring-2 ring-indigo-200"
//             : "border-gray-200 hover:border-gray-300"
//         }`}
//       >
//         <div className="h-14 overflow-hidden sm:h-16">
//           <img
//             src={member.image}
//             alt={member.name}
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className="p-2 text-left">
//           <p className="truncate text-[11px] font-semibold text-gray-900 sm:text-xs">
//             {member.name}
//           </p>
//           <p className="truncate text-[10px] text-gray-500">
//             {member.role}
//           </p>
//         </div>
//       </button>
//     ))}
//   </div>
// </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Twitter, Mail } from "lucide-react";
import adarsh from "../assets/adarsh.png";
import rishi from "../assets/rishi.png";
import golu from "../assets/golu.png";
import umi from "../assets/umi.png";
import chandu from "../assets/chandu.png";
import harshit from "../assets/harshit.png";
import aftab from "../assets/aftab.jpeg";

export function Team() {
  const team = [
    {
      name: "Adarsh",
      role: "CEO & Co-Founder",
      image: adarsh,
      bio: "Visionary leader with 3+ years in tech innovation",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "adarshv978@gmail.com",
      },
    },
    {
      name: "Rishi Pathak",
      role: "CTO & Co-Founder",
      image: rishi,
      bio: "Tech architect specializing in AI and scalable systems",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@vsnion.com",
      },
    },
    {
      name: "Golu Viswa",
      role: "Head of Engineering",
      image: golu,
      bio: "Full-stack expert passionate about clean code",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@vsnion.com",
      },
    },
    {
      name: "Umesh Verma",
      role: "Head of Design",
      image: umi,
      bio: "Award-winning designer creating beautiful experiences",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@vsnion.com",
      },
    },
    {
      name: "Chandan Verma",
      role: "Head of AI Division",
      image: chandu,
      bio: "ML researcher pioneering next-gen AI solutions",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "marcus@vsnion.com",
      },
    },
    {
      name: "Harshit Pathak",
      role: "Head of AI",
      image: harshit,
      bio: "Product strategist turning ideas into reality",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@vsnion.com",
      },
    },
    {
      name: "Aftab Kalim",
      role: "Full stack AI",
      image: aftab,
      bio: "Product strategist turning ideas into reality",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@vsnion.com",
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % team.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } }
  ) => {
    if (info.offset.x < -80) nextSlide();
    if (info.offset.x > 80) prevSlide();
  };

  const currentMember = team[currentIndex];

  return (
    <section id="team" className="bg-gradient-to-b from-gray-50 to-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
            Brilliant minds working together to create extraordinary solutions
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMember.name}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                className="relative cursor-grab active:cursor-grabbing"
              >
                <div className="grid overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md md:grid-cols-2">
                  <div className="relative h-[200px] sm:h-[220px] md:h-[260px]">
                    <img
                      src={currentMember.image}
                      alt={currentMember.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white md:p-4">
                      <h3 className="mb-1 text-lg font-bold md:text-xl">
                        {currentMember.name}
                      </h3>
                      <p className="text-xs font-medium text-indigo-200 md:text-sm">
                        {currentMember.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-4 md:p-5">
                    <span className="mb-2 inline-block w-fit rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold text-indigo-700 sm:text-xs">
                      Team Member {currentIndex + 1} / {team.length}
                    </span>

                    <p className="mb-4 text-xs leading-5 text-gray-600 sm:text-sm md:text-sm md:leading-6">
                      {currentMember.bio}
                    </p>

                    <div className="flex items-center gap-2">
                      <a
                        href={currentMember.social.linkedin}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition hover:scale-105 hover:bg-indigo-100"
                        aria-label={`${currentMember.name} LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>

                      <a
                        href={currentMember.social.twitter}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition hover:scale-105 hover:bg-indigo-100"
                        aria-label={`${currentMember.name} Twitter`}
                      >
                        <Twitter className="h-4 w-4" />
                      </a>

                      <a
                        href={`mailto:${currentMember.social.email}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition hover:scale-105 hover:bg-indigo-100"
                        aria-label={`${currentMember.name} Email`}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {team.map((member, index) => (
              <button
                key={member.name}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "w-7 bg-indigo-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to ${member.name}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 w-full max-w-full overflow-x-auto pb-3">
          <div className="inline-flex min-w-full gap-3">
            {team.map((member, index) => (
              <button
                key={member.name}
                onClick={() => goToSlide(index)}
                className={`min-w-[140px] flex-shrink-0 overflow-hidden rounded-lg border bg-white transition-all sm:min-w-[160px] ${
                  currentIndex === index
                    ? "border-indigo-600 ring-2 ring-indigo-200"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="h-16 overflow-hidden sm:h-20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-2 text-left">
                  <p className="truncate text-xs font-semibold text-gray-900">
                    {member.name}
                  </p>
                  <p className="truncate text-[10px] text-gray-500">
                    {member.role}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}