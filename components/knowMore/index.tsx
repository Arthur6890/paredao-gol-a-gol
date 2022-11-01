import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.scss"

export function KnowMore() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.title}>
						Como funciona o evento?🤔
					</h2>
					<h3 className={styles.text}>
						A competição é a famosa disputa de jogos conhecidos como “Gol a Gol”, comuns nas escolas e brincadeiras entre amigos que gostam do futebol, contudo esta é adaptada para os arqueiros mostrarem do que são capazes e que também são ótimos jogadores com os pés.
						<br />
						Os participantes, além de estarem competindo, demonstram suas habilidades e treinam chutes e defesas no gol.
						<br />
						O Gol a Gol explora dois fundamentos: o “tiro de gol”, quando a bola é lançada de uma longa distância e a defesa desses chutes.
					</h3>
					<div className={styles.buttonsDiv}>
						<Link href={"/docs/Regulamento.pdf"}>
							<a target={"_blank"} className={`${styles.button} ${styles.outlined}`}>
								Leia o regulamento
							</a>
						</Link>

						<Link href={"/#subscriptionForm"}>
							<a className={styles.button}>
								Quero participar
							</a>
						</Link>

					</div>
				</div>
			</div>
		</div>
	)
}
