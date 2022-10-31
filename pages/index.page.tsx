import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from 'components/header'
import { Hero } from 'components/hero'
import { Partners } from 'components/partners'
import { Card } from 'components/card'
import GuysWithTrophy from "public/images/photos/campeao2.jpeg"
import GuyShootingABall from "public/images/photos/fatiada.jpeg"
import EverybodyTogether from "public/images/photos/todosJuntos.jpeg"
import { Footer } from 'components/footer'
import { Form } from 'components/form'

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
			<Card title='Participantes da {*primeira edição*} do Gol a Gol'
				subtitle='Foram 28 goleiros em busca de ser o grande campeão, com partidas emocionantes e bem disputadas!'
				imageUrl={EverybodyTogether}
			/>

			<Card title='Os {*grandes finalistas*} do torneio'
				subtitle='Uma final de tirar o fôlego, dois grandes competidores ótimas defesas e belos chutes, uma final GIGANTESCA!'
				imageUrl={GuysWithTrophy}
				reverse
			/>

			<Card title='Vem aí a {*segunda edição*}'
				subtitle='Pensando no grande sucesso da nossa primeira edição, a segunda será ainda melhor, contamos com todos vocês! Venha fazer parte desse grande evento!!!'
				imageUrl={GuyShootingABall}
			/>
			<Form />
			<Footer />

		</div>
	)
}

export default Home