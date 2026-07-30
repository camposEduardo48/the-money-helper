import type { ReactNode } from "react"

export const Container = ({ children }: { children: ReactNode }) => {
	return (
		<main className="flex flex-col align-center h-full w-full mt-14 overflow-y-auto">
			{children}
		</main>
	)
}
