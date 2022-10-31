import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.scss"

export function KnowMore() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.title}>
						Lorem ipsum
					</h2>
					<h3 className={styles.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat erat id turpis consequat, id commodo massa rhoncus. Sed lectus sapien, fringilla quis massa eu, auctor tincidunt magna. Nunc sollicitudin, mi vel consectetur porta, justo arcu ullamcorper enim, a volutpat felis massa id dolor. Pellentesque dictum dolor nec dolor egestas consequat non eu erat. Curabitur bibendum sodales blandit. Curabitur vel magna nibh. Donec nec enim imperdiet felis imperdiet venenatis. Morbi fermentum vulputate tellus. Nulla blandit tempus est et egestas. , id commodo massa rhoncus. Sed lectus sapien, fringilla quis massa eu, auctor tincidunt magna. Nunc sollicitudin, mi vel consectetur porta, justo arcu ullamcorper enim, a volutpat felis massa id dolor. Pellentesque dictum dolor nec dolor egestas consequat non eu erat. Curabitur bibendum sodales blandit. Curabitur vel magna nibh. Donec nec enim imperdiet felis imperdiet venenatis. Morbi fermentum vulputate tellus. Nulla blandit tempus est et egestas. Etiam ultrices ultricies risus quis interdum.
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
