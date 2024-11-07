import {useState, useEffect} from 'react'
import api from '../../service/api'
import 'bootstrap/dist/css/bootstrap.min.css'//importa o css do bootstrap

export default function Catalogo(){
//js puro
    const [produto, setProduto] = useState([])//Estado armazenar os produtos


    useEffect(()=>{
        async function loadCardapio(){
            try{
                const response = await api.get('/api/v1/produtos')//requisição api
                console.log(response.data)
                setProduto(response.data)
            }catch(err){
                console.log('Erro')
            }
        }
        loadCardapio()
    },[])//ciclo de vida da aplicação

    return(



        <div>Cardápio</div>
    )
}