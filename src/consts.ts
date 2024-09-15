import type { RelevantGitHubRepoResponse } from './types'
import { fetchProjects } from './utils'

export const AUTHOR = 'Alejandro Perez Pujante'
export const HEAD_KEYWORDS = [
	'portfolio',
	'projects',
	'web',
	'frontend',
	'vue',
	'nuxt',
	'javascript',
	'html',
	'css',
	'typescript',
	'node',
]

export const PROJECTS: RelevantGitHubRepoResponse[] = await fetchProjects()
export const PROJECT_LIST_LINK = 'https://github.com/alejandroperezpujante?tab=repositories'
