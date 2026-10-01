import { CalendarIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const CertificationCard = ({ icon, title, platform, issueDate, link }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-white w-[300px] md:w-full rounded-lg border border-[#DDDDDD] p-6 duration-300 cursor-pointer"
    >
      <img src={icon} className='mb-6' alt='icon' loading='lazy' />

      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-[#555555] mb-3">{platform}</p>

      <div className="flex items-center text-xs text-[#555555] mb-4">
        <CalendarIcon className="w-3 h-3 mr-1" />
        <span>Issued: {issueDate}</span>
      </div>

      <a href={link} className="w-full block text-center py-2 px-4 bg-white border border-[#DDDDDD] rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
        View Certificate
      </a>
    </motion.div>
  )
}

const cardCertifications = () => {
  const certificates = [
    {
      icon: 'hackerank.png',
      title: 'JavaScript (Intermediate)',
      platform: 'HackerRank',
      issueDate: '20 Jul, 2023',
      bgColor: 'bg-gray-900',
      link: "#"
    },
    {
      icon: 'hackerank.png',
      title: 'React (Basic)',
      platform: 'HackerRank',
      issueDate: '19 Jul, 2023',
      bgColor: 'bg-emerald-500',
      link: "#"
    },
    {
      icon: 'hackerank.png',
      title: 'JavaScript (Basic)',
      platform: 'HackerRank',
      issueDate: '20 Jul, 2023',
      bgColor: 'bg-gray-900',
      link: "#"
    },
    {
      icon: 'freecodecamp.png',
      title: 'Responsive Web Design',
      platform: 'freeCodeCamp',
      issueDate: '25 Apr, 2021',
      bgColor: 'bg-gray-900',
      link: "#"
    },
  ]

  return (
    <>
      <div className="w-full lg:hidden">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1.14}
          spaceBetween={20}
          pagination={{ clickable: true }}
          centeredSlides={false}
          className="pb-10"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              <CertificationCard
                icon={cert.icon}
                title={cert.title}
                platform={cert.platform}
                issueDate={cert.issueDate}
                link={cert.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert, index) => (
          <CertificationCard
            key={index}
            icon={cert.icon}
            title={cert.title}
            platform={cert.platform}
            issueDate={cert.issueDate}
            link={cert.link}
          />
        ))}
      </div>
    </>
  )
}

export default cardCertifications
