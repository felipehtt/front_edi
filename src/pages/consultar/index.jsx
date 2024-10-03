import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.scss';
import { Link } from 'react-router-dom';

import axios from 'axios'

export default function Consultar() {

    const [listaIntencoes, setListaIntencoes] = useState([]);

    async function buscar() {

        const url = 'http://localhost:7000/intencao';
        let resp = await axios.get(url);
        setListaIntencoes(resp.data);

    }



    return (
        <div className='pagina-consultar'>

            <a href="/">Voltar</a>

            <h1>- CONSULTAR</h1>

            <button onClick={buscar}>Buscar</button>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>CEP</th>
                        <th>Data da Festa</th>
                        <th>Tipo da Festa</th>
                        <th>Tema da Festa</th>
                        <th>Lembrete</th>
                    </tr>
                </thead>

                <tbody>
                    {listaIntencoes.map(item =>
                        <tr>
                            <td>{item.idIntencao}</td>
                            <td>{item.nome}</td>
                            <td>{item.telefone}</td>
                            <td>{item.cep}</td>
                            <td>{new Date(item.dataFesta).toLocaleDateString()}</td>
                            <td>{item.tipoFesta}</td>
                            <td>{item.temaFesta}</td>
                            <td>{item.lembrete}</td>
                            <td><Link to={`/alterar/${item.idIntencao}`}>Alterar</Link></td>
                        </tr>
                    )}
                </tbody>

            </table>


        </div>
    )
}


