export interface BaseBlockProps {
	id: string
	title: string
	subtitle?: string
	nextBlockId?: string
}

export interface RelevantGitHubRepoResponse {
	name: string
	description: string
	html_url: string
	homepage: string | null
	topics: string[]
}
