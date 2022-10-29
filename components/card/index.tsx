import Image, { StaticImageData } from 'next/image';
import styles from "./styles.module.scss"
import React from 'react'

type CardProps = {
	title: string;
	subtitle: string
	imageUrl: StaticImageData
	reverse?: boolean
	textColor?: 'whiteTextColor';
}

export function Card({ imageUrl, subtitle, title, reverse, textColor }: CardProps) {
	const styledTitleMatches = title.split(/\{(.*?)\}/g);
	return (
		<div className={`${styles.container} ${reverse ? styles.reverse : null}`}>
			<div className={styles.image}>
				<Image src={imageUrl} alt="Imagem não encontrada" />
			</div>

			<div className={styles.texts}>
				<h2 className={styles.title}>
					{styledTitleMatches.map((title, index) => {
						const textToBeStyled = title.replace(/\*/g, '');
						return (
							<span
								key={index}
								className={`${textToBeStyled !== title ? 'redTextColor' : ''
									} ${textColor}`}
							>
								{textToBeStyled}
							</span>
						);
					})} </h2>
				<h3 className={styles.subtitle}>{subtitle} </h3>
			</div>
		</div>
	)
}
