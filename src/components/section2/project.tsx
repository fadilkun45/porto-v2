import { motion } from "framer-motion";

const projects = [
  {
    title: "Segoro Company Profile",
    desc: "Developed Segoro Company Profile, an informational platform for a company in the mining industry and port development.",
    image: "segoro.png",
    link: "#",
  },
  {
    title: "ILCS Intra",
    desc: "Developed a Portal Login for Intranet WiFi Access in ILCS Pelindo, featuring an employee forum, team directory, regulations, and other functionalities.",
    image: "ilcs.png",
    link: "#",
  },
  {
    title: "Remote for Hive Company Profile",
    desc: "Developed Remote for Hive Company Profile, a virtual assistant platform for all users with a worldwide user base.",
    image: "remoteforhive.png",
    link: "https://remoteforhive.com",
  },
];

export default function ExploreProjects() {
  return (
    <div className="mt-14 grid lg:grid-cols-3 gap-5 text-left">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="duration-300"
            >
              <div className="overflow-hidden rounded-xl">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="w-full"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.35 }}
                />
              </div>

              <h3 className="text-xl font-semibold mt-5 dark:text-white">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-2 dark:text-[#AAAAAA]">{p.desc}</p>

              <a
                href={p.link}
                target="_blank"
                className="inline-flex gap-2 mt-6 text-sm  px-6 py-4 border border-[#DDDDDD] rounded-full bg-white text-[#050505] font-bold transition"
              >
                View Project ↗
              </a>
            </motion.div>
          ))}
        </div>
  );
}
