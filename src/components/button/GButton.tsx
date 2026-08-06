/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
import type { ReactNode } from "react"

interface ButtonTypes {
	children: ReactNode
	onClick?: () => void
}

export const GlassButton = ({ children, onClick }: ButtonTypes) => {
	return (
		<button
			onClick={onClick}
			className="flex align-center justify-center rounded-lg cursor-pointer transition duration-350 hover:scale-x-110 hover:scale-y-110 active:text-white/20 p-1 bg-white/5 hover:bg-white/10 outline-none text-amber-50"
		>
			{children}
		</button>
	)
}
