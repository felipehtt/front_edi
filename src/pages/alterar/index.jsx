import './index.scss';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import axios from 'axios';

export default function Alterar() {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [dataFesta, setDataFesta] = useState('');
    const [tipoFesta, setTipoFesta] = useState('');
    const [temaFesta, setTemaFesta] = useState('');
    const [lembrete, setLembrete] = useState('');

    const { id } = useParams();

    async function alterar() {

        const paramCorpo = {
            "nome": nome,
            "telefone": telefone,
            "cep": cep,
            "dataFesta": dataFesta,
            "tipoFesta": tipoFesta,
            "temaFesta": temaFesta,
            "lembrete": lembrete
        }

        const url = `http://localhost:7000/intencao/${id}`;
        let resp = await axios.put(url, paramCorpo);

        alert(`Intenção Alterada. id: ${resp.data.idIntencao}`);


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
        setLembrete(resp.data.lembrete);

    }

    useEffect(() => {

        buscar();

    }, [])

    return (

        <div className='pagina-alterar'>

            <a href="/">Voltar</a>

            <h1>- ALTERAR</h1>

            <p>id Intenção: { id }</p>

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
                    <label>Lembrete:</label>
                    <input type='text' placeholder='Aniversariante faz 13 anos' value={lembrete} onChange={e => setLembrete(e.target.value)} />
                </div>
            </div>
            <button onClick={alterar}> ALTERAR </button>

        </div>

    );

}