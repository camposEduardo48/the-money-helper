import { IconUserCircle } from "@tabler/icons-react"
import { Card } from "./components/card/Card"
import { Container } from "./components/container/Container"
import { Header } from "./components/header/Header"
import { Modal } from "./components/modal/Modal"
import { Section } from "./components/section/Section"
import { Table } from "./components/table/Table"

function App() {
	// const toRotateRoulette = async () => {
	// 	await fetch("http://localhost:4848")
	// 	return ""
	// }

	return (
		<main className="flex flex-col px-30 h-screen w-screen">
			{/* <Modal /> */}
			<Header />
			<Container>
				<main className="flex">
					<Section>
						<Card />
					</Section>
					<Table></Table>
				</main>
			</Container>
		</main>
	)
}

export default App
