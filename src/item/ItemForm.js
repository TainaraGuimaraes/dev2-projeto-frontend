
import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem  from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';









export default class ItemForm extends React.Component {



    constructor(props) {
        super(props);
        if (this.props.editar) {
            this.state = {
                nome: this.props.editar.nome,
                descricao: this.props.editar.descricao,
                cor: this.props.editar.cor,
                local: this.props.editar.local,
                marca: this.props.editar.marca,
                modelo: this.props.editar.modelo,
                perdido: this.props.editar.perdido,
                devolvido: this.props.editar.devolvido,
                data: this.props.editar.data,
                usuarioId: this.props.editar.usuario ?
                    this.props.editar.usuario.id
                    : "",
                categoriaId: this.props.editar.categoria ?
                    this.props.editar.categoria.id
                    : ""
            }

        } else {
            this.state = {
                nome: "",
                descricao: "",
                cor: "",
                local: "",
                marca: "",
                modelo: "",
                perdido: "",
                devolvido: "",
                data: "",
                usuarioId: "",
                categoriaId: ""
            }
        }
    }

    

    limpar() {
        if (this.props.editar) {
            this.props.onCancelar();
        } else {
            this.setState({
                nome: "",
                descricao: "",
                cor: "",
                local: "",
                marca: "",
                modelo: "",
                perdido: "",
                devolvido: "",
                data: "",
                usuarioId: "",
                categoriaId: ""
            });
        }
    }

    confirmar() {

        let usuario = this.props.usuarios.find(
            (usuario) => usuario.id == this.state.usuarioId

        );
        
        let categoria = this.props.categorias.find(
            (categoria) => categoria.id == this.state.categoriaId

        );

       

        if (this.props.editar) {
            this.props.onAtualizar({
                id: this.props.editar.id,
                nome: this.state.nome,
                descricao: this.state.descricao,
                cor: this.state.cor,
                local: this.state.local,
                marca: this.state.marca,
                modelo: this.state.modelo,
                perdido: this.state.perdido,
                devolvido: this.state.devolvido,
                data: this.state.data,
                usuario: usuario,
                categoria: categoria
            });
        } else {
            this.props.onCadastrar({
                nome: this.state.nome,
                descricao: this.state.descricao,
                cor: this.state.cor,
                local: this.state.local,
                marca: this.state.marca,
                modelo: this.state.modelo,
                perdido: this.state.perdido,
                devolvido: this.state.devolvido,
                data: this.state.data,
                usuario: usuario,
                categoria: categoria
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

            

                <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" >Descricao</label>
                <textarea class="form-control" value={this.state.descricao} 
                onChange={(evento) => this.setState({
                    descricao: evento.target.value
                })} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>


            <TextField 
            label="Cor"
            style={{marginTop:"20px"}}

            value={this.state.cor} 
                onChange={(evento) => this.setState({
                    cor: evento.target.value
                })}
            />
            <br />
            
      
           
            <TextField 
            label="Local"
            component= "form"
            value={this.state.local} 
                onChange={(event) => this.setState({
                    local: event.target.value
                })}
            /> 

            
            <br /> 
              

           
            <TextField 
            label="Marca"
            component= "form"
            value={this.state.marca} 
                onChange={(event) => this.setState({
                    marca: event.target.value
                })}
            /> 
           
          
            



               <br />

               <TextField 
            label="Modelo"
            component= "form"
            value={this.state.modelo} 
                onChange={(event) => this.setState({
                    modelo: event.target.value
                })}
            /> 
           


    

           <br />
                    <br />

                    <p>Perdido</p>
                    <label onChange={(event) => this.setState({perdido: event.target.value})} value={this.state.perdido} checked={this.state.perdido}>
                        <input value="true" 
                         type="checkbox" />
                            Sim
                    </label>
                    <label onChange={(event) => this.setState({perdido: event.target.value})} value={this.state.perdido} checked={this.state.perdido}>
                        <input value="false"
                         type="checkbox" />
                            Não
                    </label>

                    <br />

                    <br />

                   
                    <p>Devolvido</p>
                    <label onChange={(event) => this.setState({devolvido: event.target.value})} value={this.state.devolvido} checked={this.state.devolvido}>
                        <input value="true" 
                         type="checkbox" />
                            Sim
                    </label>
                    <label onChange={(event) => this.setState({devolvido: event.target.value})} value={this.state.devolvido} checked={this.state.perdido}>
                        <input value="false"
                         type="checkbox" />
                            Não
                    </label>

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

            
            
            

           

            <TextField 
                select 
                label="Categoria"
                value={this.state.categoriaId} 
                style={{minWidth:"100px"}}
                onChange={
                    (evento) => this.setState({
                        categoriaId: evento.target.value
                    })
                }>
                <MenuItem key="" value=""></MenuItem>
                {this.props.categorias && this.props.categorias.map((categoria) => <MenuItem value={categoria.id}>{categoria.nome}</MenuItem>)}
            
            </TextField> 

           



            <br /><br />

            




            <Button
                style={{margin:"10px"}}
                variant="outlined" color="primary"
                disabled={this.state.valor < 0}
                onClick={() => this.confirmar()}
            >{this.props.editar ? "Confirmar" : "Cadastrar"}</Button>
            
            <Button
               variant="outlined" color="secondary"
                onClick={() => this.limpar()}
            >{this.props.editar ? "Cancelar" : "Limpar"}</Button>

     </DialogContent>
           
   
    }
    
}

