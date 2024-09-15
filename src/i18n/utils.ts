import { DEFAULT_LANGUAGE, SHOW_DEFAULT_LANG, UI_STRINGS } from './ui'

export function getLangFromUrl(url: URL) {
	let [, lang] = url.pathname.split('/')
	lang = lang?.toLowerCase()
	if (lang && lang in UI_STRINGS) {
		return lang as keyof typeof UI_STRINGS
	}
	return DEFAULT_LANGUAGE
}

export function useTranslatedPath(lang: keyof typeof UI_STRINGS) {
	return function translatePath(path: string, l: string = lang) {
		return !SHOW_DEFAULT_LANG && l === DEFAULT_LANGUAGE ? path : `/${l}${path}`
	}
}

export function useTranslations(lang: keyof typeof UI_STRINGS) {
	return function t(key: keyof typeof UI_STRINGS[typeof DEFAULT_LANGUAGE]) {
		return UI_STRINGS[lang][key] || UI_STRINGS[DEFAULT_LANGUAGE][key]
	}
}
