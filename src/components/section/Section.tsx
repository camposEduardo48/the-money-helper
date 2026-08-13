import {
	IconArrowNarrowDown,
	IconArrowNarrowUp,
	IconCashBanknoteMinus,
	IconCashBanknotePlus,
	IconEyeBolt,
	IconTrash,
	IconUserCircle,
} from "@tabler/icons-react"
import { type ReactNode, useEffect, useState } from "react"
import { Card } from "../card/Card"

interface Props {
	children: ReactNode
}

interface FinanceDatasTypes {
	id: string
	title: string
	description: string
	price_value: number
}

export const Section = ({ children }: Props) => {
	const [getFinanceDatas, setGetFinanceDatas] = useState<FinanceDatasTypes[]>(
		[],
	)

	const getAllSavedDatas = async () => {
		try {
			const response = await fetch("http://localhost:2222/database_fake", {
				method: "GET",
			})
			const data = await response.json()
			console.log(data.map((d) => d.title))
			setGetFinanceDatas(data)
		} catch (error) {
			console.log({ MessageEvent: error })
		}
	}

	useEffect(() => {
		getAllSavedDatas()
	}, [])

	return (
		<section className="flex flex-col border h-full w-full border-emerald-600 overflow-y-scroll scroll-custom">
			{getFinanceDatas && (
				<div className="flex flex-col border-2 p-1 border-cyan-600">
					{getFinanceDatas.map((item) => (
						<article
							key={item.id}
							className="flex border-2 border-fuchsia-700 w-full"
						>
							<aside className="flex flex-col justify-start p-1">
								<div className="flex align-center justify-center p-2">
									<IconUserCircle color="white" stroke={0.5} size={80} />
								</div>
								<div className="flex align-center justify-center">
									<p>{item.id}</p>
								</div>
								<div className="flex align-center justify-center">
									<div className="flex">
										<IconArrowNarrowDown color="green" stroke={2} />
										<IconArrowNarrowUp color="red" stroke={2}/>
									</div>
								</div>
							</aside>
							<Card price_value={item.price_value} key={item.id}>
								<div>Titulo: {item.title}</div>
								<small>Id: {item.id}</small>
								<div>Descrição: {item.description}</div>
							</Card>
							{/* {children} */}
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
						</article>
					))}
				</div>
			)}
		</section>
	)
}
