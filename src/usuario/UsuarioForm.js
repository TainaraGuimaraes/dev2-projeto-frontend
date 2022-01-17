
import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem  from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';


export default class UsuarioForm extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.editar) {
            this.state = {
                nome: this.props.editar.nome,
                usuario: this.props.editar.usuario,
                senha: this.props.editar.senha,
                cpf: this.props.editar.cpf,
                email: this.props.editar.email,
                telefone: this.props.editar.telefone,
                usuarioId: this.props.editar.usuario ?
                    this.props.editar.usuario.id
                    : ""
            }

        } else {
            this.state = {
                nome: "",
                usuario: "",
                senha: "",
                cpf: "",
                email: "",
                telefone: "",
                usuarioId: ""
               
            }
        }
    }

    limpar() {
        if (this.props.editar) {
            this.props.onCancelar();
        } else {
            this.setState({
                nome: "",
                usuario: "",
                senha: "",
                cpf: "",
                email: "",
                telefone: "",
                usuarioId: ""
            });
        }
    }

    confirmar() {

        /*let usuario = this.props.usuarios.find(
            (usuario) => usuario.id === this.state.usuarioId

        );*/
        
     
        if (this.props.editar) {
            this.props.onAtualizar({
                id: this.props.editar.id,
                nome: this.state.nome,
                usuario: this.state.usuario,
                senha: this.state.senha,
                cpf: this.state.cpf,
                email: this.state.email,
                telefone: this.state.telefone,
                usuarioId: ""
            });
        } else {
            this.props.onCadastrar({
                nome: this.state.nome,
                usuario: this.state.usuario,
                senha: this.state.senha,
                cpf: this.state.cpf,
                email: this.state.email,
                telefone: this.state.telefone,
                usuarioId: ""
            });
        }
        this.limpar();
    }

    render() {
        
    
        console.log(this.state);
        return <DialogContent>
            
            <TextField 
            label="Nome"
            value={this.state.nome} 
                onChange={(event) => this.setState({
                    nome: event.target.value
                })}
            />  
               
            <br />

            <TextField 
            label="Usuário"
            value={this.state.usuarios} 
                onChange={(event) => this.setState({
                    usuario: event.target.value
                })}
            />  

            <br />


            <TextField 
            label="Senha"
            style={{marginTop:"20px"}}

            value={this.state.senha} 
                onChange={(evento) => this.setState({
                    senha: evento.target.value
                })}
            />
            <br />
        
            <TextField 
            label="CPF"
            component= "form"
            value={this.state.cpf} 
                onChange={(event) => this.setState({
                    cpf: event.target.value
                })}
            /> 

            
            <br /> 
              
           
            <TextField 
            label="E-mail"
            component= "form"
            value={this.state.email} 
                onChange={(event) => this.setState({
                    email: event.target.value
                })}
            /> 
           
    
               <br />

               <TextField 
            label="Telefone"
            component= "form"
            value={this.state.telefone} 
                onChange={(event) => this.setState({
                    telefone: event.target.value
                })}
            />

           <br />
                     

            <TextField 
                select 
                label="Usuario"
                value={this.state.usuarioId} 
                style={{minWidth:"100px"}}
                onChange={
                    (evento) => this.setState({
                        usuarioId: evento.target.value
                    })
                }>
                <MenuItem key="" value=""></MenuItem>
                {
                    this.props.usuarios && this.props.usuarios.map(
                        (usuario) => <MenuItem value={usuario.id}>{usuario.nome}</MenuItem>
                    )}
            
            </TextField> 
            <br />


            <Button
                style={{margin:"10px"}}
                variant="outlined" color="primary"
                disabled={this.state.valor < 0}
                onClick={() => this.confirmar()}
            >{this.props.editar ? "Confirmar" : "OK"}</Button>
            
            <Button
               variant="outlined" color="secondary"
                onClick={() => this.limpar()}
            >{this.props.editar ? "Cancelar" : "Limpar"}</Button>

     </DialogContent>
           
   
    }
    
}