import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { Modal } from 'components/modal'
import { GaleryImages } from 'components/modal/galery'
import styles from "./styles.module.scss"

const Galeria: NextPage = () => {
	return (
		<div >
			<Head>
				<title>Gol a Gol Paredão Goalkeeper Academy</title>
				<meta name="description" content="Evento de gol a gol da maior academia de goleiros do brasil! Ta esperando o que para fazer sua inscrição goleirão?" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<div className={styles.container}>
				<div className={styles.gridImages}>
					{GaleryImages.map((item, index) => (
						<Modal heightWhenOpen={item.heightWhenOpen} widthWhenOpen={item.widthWhenOpen} imageUrl={item.imageUrl} key={index} />
					))}
				</div>
			</div>
			<Footer />

		</div>
	)
}

export default Galeria