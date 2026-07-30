import {
	IconArrowDown,
	IconArrowUp,
	IconCoins,
	IconMinus,
	IconPlus,
	IconSearch,
	IconUser,
} from "@tabler/icons-react"
import { useState } from "react"
import { GlassButton } from "../button/GButton"
import { Modal } from "../modal/Modal"

export const Header = () => {
	const [isClickedPlus, setIsClickedPlus] = useState(false)
	const plusActionButton = () => {
		setIsClickedPlus(!isClickedPlus)
	}
	// const closePlusAction = () => {
	// 	setIsClickedPlus()
	// }

	return (
		<header className="flex z-40 justify-between items-center box-border absolute h-14 w-full top-0 left-0 m-0 pr-4 pl-4 bg-white/10 backdrop-blur-xs shadow-2xl">
			<div className="flex gap-1">
				<div>
					<IconCoins stroke={2} />
				</div>
				<div>
					<p>
						<b className="pl-2">0,00</b>
					</p>
				</div>
				<p>ICE Coins</p>
			</div>
			<nav className="flex items-center">
				<div className="flex gap-2">
					<GlassButton>
						<IconArrowDown stroke={2} />
					</GlassButton>
					<GlassButton>
						<IconArrowUp stroke={2} />
					</GlassButton>
					<GlassButton onClick={plusActionButton}>
						{isClickedPlus ? <IconMinus stroke={2} /> : <IconPlus stroke={2} />}
					</GlassButton>
				</div>
			</nav>
			<div className="flex">
				<input
					className="bg-white/10 rounded-bl-2xl rounded-tl-2xl pr-2 pl-4 border-none"
					type="text"
					placeholder="Buscar..."
				/>
				<div className="bg-white/10 rounded-tr-2xl rounded-br-2xl p-2 cursor-pointer">
					<IconSearch className="active:text-white/50" stroke={2} />
				</div>
			</div>
			<div>
				<IconUser stroke={2} />
			</div>
			{isClickedPlus && (
				<Modal title="Adicionar novo registro" onClick={plusActionButton}>
					MODAL PLUS
				</Modal>
			)}
		</header>
	)
}
