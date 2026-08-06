import {
	IconCashBanknoteMinus,
	IconCashBanknotePlus,
	IconEyeBolt,
	IconTrash,
	IconUserCircle,
} from "@tabler/icons-react"
import type { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export const Section = ({ children }: Props) => {
	return (
		<section className="flex flex-col border h-full w-full border-emerald-600 overflow-y-scroll scroll-custom">
			<div className="flex border border-red-600">
				<aside className="flex flex-col justify-start p-1">
					<div className="flex align-center justify-center p-2">
						<IconUserCircle color="white" stroke={0.5} size={80} />
					</div>
					<div className="flex align-center justify-center border">
						<p>username</p>
					</div>
					<div className="flex align-center justify-center border">
						<span>icon</span>
					</div>
				</aside>
				{children}
				<nav className="flex flex-col justify-center pr-2 pl-2">
					<div className="flex align-center justify-center text-white/20 hover:text-white/30 active:text-red-800 cursor-pointer">
						<IconEyeBolt size={28} stroke={2} />
					</div>
					<div
						className="flex align-center justify-center pr-2 pl-2 text-white/20 hover:text-white/30 active:text-red-800 cursor-pointer"
						title="ao clicar abrir modal para digitar valor que subtraiu a divida."
					>
						<IconCashBanknotePlus size={28} stroke={2} />
					</div>
					<div
						className="flex align-center justify-center pr-2 pl-2 text-white/20 hover:text-white/30 active:text-red-800 cursor-pointer"
						title="ao clicar abrir modal para digitar valor que subtraiu a divida."
					>
						<IconCashBanknoteMinus size={28} stroke={2} />
					</div>
					<div className="flex align-center justify-center text-white/20 hover:text-white/30 active:text-red-800 pr-2 pl-2 cursor-pointer">
						<IconTrash size={28} stroke={2} />
					</div>
				</nav>
			</div>
			<div className="flex border border-red-600">
				<aside className="flex flex-col justify-start p-1">
					<div className="flex align-center justify-center p-2">
						<IconUserCircle color="white" stroke={0.5} size={80} />
					</div>
					<div className="flex align-center justify-center border">
						<p>username</p>
					</div>
					<div className="flex align-center justify-center border">
						<span>icon</span>
					</div>
				</aside>
				{children}
				<nav className="flex flex-col justify-center pr-2 pl-2">
					<div className="flex align-center justify-center text-white/20 hover:text-white/30 active:text-red-800 cursor-pointer">
						<IconEyeBolt size={28} stroke={2} />
					</div>
					<div
						className="flex align-center justify-center pr-2 pl-2 text-white/20 hover:text-white/30 active:text-red-800 cursor-pointer"
						title="ao clicar abrir modal para digitar valor que subtraiu a divida."
					>
						<IconCashBanknotePlus size={28} stroke={2} />
					</div>
					<div
						className="flex align-center justify-center pr-2 pl-2 text-white/20 hover:text-white/30 active:text-red-800 cursor-pointer"
						title="ao clicar abrir modal para digitar valor que subtraiu a divida."
					>
						<IconCashBanknoteMinus size={28} stroke={2} />
					</div>
					<div className="flex align-center justify-center text-white/20 hover:text-white/30 active:text-red-800 pr-2 pl-2 cursor-pointer">
						<IconTrash size={28} stroke={2} />
					</div>
				</nav>
			</div>
			<div className="flex border border-red-600">
				<aside className="flex flex-col justify-start p-1">
					<div className="flex align-center justify-center p-2">
						<IconUserCircle color="white" stroke={0.5} size={80} />
					</div>
					<div className="flex align-center justify-center border">
						<p>username</p>
					</div>
					<div className="flex align-center justify-center border">
						<span>icon</span>
					</div>
				</aside>
				{children}
				<nav className="flex flex-col justify-center pr-2 pl-2">
					<div className="flex align-center justify-center text-white/20 hover:text-white/30 active:text-red-800 cursor-pointer">
						<IconEyeBolt size={28} stroke={2} />
					</div>
					<div
						className="flex align-center justify-center pr-2 pl-2 text-white/20 hover:text-white/30 active:text-red-800 cursor-pointer"
						title="ao clicar abrir modal para digitar valor que subtraiu a divida."
					>
						<IconCashBanknotePlus size={28} stroke={2} />
					</div>
					<div
						className="flex align-center justify-center pr-2 pl-2 text-white/20 hover:text-white/30 active:text-red-800 cursor-pointer"
						title="ao clicar abrir modal para digitar valor que subtraiu a divida."
					>
						<IconCashBanknoteMinus size={28} stroke={2} />
					</div>
					<div className="flex align-center justify-center text-white/20 hover:text-white/30 active:text-red-800 pr-2 pl-2 cursor-pointer">
						<IconTrash size={28} stroke={2} />
					</div>
				</nav>
			</div>
			<div className="flex border border-red-600">
				<aside className="flex flex-col justify-start p-1">
					<div className="flex align-center justify-center p-2">
						<IconUserCircle color="white" stroke={0.5} size={80} />
					</div>
					<div className="flex align-center justify-center border">
						<p>username</p>
					</div>
					<div className="flex align-center justify-center border">
						<span>icon</span>
					</div>
				</aside>
				{children}
				<nav className="flex flex-col justify-center pr-2 pl-2">
					<div className="flex align-center justify-center text-white/20 hover:text-white/30 active:text-red-800 cursor-pointer">
						<IconEyeBolt size={28} stroke={2} />
					</div>
					<div
						className="flex align-center justify-center pr-2 pl-2 text-white/20 hover:text-white/30 active:text-red-800 cursor-pointer"
						title="ao clicar abrir modal para digitar valor que subtraiu a divida."
					>
						<IconCashBanknotePlus size={28} stroke={2} />
					</div>
					<div
						className="flex align-center justify-center pr-2 pl-2 text-white/20 hover:text-white/30 active:text-red-800 cursor-pointer"
						title="ao clicar abrir modal para digitar valor que subtraiu a divida."
					>
						<IconCashBanknoteMinus size={28} stroke={2} />
					</div>
					<div className="flex align-center justify-center text-white/20 hover:text-white/30 active:text-red-800 pr-2 pl-2 cursor-pointer">
						<IconTrash size={28} stroke={2} />
					</div>
				</nav>
			</div>
		</section>
	)
}
