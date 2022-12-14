import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.scss"

export function Form() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.texts}>
					<h2 className={styles.title}>
						Inscreva-se
					</h2>
					<h3 className={styles.subTitle}>
						Preencha o formulário e venha você também participar deste gigante evento!
					</h3>
					<h3 className={styles.subTitle}>
						Ou caso tenha algum problema, clique
						<Link href={"https://forms.gle/9kpRppXQP1YY8c7x7"}>
							<a target="_blank" rel="noopener noreferrer"> aqui </a>
						</Link>
						para usar o formulário do Google
					</h3>
				</div>
				<div className={styles.form}>
					<h2>Quero participar</h2>
					<form method="POST"
						action="https://docs.google.com/forms/d/1cEnDpBuSeE0xKVLArOW4ywozhTGtk1mqlgzi1-d4XPc/formResponse"
						onSubmit={() => "return window.submitGoogleForm(this);"}
						id="subscriptionForm">
						<div className={styles.inputRow}>
							<label>Nome completo</label>
							<input type="text" name='entry.45113941' placeholder='Joao Pedro Silveira' />
						</div>

						<div className={styles.inputRow}>
							<label>CPF</label>
							<input type="text" name='entry.1420326415' placeholder='XXX.XXX.XXX-XX' />
						</div>

						<div className={styles.inputRow}>
							<label>E-mail</label>
							<input type="text" name='entry.292397870' placeholder='email@mail.com' />
						</div>

						<div className={styles.inputRow}>
							<label>Telefone</label>
							<input type="text" name='entry.307256129' placeholder='(31) 99999-9999' />
						</div>
						<div className={styles.inputRow}>
							<label>Tamanho da camisa</label>
							<input type="text" name='entry.864551610' placeholder='P - M - G' />
						</div>
						<div className={styles.inputRow}>
							<label>Idade</label>
							<input type="text" name='entry.1184073246' placeholder='18' />
						</div>
						<input type="submit" className={styles.submitButton} value="Quero participar" />
					</form>
				</div>
			</div>
		</div>
	)
}
