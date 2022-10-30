import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "public/images/paredaoLogo.png"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from "./styles.module.scss"

export function Footer() {
	return (
		<div className={styles.main}>

			<div className={styles.container}>
				<div className={styles.logo}>
					<Link href={"/"}>
						<Image src={Logo} />
					</Link>
				</div>

				<div className={styles.anyDoubt}>
					<h2>Alguma dúvida?</h2>
					<Link href={"https://wa.me/5531982598036"}>
						<a target="_blank" rel="noopener noreferrer">
							Entre em contato conosco!
						</a>
					</Link>
				</div>

				<div className={styles.socialMedia}>
					<Link href={"https://www.youtube.com/channel/UCGZ1wOm_FTWuJHVUA3gQxGQ"}>
						<a target="_blank" rel="noopener noreferrer" className={styles.socialMediaIcon} id="teste">
							<YouTubeIcon />
						</a>
					</Link>
					<Link href={"https://www.instagram.com/paredao_academiadegoleiros/"}>
						<a target="_blank" rel="noopener noreferrer" className={styles.socialMediaIcon}>
							<InstagramIcon />
						</a>
					</Link>
					<Link href={"https://wa.me/5531982598036"}>
						<a target="_blank" rel="noopener noreferrer" className={styles.socialMediaIcon}>
							<WhatsAppIcon />
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}
