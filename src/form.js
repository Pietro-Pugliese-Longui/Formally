import './App'
import { useState } from 'react'




const Form= () => {

    const [formvalues, setFormValues] = useState ({})

    const handleInputChange =(e) =>{                              //Pega os dados que o usuário está inserindo em tempo real.
        const {name, value} = e.target;
        setFormValues({...formvalues,[name]: value})

    }

    const handleSubmit =(e) =>{                                   //Pega os dados que o usuário preencheu no formulário.
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        console.log('***handleSubmit', data)
    }

    console.log('***handleinputchange', formvalues)

        return (
            <body>
                
                <div class="content">

                    <form onSubmit= {handleSubmit}>  

                        <h1>Dados Pessoais</h1>

                        <div>
                            <label>Nome:</label><br></br>
                            <input onChange={handleInputChange} type="text" name="nome" class="inputs" required value={formvalues.nome|| ''}/>
                        </div>

                        <div>
                            <label>E-mail:</label><br></br>
                            <input onChange={handleInputChange} type="email" name="email" class="inputs" required value={formvalues.email|| ''}/>
                            <span class="span-required">Digite um e-mail válido</span>
                        </div>

                        <div>
                            <label>Telefone:</label><br></br>
                            <input onChange={handleInputChange} type="tel" name="telefone" class="inputs" required value={formvalues.telefone|| ''}/>
                            <span class="span-required">Digite um telefone válido</span>
                        </div>

                        <div>
                            <label>CPF:</label><br></br>
                            <input onChange={handleInputChange} type="text" name="cpf" class="inputs" required value={formvalues.cpf|| ''} />
                            <span class="span-required">Digite um CPF válido</span>
                        </div>

                        <h1>Destinos de Interesse</h1>

                        <div>
                            <label>Escolha um ou mais países</label><br></br>
                            <select onChange={handleInputChange} name="pais" required class="selects" value={formvalues.pais|| ''}>
                                <option select disabled option="">Selecione</option>
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </select>
                        </div>
                        <div>
                            <label>Escolha uma ou mais cidades</label><br></br>
                            <select onChange={handleInputChange} name="cidade" required class="selects">
                                <option select disabled option="">Selecione</option>
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </select>
                        </div>

                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </body>
   
        )
    
    
}



export default Form