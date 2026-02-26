import {useState, useEffect} from 'react'

import { Link } from 'react-router-dom'

function MyPet() {

    const [pets, setPets] = useState([])

    return (
        <section>
            <div>
                <h1>Meus Pets</h1>
                <Link to="/pet/add">Cadastrar Pet</Link>
            </div>
            <div>
                {pets.length > 0 && <p> Meus Pets Cadastrados</p>}
                {pets.length === 0 && <p> Não há Pets cadastrados</p>}
            </div>
        </section>
    )
}

export default MyPet;