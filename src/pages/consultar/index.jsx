import { useState } from 'react';
import './index.scss';
import { Link, useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios'

export default function Consultar() {

    const [listaIntencoes, setListaIntencoes] = useState([]);
    const [exibir, setExibir] = useState(false);

    const { id } = useParams();

    async function buscar() {

        const url = 'http://localhost:7000/intencao';
        let resp = await axios.get(url);
        setListaIntencoes(resp.data);

        setExibir(!exibir);


    }

    async function deletar() {

        const url = `http://localhost:7000/intencao/${id}`;
        let resp = await axios.delete(url);

        setListaIntencoes(resp.data);

    }

    return (
        <div className='pagina-consultar'>

            <div className='top'>
                <a className='icon' href="/"><FontAwesomeIcon icon={faArrowLeft} size='2x' /></a>

                <h1>CONSULTAR</h1>
            </div>

            <button onClick={buscar}>{exibir == true ? 'Ocultar' : 'Exibir'}</button>

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
                        <th>Data da Intenção</th>
                    </tr>
                </thead>

                {exibir == true &&
                    
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
                                <td>{new Date (item.dataIntencao).toLocaleDateString()}</td>
                                <td><Link to={`/alterar/${item.idIntencao}`}><FontAwesomeIcon icon={faPenToSquare} /></Link></td>
                                <td><FontAwesomeIcon icon={faTrash} onClick={deletar} /></td>
                            </tr>
                        )}
                    </tbody>
    
                }


            </table>


        </div>

    );
}


