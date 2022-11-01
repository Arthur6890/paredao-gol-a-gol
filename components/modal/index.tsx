import { Backdrop } from '@mui/material'
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react'
import styles from "./styles.module.scss"

type ModalProps = {
	widthWhenOpen: number
	heightWhenOpen: number
	imageUrl: StaticImageData
}
export function Modal({ heightWhenOpen, widthWhenOpen, imageUrl }: ModalProps) {
	const [open, setOpen] = useState(false)
	const handleClose = () => {
		setOpen(false);
	};
	const handleToggle = () => {
		setOpen(!open);
	};
	return (
		<>
			<div className={styles.wrapper}>
				<button onClick={handleToggle}>
					<Image src={imageUrl} />
				</button>
			</div>
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={open}
				onClick={handleClose}
			>
				<div className={styles.imageOpen}>
					<Image src={imageUrl} width={widthWhenOpen} height={heightWhenOpen} />
				</div>

			</Backdrop>
		</>
	)
}
