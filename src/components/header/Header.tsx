import {
	IconArrowDown,
	IconArrowUp,
	IconCoins,
	IconMinus,
	IconPlus,
	IconSearch,
	IconUser,
} from "@tabler/icons-react"
import { motion, testValueType } from "framer-motion"
import { form } from "framer-motion/client"
import { useEffect, useState } from "react"
import { GlassButton } from "../button/GButton"
import { Modal } from "../modal/Modal"

export const Header = () => {
	const [isClickedPlus, setIsClickedPlus] = useState(false)
	const [pointsModal, setPointsModal] = useState(false)

	//state para armazenar inputs
	const [titleData, setTitleData] = useState<string>("")
	const [descriptionData, setDescriptionData] = useState("")
	const [priceValueData, setPriceValueData] = useState<number>(0)

	const plusActionButton = () => {
		setIsClickedPlus(!isClickedPlus)
	}
	const pointsActionButton = () => {
		setPointsModal(!pointsModal)
	}
	// const closePlusAction = () => {
	// 	setIsClickedPlus()
	// }

	const sendNewDatasAboutFinance = async (
		event: React.FormEvent<HTMLFormElement>,
	) => {
		event.preventDefault()
		// const formFinanceDatas = new FormData()

		//dados persistidos pelo state
		const test_datas_finance = {
			title: titleData,
			description: descriptionData,
			price_value: priceValueData,
		}
		// testando o envio dos dados para o json-server local
		try {
			await fetch("/src/db/database.json", {
				method: "POST",
				headers: {
					"content-type": "application/type",
				},
				// body á ser enviado no fetch POST
				body: JSON.stringify(test_datas_finance),
			})
			console.log(
				`to_send_test: ${<br />}
				${test_datas_finance.title},${test_datas_finance.description}, ${test_datas_finance.price_value}`,
			)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		sendNewDatasAboutFinance
	}, [])

	return (
		<header className="flex z-40 justify-between items-center box-border absolute h-14 w-full top-0 left-0 m-0 pr-4 pl-4 bg-white/10 backdrop-blur-xs shadow-2xl">
			<div className="flex gap-1 cursor-pointer" onClick={pointsActionButton}>
				<div>
					<IconCoins stroke={1} />
				</div>
				<div>
					<p>0,00</p>
				</div>
				<p>ICE Coins</p>
			</div>

			<nav className="flex items-center">
				<div className="flex gap-2">
					<GlassButton>
						<IconArrowDown stroke={1} />
					</GlassButton>
					<GlassButton>
						<IconArrowUp stroke={1} />
					</GlassButton>
					<GlassButton onClick={plusActionButton}>
						{isClickedPlus ? <IconMinus stroke={1} /> : <IconPlus stroke={1} />}
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
			{pointsModal && (
				<Modal title="ICE Coins: 0,00" onClick={pointsActionButton}>
					Adicionar saldo disponivel
				</Modal>
			)}
			{isClickedPlus && (
				<Modal title="Adicionar novo registro" onClick={plusActionButton}>
					<motion.div animate={{ y: 4 }}>
						<form
							onSubmit={sendNewDatasAboutFinance}
							className="flex flex-col gap-4"
							action=""
						>
							<div className="flex gap-2">
								<p>Titulo</p>
								<input
									className="bg-white/10 border-b px-1"
									type="text"
									name="title"
									onChange={(event) => setTitleData(event.target.value)}
									id=""
								/>
							</div>
							<div className="flex flex-col gap-2">
								<p>Descrição</p>
								<textarea
									className="bg-white/10 border-b px-1"
									name="description"
									onChange={(event) => setDescriptionData(event.target.value)}
									id=""
								/>
							</div>
							<div className="flex gap-2">
								<p>R$</p>
								<input
									className="bg-white/10 border-b px-1"
									type="number"
									name="price"
									onChange={(event) => setPriceValueData(event.target.value)}
									id=""
								/>
							</div>
							<small>
								Resposta de envio bem sucedida e fechamento após alguns seconds
							</small>
							<button
								className="bg-white/10 cursor-pointer p-1"
								onClick={() => "sendNewDatasAboutFinance"}
								type="submit"
							>
								Add
							</button>
						</form>
					</motion.div>
				</Modal>
			)}
		</header>
	)
}
