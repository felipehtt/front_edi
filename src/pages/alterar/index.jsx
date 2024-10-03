import './index.scss';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import axios from 'axios';

export default function Alterar() {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [dataFesta, setDataFesta] = useState('');
    const [tipoFesta, setTipoFesta] = useState('');
    const [temaFesta, setTemaFesta] = useState('');
    const [dataIntencao, setDataIntencao] = useState('');

    const { id } = useParams();

    async function alterar() {

        const paramCorpo = {
            "nome": nome,
            "telefone": telefone,
            "cep": cep,
            "dataFesta": dataFesta,
            "tipoFesta": tipoFesta,
            "temaFesta": temaFesta,
            "dataIntencao": dataIntencao
        }

        const url = `http://localhost:7000/intencao/${id}`;
        let resp = await axios.put(url, paramCorpo);

        alert(`Intenção Alterada.`);


    }

    async function buscar() {

        const url = `http://localhost:7000/intencao/${id}`;
        let resp = await axios.get(url);

        setNome(resp.data.nome);
        setTelefone(resp.data.telefone);
        setCep(resp.data.cep);
        setDataFesta(resp.data.dataFesta);
        setTipoFesta(resp.data.tipoFesta);
        setTemaFesta(resp.data.temaFesta);
        setDataIntencao(resp.data.dataIntencao);

    }

    useEffect(() => {

        buscar();

    }, [])

    return (

        <div className='pagina-alterar'>

            <div className='top'>
                <a className='icon' href="/"><FontAwesomeIcon icon={faArrowLeft} size='2x' /></a>

                <h1>ALTERAR</h1>
            </div>

            <p>id Intenção: {id}</p>

            <div className='form'>
                <div>
                    <label>Nome:</label>
                    <input type='text' placeholder='Felipe Soares' value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Telefone:</label>
                    <input type='text' placeholder='(11)12345-1234' value={telefone} onChange={e => setTelefone(e.target.value)} />
                </div>
                <div>
                    <label>CEP:</label>
                    <input type='text' placeholder='12345-123' value={cep} onChange={e => setCep(e.target.value)} />
                </div>
                <div>
                    <label>Data da Festa:</label>
                    <input type='text' placeholder='05/05/2024' value={dataFesta} onChange={e => setDataFesta(e.target.value)} />
                </div>
                <div>
                    <label>Tipo da Festa:</label>
                    <input type='text' placeholder='Casamento' value={tipoFesta} onChange={e => setTipoFesta(e.target.value)} />
                </div>
                <div>
                    <label>Tema da Festa:</label>
                    <input type='text' placeholder='Heróis' value={temaFesta} onChange={e => setTemaFesta(e.target.value)} />
                </div>
                <div>
                    <label>Data Intenção:</label>
                    <input type='text' placeholder='Data de Hoje' value={dataIntencao} onChange={e => setDataIntencao(e.target.value)} />
                </div>
            </div>
            <Link to='/consultar'><button onClick={alterar}> ALTERAR </button></Link>

        </div>

    );

}