import { useState } from 'react'
import './index.scss'

import axios from 'axios'

export default function Cadastrar() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [dataFesta, setDataFesta] = useState('');
    const [tipoFesta, setTipoFesta] = useState('');
    const [temaFesta, setTemaFesta] = useState('');
    const [lembrete, setLembrete] = useState('');

    async function salvar() {
        const paramCorpo = {
            "nome": nome,
            "telefone": telefone,
            "cep": cep,
            "dataFesta": dataFesta,
            "tipoFesta": tipoFesta,
            "temaFesta": temaFesta,
            "lembrete": lembrete
        }

        const url = 'http://localhost:7000/intencao';
        let resp = await axios.post(url, paramCorpo);

        alert('Pessoa adicionada na Intenções. Id: ' + resp.data.idIntencao);
    }


    return (
        <div className='pagina-cadastrar'>
            <h1> CADASTRAR </h1>


            <div className='form'>
                <div>
                    <label>Nome:</label>
                    <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Telefone:</label>
                    <input type='text' value={telefone} onChange={e => setTelefone(e.target.value)} />
                </div>
                <div>
                    <label>CEP:</label>
                    <input type='text' value={cep} onChange={e => setCep(e.target.value)} />
                </div>
                <div>
                    <label>Data da Festa:</label>
                    <input type='text' value={dataFesta} onChange={e => setDataFesta(e.target.value)} />
                </div>
                <div>
                    <label>Tipo da Festa:</label>
                    <input type='text' value={tipoFesta} onChange={e => setTipoFesta(e.target.value)} />
                </div>
                <div>
                    <label>Tema da Festa:</label>
                    <input type='text' value={temaFesta} onChange={e => setTemaFesta(e.target.value)} />
                </div>
                <div>
                    <label>Lembrete:</label>
                    <input type='text' value={lembrete} onChange={e => setLembrete(e.target.value)} />
                </div>
            </div>
            <button onClick={salvar}> SALVAR </button>

        </div>
    )
}