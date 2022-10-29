import './App'
import { useState } from 'react'




const Form= () => {

    const [formvalues, setFormValues] = useState ({})

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
      });

    const handleInputChange =(e) =>{                              //Pega os dados que o usuário está inserindo em tempo real.
        const {name, value} = e.target;
        setFormValues({...formvalues,[name]: value})

    }

    const handleSubmit =(e) =>{                                   //Pega os dados que o usuário preencheu no formulário.
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        console.log('***handleSubmit', data)

        if(!validate()) return;                                  //Quando submetido verifica a validação do formulário
        

        const saveDataForm = true;                               //Nesta seção seria onde o formulário seria enviado para o backend, e retornaria para o 
                                                                  //usuário se ele foi cadastrado com sucesso ou não cadastrado. 
        if (saveDataForm) {
            setStatus({
            type: 'success',
            mensagem: "Usuário cadastrado com sucesso!"
            });
        } else {
            setStatus({
            type: 'error',
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
            });
        }


    }

    console.log('***handleinputchange', formvalues)

    
    
    function validate(){                                                        //Validação do formulário

        const campos = document.querySelectorAll('.inputs')
        const emailregex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
        const telefoneregex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
        const cpfregex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/



        if(!formvalues.nome) return setStatus({type: 'error', mensagem: 'É necessário preencher o campo Nome!'});
        if(!formvalues.email) return setStatus({type: 'error', mensagem: 'É necessário preencher o campo E-mail!'});
        if(!formvalues.telefone) return setStatus({type: 'error', mensagem: 'É necessário preencher o campo Telefone!'});
        if(!formvalues.cpf) return setStatus({type: 'error', mensagem: 'É necessário preencher o campo CPF!'});
        if(!formvalues.pais) return setStatus({type: 'error', mensagem: 'É necessário escolher algum País!'});
        if(!formvalues.cidade) return setStatus({type: 'error', mensagem: 'É necessário escolher alguma Cidade!'});
        if(emailregex.test(campos[1].value)) return setStatus({type: 'error', mensagem: 'É necessário preencher um E-mail válido!'});
        if(telefoneregex.test(campos[2].value)) return setStatus({type: 'error', mensagem: 'É necessário preencher um Telefone válido!'});
        if(cpfregex.test(campos[3].value)) return setStatus({type: 'error', mensagem: 'É necessário preencher um CPF válido!'});


    
        return true;
    }

        return (
            <body>
                
                <div class="content">

                    <form onSubmit= {handleSubmit}>  

                        <h1>Dados Pessoais</h1>

                        <div>
                            <label>Nome:</label><br></br>
                            <input onChange={handleInputChange} type="text" name="nome" class="inputs"  value={formvalues.nome|| ''}/>
                        </div>

                        <div>
                            <label>E-mail:</label><br></br>
                            <input onChange={handleInputChange} type="text" name="email" class="inputs"  value={formvalues.email|| ''}/>
                        </div>

                        <div>
                            <label>Telefone:</label><br></br>
                            <input onChange={handleInputChange} type="tel" name="telefone" class="inputs"  value={formvalues.telefone|| ''}/>
                        </div>

                        <div>
                            <label>CPF:</label><br></br>
                            <input onChange={handleInputChange} type="text" name="cpf" class="inputs"  value={formvalues.cpf|| ''} />
                        </div>

                        <h1>Destinos de Interesse</h1>

                        <div>
                            <label>Escolha um ou mais países</label><br></br>
                            <select onChange={handleInputChange} name="pais"  class="selects" value={formvalues.pais|| ''}>
                                <option select disabled option="">Selecione</option>
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </select>
                        </div>
                        <div>
                            <label>Escolha uma ou mais cidades</label><br></br>
                            <select onChange={handleInputChange} name="cidade"  class="selects">
                                <option select disabled option="">Selecione</option>
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </select>
                        </div>

                        <button type="submit">Enviar</button>
                    </form>

                    {status.type === 'success' ? <p class={"status"}>{status.mensagem}</p> : ""}    
                    {status.type === 'error' ? <p class={"status1"}>{status.mensagem}</p> : ""}

                </div>
            </body>
   
        )
    
    
}



export default Form