import React from "react";
import styles from "./styles.module.scss"
import Logo from "public/images/paredaoLogo.png"
import Image from "next/image";

export function Header() {
	return <div className={styles.main}>
		<div className={styles.image}>
			<Image src={Logo} />
		</div>
	</div>;
}
