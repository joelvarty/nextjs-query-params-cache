interface PageProps {
	params: {
		slug: string[]
	}
	searchParams: {[key: string]: string | string[] | undefined}
}

export const revalidate = 60
export const dynamicParams = true

export async function generateStaticParams() {
	const paths = [{params: {slug: ["test"]}}]
	return paths
}

export default function Page({params}: PageProps) {
	const dateStr = new Date().toISOString()
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div>This is a dynamic page</div>
				<div>Generated: {dateStr}</div>
				<div>Slug: {params.slug.join("/")}</div>
			</main>
		</div>
	)
}
