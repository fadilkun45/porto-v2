import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

const ExperienceCard = ({ company, role, period, logo, logoBackground, isExpanded, onToggle, children, image }: any) => {
	return (
		<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden dark:bg-[#1A1A1A] dark:border-[#3A3A3A]">
			<button onClick={onToggle} className="w-full p-6 flex items-center cursor-pointer justify-between transition-colors duration-200">
				<div className="flex items-center gap-4">
					{image ? <img src={image} alt='logoCompany' /> : <div className={`w-12 h-12 ${logoBackground ? logoBackground : 'bg-gray-100'} rounded-lg flex items-center justify-center flex-shrink-0`}>{logo}</div>}
					<div className="text-left">
						<h3 className="font-semibold text-gray-900 dark:text-white">{company}</h3>
						<p className="text-sm text-gray-600 dark:text-[#BBBBBB]">
							{role} • {period}
						</p>
					</div>
				</div>
				<motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
					<ChevronDownIcon className="w-5 h-5 text-[#A6ACBA]" />
				</motion.div>
			</button>

			<AnimatePresence>
				{isExpanded && (
					<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
						<div className="px-6 pb-6 border-t border-gray-100 dark:border-[#2A2A2A]">{children}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

const TagList = ({ tags, title }: any) => (
	<div className="mb-4">
		<div className="flex items-center gap-2 mb-3">
			<div className={`size-5 rounded-full border-2 ${title === "Tech" ? "border-[#FFC517]" : "border-[#5476CC] dark:border-[#FFC517]"} flex items-center justify-center`} />
			<h4 className={`text-sm font-semibold ${title === "Tech" ? "text-[#FFC517]" : "text-[#5476CC] dark:text-[#FFC517]"}`}>{title}</h4>
		</div>
		<div className="flex flex-wrap gap-2">
			{tags.map((tag: string, index: number) => (
				<motion.span key={index} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: index * 0.05 }} className={`px-3 py-1 bg-blue-50 text-[#5476CC] text-xs dark:bg-[#FFC5171A] dark:text-[#FFC517] font-medium rounded-full`}>
					{tag}
				</motion.span>
			))}
		</div>
	</div>
);

export default function WorkExperience() {
	const [expandedCard, setExpandedCard] = useState(null);

	const featuredExperience = {
		image: 'wizrd-logo.png',
		company: 'PT Mulia Informasi Teknologi (part of serba mulia group)',
		role: 'Technical Lead Frontend Developer (unofficial)',
		period: 'Nov 2024 - present',
		isCurrent: true,
		description: 'as a Technical lead I encourage team and together make a goal for all project and other I am maker decision for future development and consultant to stakeholder for decision best practice technology in future for long term project as a Technical lead.',
		contributions: [
			'Transformation of the ERP project (Promas) from a monolithic architecture to a micro-frontend poly-repo structure',
			'Supervised project timelines for ERP (Promas)',
			'Successfully managed the development and deployment of the new ERP PajakMas system',
			'Discussed with project managers to distribute sprint points for the team to get timeline efficiency',
			'Created an efficient Infrastructure for development environments with automated deployment using GitLab CI and Jenkins',
			'Created an efficient infrastructure for production environments with a load balancer to handle zero downtime during the deployment process',
		],
		projects: ['Promas', 'Denain website', 'OCR Compro', 'Supplier', 'Pajakmas', 'Pajakmas Compro', 'Cashlux Compro'],
		tech: ["ReactJS", "TypeScript", "Redux Toolkit", "TailwindCSS", "Micro-Frontend", "GitLab CI", "Jenkins", "Docker", "Nginx", "Zustand" ],
	};

	const earlierExperiences = [
		{
			id: 'gadai',
			logo: 'GM',
			image: 'gadaimas-logo.png',
			company: 'Gadai MAS (part of serba mulia group)',
			role: 'Frontend Developer',
			period: 'Jan 2024 - present',
			description: 'Developed and maintained frontend applications for Gadai MAS using modern web technologies.',
			contributions: ['Built responsive web applications', 'Implemented modern UI/UX designs', 'Collaborated with backend team'],
			techstacks: [],
			projects: ['Promas', 'Gadai Mas Website', 'Apk Approval', 'Onboarding'],
			tech: ["ReactJS", "TypeScript", "Redux Toolkit", "TailwindCSS"],
		},
		{
			id: 'fastcomedia',
			logo: 'F',
			logoColor: 'text-[#01E1AA]',
			logoBackground: 'bg-[#D8FFF6]',
			company: 'Fastcomedia',
			role: 'Frontend Developer Freelancer',
			period: 'March 2020 - May 2022',
			description: 'Developed a Community School Project, which includes a landing page, news page, and music streaming feature.',
			contributions: ['Developed Srise Mobile Application, which includes PPOB (Payment Point Online Bank) features such as bill payments, mobile credit purchases, and electricity token purchases.', 'Developed a Point of Sales Product for Fastcomedia, designed for UMKM stores and other business unit stakeholders.'],
			projects: ['Srise Company Profile', 'POS (point of sales)'],
			tech: [],
		},
		{
			id: 'tomcat',
			logo: 'T',
			logoColor: 'text-[#2681E6]',
			logoBackground: 'bg-[#EFF7FF]',
			company: 'TomcatSquad',
			role: 'Frontend Developer in School Community Group',
			period: 'Nov 2020 - Aug 2021',
			description: 'Contributed to school community projects',
			contributions: ['Developed a Community School Project, which includes a landing page, news page, and music streaming feature.', 'Developed a Portal Website for Event Management, which provides information on current events, allows team registration, and enables users to join events.', 'Mentored junior developers'],
			projects: ['telsRadio', 'telsEsport'],
			tech: ["Html", "CSS", "Javascript", "ReactJS", "TailwindCSS"],
		},
	];

	const toggleCard = (cardId: any) => {
		setExpandedCard(expandedCard === cardId ? null : cardId);
	};

	return (
		<div>
			<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-8">
				<div className="flex items-center gap-2 mb-4 ">
					<div className="w-6 h-6 rounded-full border-2 border-[#5476CC] flex dark:border-[#FFC517] items-center justify-center"></div>
					<h2 className="text-xl font-bold text-[#5476CC] dark:text-[#FFC517]">Featured Experience</h2>
				</div>

				<div className="bg-[#F9FBFF] border-2 border-[#D6E1FF] dark:bg-[#1A1A1A] dark:border-[#3A3A3A] rounded-lg p-6 mb-6">
					<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
						<div className="flex flex-col md:flex-row items-start gap-4">
							<img src={featuredExperience.image} alt='experinceLogo' />
							<div>
								<h3 className="font-semibold text-gray-900 mb-1 dark:text-white">{featuredExperience.company}</h3>
								<p className="text-sm text-gray-600 dark:text-[#BBBBBB]">
									{featuredExperience.role} • {featuredExperience.period}
								</p>
							</div>
						</div>
						{featuredExperience.isCurrent && <span className="inline-block px-3 py-1 bg-[#5476CC] text-white text-xs font-semibold rounded-full dark:bg-[#FFC517] dark:text-[#151515] self-start">Current</span>}
					</div>

					<p className="text-gray-700 text-sm leading-relaxed mb-6 dark:text-[#BBBBBB]">{featuredExperience.description}</p>

					{featuredExperience.contributions.length > 0 && (
						<div className="mb-6">
							<div className="flex items-center gap-2 mb-3">
								<div className="size-5 rounded-full border-2 border-[#5476CC] flex items-center justify-center dark:border-[#FFC517]" />
								<h4 className="text-sm font-semibold text-[#5476CC] dark:text-[#FFC517]">Contribution</h4>
							</div>
							<ul className="space-y-2">
								{featuredExperience.contributions.map((item, index) => (
									<motion.li key={index} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * index }} className="flex items-start gap-2 text-sm text-gray-700 dark:text-[#BBBBBB]">
										<span className="w-1.5 h-1.5 text-[#5476CC] rounded-full mt-2 flex-shrink-0"></span>
										<span>{item}</span>
									</motion.li>
								))}
							</ul>
						</div>
					)}

					{featuredExperience.projects.length > 0 && <TagList title="Project" tags={featuredExperience.projects} />}
					{featuredExperience.tech.length > 0 && <TagList title="Tech" tags={featuredExperience.tech} />}
				</div>
			</motion.div>

			<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
				<div className="flex items-center gap-2 mb-4">
					<div className="w-6 h-6 rounded-full border-2 border-[#E5E7EB] flex dark:border-[#BBBBBB] items-center justify-center">
						<div className="w-3 h-3  rounded-full"></div>
					</div>
					<h2 className="text-xl font-bold text-gray-900 dark:text-white">Earlier Experience</h2>
				</div>

				<div className="space-y-4">
					{earlierExperiences.map((experience) => (
						<ExperienceCard image={experience.image} logoBackground={experience.logoBackground} key={experience.id} company={experience.company} role={experience.role} period={experience.period} logo={<span className={`text-xl font-bold  ${experience.logoColor}`}>{experience.logo}</span>} isExpanded={expandedCard === experience.id}  onToggle={() => toggleCard(experience.id)}>
							<p className="text-sm text-[#555555] mt-4 mb-4 dark:text-[#BBBBBB]">{experience.description}</p>

							{experience.contributions.length > 0 && (
								<div className="mb-4">
									<div className="flex items-center gap-2 mb-3">
										<div className="size-5 rounded-full border-2 border-[#5476CC] flex items-center justify-center dark:border-[#FFC517]" />
										<h4 className="text-sm font-semibold text-[#555555] dark:text-[#FFC517]">Contribution</h4>
									</div>
									<ul className="space-y-2">
										{experience.contributions.map((item, index) => (
											<motion.li key={index} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * index }} className="flex items-start gap-2 text-sm text-[#555555] dark:text-[#BBBBBB]">
												<span className="w-1.5 h-1.5 bg-text-[#5476CC] rounded-full mt-2 flex-shrink-0"></span>
												<span>{item}</span>
											</motion.li>
										))}
									</ul>
								</div>
							)}

							{experience.projects.length > 0 && <TagList title="Project" tags={experience.projects} />}
							{experience?.tech.length > 0 && <TagList title="Tech" tags={experience?.tech} />}
						</ExperienceCard>
					))}
				</div>
			</motion.div>
		</div>
	);
}
