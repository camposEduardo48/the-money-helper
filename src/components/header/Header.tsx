import {
	IconArrowDown,
	IconArrowNarrowDown,
	IconArrowNarrowUp,
	IconArrowUp,
	IconCoins,
	IconLoader2,
	IconMinus,
	IconPlus,
	IconSearch,
	IconUser,
} from "@tabler/icons-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { GlassButton } from "../button/GButton"
import { Modal } from "../modal/Modal"

export const Header = () => {
	const [isClickedPlus, setIsClickedPlus] = useState(false)
	const [pointsModal, setPointsModal] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

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
			const reply = await fetch("http://localhost:2222/database_fake", {
				method: "POST",
				headers: {
					"content-type": "application/type",
				},
				// body á ser enviado no fetch POST
				body: JSON.stringify(test_datas_finance),
			})
			if (reply.status === 201) {
				console.log(`Dados enviados com sucesso status: ${reply.status}`)
				setIsLoading(true)
				setTimeout(() => {
					setIsClickedPlus(false)
					setIsLoading(false)
				}, 3000)
			} else {
				console.error(`Erro status: ${reply.status}`)
			}
		} catch (error) {
			console.error(error)
		}
	}

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
			<div>total itens: 0</div>
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
					{!isLoading ? (
						<motion.div animate={{ y: 4 }}>
							<form
								onSubmit={sendNewDatasAboutFinance}
								className="flex flex-col gap-4"
								action=""
							>
								<div className="flex gap-2">
									<p>Titulo</p>
									<input
										className="bg-white/10 border-b p-1 rounded-sm"
										type="text"
										name="title"
										onChange={(event) => setTitleData(event.target.value)}
										id=""
									/>
								</div>
								<div className="flex flex-col gap-2">
									<p>Descrição</p>
									<textarea
										className="bg-white/10 border-b p-1"
										name="description"
										onChange={(event) => setDescriptionData(event.target.value)}
										id=""
									/>
								</div>
								<div className="flex items-center gap-2">
									<select className="bg-slate-800 cursor-pointer" name="selectorOfFinancialType" id="">
										<option className="cursor-pointer" value="" defaultValue={''}>Selecione</option>
										<option className="cursor-pointer" value="in">
											<div>
												Entrada
											</div>
										</option>
										<option className="cursor-pointer" value="out">
											<div>
												Saída
											</div>
										</option>
									</select>
									{true ? (<div>
											<IconArrowNarrowDown color="green" stroke={2} />
									</div>) : (
											<div>
												<IconArrowNarrowUp color="red" stroke={2}/>
											</div>
											)}
								</div>
								<div className="flex gap-2">
									<p>R$</p>
									<input
										className="bg-white/10 border-b p-1 rounded-sm"
										type="number"
										name="price"
										onChange={(event) => setPriceValueData(event.target.value)}
										id=""
									/>
								</div>
								<small>
									Resposta de envio bem sucedida e fechamento após alguns
									seconds
								</small>
								<button
									className="bg-white/10 cursor-pointer p-1 rounded-sm"
									onClick={() => sendNewDatasAboutFinance}
									type="submit"
								>
									Add
								</button>
							</form>
						</motion.div>
					) : (
						<article className="flex px-2">
							<IconLoader2 stroke={2} size={100} className="animate-spin" />
						</article>
					)}
				</Modal>
			)}
		</header>
	)
}
