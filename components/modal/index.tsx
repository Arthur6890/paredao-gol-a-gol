import { Backdrop } from '@mui/material'
import React, { useState } from 'react'
import styles from "./styles.module.scss"

export function Modal() {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false);
      };
      const handleToggle = () => {
        setOpen(!open);
      };
  return (
    <div>
    <button onClick={handleToggle}>Clica</button>
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <h2>
        testeeeeeee
      </h2>
    </Backdrop>
  </div>
  )
}
