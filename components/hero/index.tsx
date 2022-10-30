import Image from 'next/image'
import React from 'react'
import Trofeus from "public/images/photos/trofeus.jpeg"
import styles from "./styles.module.scss"
import Link from 'next/link'

export function Hero() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.texts}>
					<h2>O maior evento Gol a Gol voltado 100% para goleiros!</h2>
					<h3>
						Nós da Paredão Academia de Goleiros estamos sempre em busca não so da excelência técnica de nossos atletas, mas do crescimento de cada um de nossos alunos como humanos.
						Pensando nisso realizamos o maior evento de integração entre goleiros, unindo o esporte à diversão, tornando nosso Gol a Gol uma experiência única.
					</h3>
					<Link href={"/#subscriptionForm"}>
						<a className={styles.button}>
							Inscreva-se
						</a>
					</Link>
				</div>
				<div className={styles.image}>
					<Image src={Trofeus} alt="Imagem não encontrada" />
				</div>



			</div>
		</div>
	)
}
