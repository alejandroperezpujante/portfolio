import { AUTHOR } from '../consts'

export const LANGUAGES = {
	en: 'English',
	es: 'Español',
}
export type LanguageKey = keyof typeof LANGUAGES
export type Language = typeof LANGUAGES[LanguageKey]

export const SHOW_DEFAULT_LANG = false
export const DEFAULT_LANGUAGE: LanguageKey = 'en'

export const LANGUAGE_FLAGS = {
	en: '🇬🇧',
	es: '🇪🇸',
}

export const UI_STRINGS = {
	en: {
		'head.title': `${AUTHOR} - Portfolio`,
		'head.description': `Portfolio of ${AUTHOR}, a web developer specialized in frontend technologies and web accessibility.`,

		'home.presentation.link': 'presentation',
		'home.presentation.title': `Hello! I am ${AUTHOR}`,
		'home.presentation.description.position': 'A versatile Full-stack Developer with expertise in Vue.js and a passion for DevOps practices.',
		'home.presentation.description.mission': 'I am committed to delivering robust, scalable solutions that bridge front-end aesthetics with back-end functionality.',

		'home.about.link': 'about',
		'home.about.title': 'About me',
		'home.about.core.title': 'Core skills',
		'home.about.core': {
			web: '🔧 Front-End Development: Proficient in HTML5, CSS3, JavaScript, and TypeScript',
			vue: '⚡ Vue.js Ecosystem: Deep understanding and extensive experience with Vue.js, Vuex/Pinia, Vue Router, and Nuxt.js',
			node: '🛠️ Full-Stack Capabilities: Solid knowledge of backend development with Node.js, Express.js, and RESTful API design',
			git: '🔄 Version Control: Git, GitHub, GitLab',
			responsive: '📱 Responsive Design: Ensuring optimal user experience across all devices and screen sizes',
			testing: '🧪 Testing: Unit testing with Jest, end-to-end testing with Cypress',
		},
		'home.about.additional.title': 'Additional skills',
		'home.about.additional': {
			angular: '🅰️ Angular: Practical work experience, allowing for versatility in project requirements',
			ui: '🎨 UI Libraries: Angular Material, Vuetify, Shadcn',
			performance: '🚀 Performance Optimization: Lighthouse audits, lazy loading, code splitting',
		},

		'home.projects.link': 'projects',
		'home.projects.title': 'Projects',
		'home.projects.description': 'But enough about me, here you can see some of my experience in action!',
		'home.projects.more': 'Want to see more? Go to my GitHub!',

		'home.contact.link': 'contact',
		'home.contact.title': 'Contact me',
		'home.contact.description': 'Interested in working together? Feel free to contact me through the following links.',
		'home.contact.email.title': 'Email',
		'home.contact.web.title': 'Social networks',
	},
	es: {
		'head.title': `${AUTHOR} - Porfolio`,
		'head.description': `Porfolio de ${AUTHOR}, un desarrollador web especializado en tecnologías frontend y accesibilidad web.`,

		'home.presentation.link': 'presentacion',
		'home.presentation.title': `¡Hola! Soy ${AUTHOR}`,
		'home.presentation.description.position': 'Un desarrollador Full-stack versátil con experiencia en Vue.js y una pasión por el DevOps.',
		'home.presentation.description.mission': 'Comprometido en ofrecer soluciones robustas, escalables que unen la estética del frontend con la funcionalidad del backend.',

		'home.about.link': 'sobre-mi',
		'home.about.title': 'Sobre mí',
		'home.about.core.title': 'Habilidades principales',
		'home.about.core': {
			web: '🔧 Desarrollo Front-End: Dominio de HTML5, CSS3, JavaScript y TypeScript',
			vue: '⚡ Ecosistema Vue.js: Conocimiento profundo y amplia experiencia con Vue.js, Vuex/Pinia, Vue Router y Nuxt.js',
			node: '🛠️ Capacidades Full-Stack: Conocimiento sólido del desarrollo backend con Node.js, Express.js y diseño de API RESTful',
			git: '🔄 Control de versiones: Git, GitHub, GitLab',
			responsive: '📱 Responsive Design: Garantizar una experiencia de usuario óptima en todos los dispositivos y tamaños de pantalla',
			testing: '🧪 Testing: Pruebas unitarias con Jest, pruebas end-to-end con Cypress',
		},
		'home.about.additional': {
			title: 'Habilidades adicionales',
			angular: '🅰️ Angular: Experiencia práctica, permitiendo versatilidad en los requisitos del proyecto',
			ui: '🎨 Librerías de UI: Angular Material, Vuetify, Shadcn',
			performance: '🚀 Optimización de rendimiento: Auditorías de Lighthouse, lazy loading, code splitting',
		},

		'home.projects.link': 'proyectos',
		'home.projects.title': 'Proyectos',
		'home.projects.description': 'Pero suficiente de hablar sobre mí, aquí puedes ver algunos de mis proyectos en acción',
		'home.projects.more': '¿Quieres ver más? ¡Ven a mi GitHub! ',

		'home.contact.link': 'contacto',
		'home.contact.title': 'Contacto',
		'home.contact.description': '¿Interesado en trabajar juntos? ¡No dudes en contactarme a través de los siguientes enlaces!',
		'home.contact.email.title': 'Correo electrónico',
		'home.contact.web.title': 'Redes sociales',
	},
} as const
