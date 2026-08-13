// import { Outlet } from "react-router"
/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
import {} from "@tabler/icons-react"
import { type ReactNode, useEffect, useState } from "react"

interface Props {
	children?: ReactNode
	price_value: string
}

// const [isActive, setIsActive] = useState(false)
const changeThis = () => {
	alert("Agree?")
	// setIsActive(!isActive)
}

export const Card = ({ children, price_value }: Props) => {
	const [financialDatas, setFinancialDatas] = useState<boolean>()

	const date = new Date()
	let actualMonth = String(date.getMonth())

	const getFinancialDatas = async() => {
		try {
			const response = await fetch("http://localhost:2222/database_fake", {
				method: "GET"
			})
			const reply = await response.json()
			console.log(reply.length > 0)
			setFinancialDatas(reply.length > 0)

		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getFinancialDatas()
	}, [])

	switch (actualMonth) {
		case "0":
			actualMonth = "Janeiro"
			break

		case "1":
			actualMonth = "Fevereiro"
			break

		case "2":
			actualMonth = "Março"
			break

		case "3":
			actualMonth = "Abril"
			break

		case "4":
			actualMonth = "Maio"
			break

		case "5":
			actualMonth = "Junho"
			break

		case "6":
			actualMonth = "Julho"
			break

		case "7":
			actualMonth = "Agosto"
			break

		case "8":
			actualMonth = "Setembro"
			break

		case "9":
			actualMonth = "Outubro"
			break

		case "10":
			actualMonth = "Novembro"
			break

		case "11":
			actualMonth = "Dezembro"
			break
	}

	const actualDate = `${String(date.getDay()).padStart(2, "0")} ${actualMonth} ${date.getFullYear()}`
	let working: boolean
	const requestAPI = async () =>
		await fetch("")
			.then(() => console.log(""))
			.catch(() => alert(""))

	// ...wait status return
	// if (requestAPI) {
	// 	working = true
	// 	console.log("OK!")
	// } else {
	// 	working = false
	// 	console.log("PROBLEM!")
	// }

	// const toPrepare = () => (() => working && "execute quickly")()

	return (
		<section className="flex rounded-4xl border transition duration-350 hover:border-white/30 hover:scale-x-101 hover:cursor-pointer border-white/10 bg-white/10 backdrop-blur-xs shadow-2xs p-2 h-auto w-full m-4 ml-0 mr-0">
			<article className="flex flex-col justify-between p-2 h-full w-full">
				{children}
				<article className="flex text-white/50 justify-between h-auto w-full p-1">
					<div>{financialDatas ? `${new Intl.NumberFormat("pt-BR", {
										style: "currency",
										currency: "BRL",
									}).format(price_value)}` : "R$0,99"}</div>
					<div>
						<small>
							<i>{actualDate}</i>
						</small>
					</div>
				</article>
			</article>
		</section>
	)
}
