import api from '../../../utils/api'

import styles from './AddPet.module.css'

import {useState} from 'react'
import {Navigate} from 'react-router-dom'

/* components */
import PetForm from '../../form/AddPetForm'

/* hooks */
import useFlashMessage from '../../../hooks/useFlashMessage'

function AddPet() {
    const [token] = useState(localStorage.getItem('token') || '')
    const {setFlashMessage} = useFlashMessage()
    const navigate = Navigate()

    async function registerPet(pet) {
        let msgType = 'success'

        const formData = new FormData()

        await Object.keys(pet).forEach((key) => {
            if(key === 'images') {
                for(let i = 0; i < pet[key].length; i++) {
                    formData.append('images', pet[key][i])
                }
            } else {
                formData.append(key, pet[key])
            }
        })

        const data = await api.post('/pets/create', formData, {
            
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
            
        }).then((response) => {
            return response.data
        })
        .catch((err) => {
            msgType = 'error'
            return err.response.data
        })

        setFlashMessage(data.message, msgType)
        
        if(msgType !== 'error') {
            navigate('/pet/mypets')
        }
    }
    return (
        <section className={styles.addpet_header}>
            <div>
                <h1>Adicionar Pet</h1>
                <p>Depois ele ficara disponivel para adocao</p>
            </div>
            <PetForm handleSubmit={registerPet} btnText="Cadastrar Pet"/>
        </section>
    )
}

export default AddPet;