import React, { Component } from 'react'

class Form extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {

        super(props)

    }

    render () {
        return (

            <body>
                <div class="content">

                    

                    <form>

                        <h1>Dados Pessoais</h1>

                        <div>
                            <label for="nome">Nome:</label><br></br>
                            <input type="text" name="nome" id="nome" class="inputs" required/>
                        </div>

                        <div>
                            <label for="email">E-mail:</label><br></br>
                            <input type="email" name="email" id="email" class="inputs" required/>
                            <span class="span-required">Digite um e-mail válido</span>
                        </div>

                        <div>
                            <label for="telefone">Telefone:</label><br></br>
                            <input type="tel" id="telefone" name="telefone"  class="inputs" required/>
                            <span class="span-required">Digite um telefone válido</span>
                        </div>

                        <div>
                            <label for="cpf">CPF:</label><br></br>
                            <input type="text" name="cpf" id="cpf"  class="inputs" required/>
                            <span class="span-required">Digite um CPF válido</span>
                        </div>

                        <h1>Destinos de Interesse</h1>

                        <div>
                            <label for="pais">Escolha um ou mais países</label><br></br>
                            <select name="pais" required class="selects">
                                <option select disabled option ="">Selecione</option>
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </select>
                        </div>
                        <div>
                            <label for="cidade">Escolha uma ou mais cidades</label><br></br>
                            <select name="cidade" required class="selects">
                                <option select disabled option ="">Selecione</option>
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