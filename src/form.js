import React, { Component } from 'react'
import './App'


class Form extends Component {

    state = {
        formvalues:''
        
    }

    handleSubmit =(e) =>{
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)

        console.log('***handleSubmit', data)

    }

    handleInputChange =(e) =>{
        const {name, value} = e.target
        this.setState({
            formvalues: e.target.value
        })



    }


    render () {
        return (
            <body>
                
                <div class="content">



                    <form onSubmit= {this.handleSubmit} id="form1">

                        <h1>Dados Pessoais</h1>

                        <div>
                            <label>Nome:</label><br></br>
                            <input onChange={this.handleInputChange} type="text" name="nome" id="nome" class="inputs" required />
                        </div>

                        <div>
                            <label>E-mail:</label><br></br>
                            <input onChange={this.handleInputChange} type="email" name="email" id="email" class="inputs" required />
                            <span class="span-required">Digite um e-mail válido</span>
                        </div>

                        <div>
                            <label>Telefone:</label><br></br>
                            <input onChange={this.handleInputChange} type="tel" id="telefone" name="telefone" class="inputs" required />
                            <span class="span-required">Digite um telefone válido</span>
                        </div>

                        <div>
                            <label>CPF:</label><br></br>
                            <input onChange={this.handleInputChange} type="text" name="cpf" id="cpf" class="inputs" required />
                            <span class="span-required">Digite um CPF válido</span>
                        </div>

                        <h1>Destinos de Interesse</h1>

                        <div>
                            <label>Escolha um ou mais países</label><br></br>
                            <select onChange={this.handleInputChange} name="pais" required class="selects">
                                <option select disabled option="">Selecione</option>
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </select>
                        </div>
                        <div>
                            <label>Escolha uma ou mais cidades</label><br></br>
                            <select onChange={this.handleInputChange} name="cidade" required class="selects">
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
}



export default Form