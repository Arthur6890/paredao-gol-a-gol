import React from 'react'
import styles from "./styles.module.scss"
import GustaCar from "public/images/brands/GustaCar.png"
import N1Goalkeeper from "public/images/brands/N1Goalkeeper.png"
import Brasero from "public/images/brands/brasero.jpg"
import Trijollet from "public/images/brands/marcosTrijollet.jpg"
import Image from 'next/image'

export function Partners() {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Se liga nas empresas que <strong>jogam junto</strong> com a Paredão Academia de Goleiros</h2>
			<div className={styles.gridBrands}>
				<div className={styles.gridItem}>
					<Image src={GustaCar} alt="Imagem não encontrada" />
				</div>

				<div className={styles.gridItem}>
					<Image src={N1Goalkeeper} alt="Imagem não encontrada" />
				</div>

				<div className={styles.gridItem}>
					<Image src={Brasero} alt="Imagem não encontrada" />

				</div>

				<div className={styles.gridItem}>
					<Image src={Trijollet} alt="Imagem não encontrada" />

				</div>

			</div>
		</div>
	)
}
