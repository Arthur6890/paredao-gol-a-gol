import React, { useState } from "react";
import styles from "./styles.module.scss"
import Logo from "public/images/paredaoLogo.png"
import Image from "next/image";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { Drawer } from "@mui/material";

export function Header() {
	const [isMenuOpen, setOpenMenu] = useState(false)

	return <div className={styles.main}>
		<div className={styles.container}>


			<div className={styles.image}>
				<Link href={"/"}>
					<Image src={Logo} alt="Imagem não encontrada" />
				</Link>
			</div>
			<div className={styles.buttonsDiv}>
				<Link href={"/saiba-mais"}>
					<a className={`${styles.button} ${styles.outlined}`}>
						Saiba mais
					</a>
				</Link>
				<Link href={"/galeria"}>
					<a className={`${styles.button} ${styles.outlined}`}>
						Galeria
					</a>
				</Link>
				<Link href={"/#subscriptionForm"} className={styles.button}>
					<a className={styles.button}>
						inscreva-se
					</a>
				</Link>
			</div>

			<div className={styles.responsiveMenu}>
				<button className={styles.responsiveToggle} onClick={() => setOpenMenu(true)}>
					<MenuIcon />
				</button>

				<Drawer
					anchor={"left"}
					open={isMenuOpen}
					onClose={() => setOpenMenu(false)}
				>

					<Box sx={{ width: 300 }} className={styles.offCanvasMenu}>
						<div className={`${styles.image} ${styles.responsive}`}>
							<Link href={"/"}>
								<Image src={Logo} alt="Imagem não encontrada" />
							</Link>
						</div>
						<div className={`${styles.buttonsDiv} ${styles.responsive}`}>
							<Link href={"/saiba-mais"}>
								<a className={`${styles.button} ${styles.outlined}`}>
									Saiba mais
								</a>
							</Link>
							<Link href={"/galeria"}>
								<a className={`${styles.button} ${styles.outlined}`}>
									Galeria
								</a>
							</Link>
							<Link href={"/#subscriptionForm"} className={styles.button}>
								<a className={styles.button}>
									inscreva-se
								</a>
							</Link>
						</div>
					</Box>
				</Drawer>

			</div>

		</div>
	</div>;
}
