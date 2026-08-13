import { IconX } from "@tabler/icons-react"
import type { ReactNode } from "react"

interface ModalProps {
	children: ReactNode
	onClick: () => void
	title: string
}

export const Modal = ({ children, onClick, title }: ModalProps) => {
	const footerDate = new Date()
	return (
		<main className="flex z-40 box-border fixed top-0 left-0 bg-black/30 items-center justify-center h-screen w-screen">
			<section className="flex z-50 inset-0 flex-col box-content rounded-2xl h-auto w-100 items-center bg-slate-800 border border-white/10 shadow-2xl">
				<header className="flex h-auto w-full p-3 justify-between rounded-tr-2xl rounded-tl-2xl bg-white/20">
					<h2>{title}</h2>
					<nav>
						<div className="text-white/30 cursor-pointer" onClick={onClick}>
							<IconX size={20} />
						</div>
					</nav>
				</header>
				<article className="flex items-center justify-center h-auto w-full flex-col p-4">
					{children}
				</article>
				<small>
					<span>Login antes de exibir conteudo</span>
				</small>
				{/* <footer>{footerDate}</footer> */}
			</section>
		</main>
	)
}
