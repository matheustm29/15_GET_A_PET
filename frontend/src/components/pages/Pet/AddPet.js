import api from '../../../utils/api'

import styles from './AddPet.module.css'

import {useState} from 'react'
import {Navigate} from 'react-router-dom'

/* hooks */
import useFlashMessage from '../../../hooks/useFlashMessage'

function AddPet() {
    return (
        <section className={styles.addpet_header}>
            <div>
                <h1>Adicionar Pet</h1>
                <p>Depois ele ficara disponivel para adocao</p>
            </div>
            <p>Formulario</p>
        </section>
    )
}

export default AddPet;