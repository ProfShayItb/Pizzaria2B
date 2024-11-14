import { useState, useEffect } from 'react'
import api from '../../service/api'
import 'bootstrap/dist/css/bootstrap.min.css'//importa o css do bootstrap

export default function Catalogo() {
    //js puro
    const [produto, setProduto] = useState([])//Estado armazenar os produtos


    useEffect(() => {
        async function loadCardapio() {
            try {
                const response = await api.get('/api/v1/produtos')//requisição api
                console.log(response.data)
                setProduto(response.data)
            } catch (err) {
                console.log('Erro')
            }
        }
        loadCardapio()
    }, [])//ciclo de vida da aplicação

    return (
        <div className='container mt-4'>
            <h1 className='text-center mb-4'>Cardápio</h1>
            <div className='row'>
                {produto.map((item) => (
                    <div className='col-md-4 mb-4' key={item.id}>
                        <div className='card h-100'>
                            <img src={item.urlFoto} className='card-img-top' alt={item.nome} style={{height: '200', objectFit: 'cover'}}/>

                        <div className='card-body'>
                            <h5 className='card-title'>{item.nome}</h5>
                            <p className='card-text'>{item.descricao}</p>
                            <p className='card-text'><strong>Preço: </strong>R${item.preco.toFixed(2)}</p>
                        </div>
                        <div className='card-footer text-center'>
                            <button className='btn btn-primary'>Comprar</button>
                        </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}