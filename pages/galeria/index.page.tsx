import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { KnowMore } from 'components/knowMore'
import { Modal } from 'components/modal'

const Galeria: NextPage = () => {
	return (
		<div >
			<Head>
				<title>Gol a Gol Paredão Goalkeeper Academy</title>
				<meta name="description" content="Evento de gol a gol da maior academia de goleiros do brasil! Ta esperando o que para fazer sua inscrição goleirão?" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<Modal />
			<Footer />

		</div>
	)
}

export default Galeria