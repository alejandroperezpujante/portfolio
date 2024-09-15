import type { RelevantGitHubRepoResponse } from './types'
import { titleCase } from '@luca/cases'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs))
}

export async function fetchProjects(): Promise<RelevantGitHubRepoResponse[]> {
	const response = await fetch('https://api.github.com/users/alejandroperezpujante/repos?per_page=5')
	const data = await response.json()

	return data.map((repo: RelevantGitHubRepoResponse) => ({
		...repo,
		description: repo.description ?? '',
		name: titleCase(repo.name),
	}))
}
