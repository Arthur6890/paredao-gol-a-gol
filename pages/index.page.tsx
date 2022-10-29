import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from 'components/header'
import { Hero } from 'components/hero'
import { Partners } from 'components/partners'
import { Card } from 'components/card'
import GuyWithTrophy from "public/images/photos/campeao2.jpeg"
import GuyShootingABall from "public/images/photos/fatiada.jpeg"
import EverybodyTogether from "public/images/photos/todosJuntos.jpeg"

const Home: NextPage = () => {
	return (
		<div >
			<Head>
				<title>Gol a Gol Paredão Goalkeeper Academy</title>
				<meta name="description" content="Evento de gol a gol da maior academia de goleiros do brasil! Ta esperando o que para fazer sua inscrição goleirão?" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<Hero />
			<Partners />
			<Card title='Lorem Ipsum dolor sit amet, {*consectetur adipiscing*} elit.'
				subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet imperdiet sem, vitae tempus sapien. Vestibulum efficitur justo nec lacus pretium, in interdum nisi mollis.'
				imageUrl={GuyWithTrophy}
			/>

			<Card title='Lorem Ipsum {*dolor sit amet*}, consectetur adipiscing elit.'
				subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet imperdiet sem, vitae tempus sapien. Vestibulum efficitur justo nec lacus pretium, in interdum nisi mollis.'
				imageUrl={GuyShootingABall}
				reverse
			/>

			<Card title='{*Lorem Ipsum*} dolor sit amet, {*consectetur adipiscing*} elit.'
				subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet imperdiet sem, vitae tempus sapien. Vestibulum efficitur justo nec lacus pretium, in interdum nisi mollis.'
				imageUrl={EverybodyTogether}
			/>
		</div>
	)
}

export default Home