import React, {Component} from 'react';
import axios from 'axios';
import UsuarioTabela from '../usuario/UsuarioTabela';
import UsuarioForm from '../usuario/UsuarioForm';
import Container from '@material-ui/core/Container';

export default class UsuarioView extends Component {

    constructor() {
      super();
      this.state={carregar:true, usuarioParaEditar:null};
    }

    

    listarUsuarios() {
      axios.get("/usuarios/").then(
        (retorno)=>this.setState({
          usuarios:retorno.data})  
      );
    }


    listar() {
      axios.get("/usuarios/").then(
        (retorno)=>this.setState({
          carregar:false,
          usuarios:retorno.data})  
      );
    }
    apagar(usuario) {
      axios.delete(`/usuarios/${usuario.id}`).then(
        ()=>this.listar()
      );
    }

    cadastrar(usuario) {
      axios.post("/cadastrarUsuario/", usuario).then(
        ()=>this.listar()
      );
    }

    atualizar(usuario) {
      axios.put("/usuarios/"+usuario.id, usuario).then(
        ()=>this.listar()
      );
    }

    componentDidMount() {
      this.listar();
      this.listarUsuarios();
    }

    editar(usuario) {
      this.setState({
        usuarioParaEditar:usuario
      });
    }

    render() {
       
            
      return <div>
      <Container maxWidth="sm" style={{ marginLeft: "300px"}}>
        <UsuarioForm 
          key={this.state.usuarioParaEditar?
              this.state.usuarioParaEditar.id:"0"}
          editar={this.state.usuarioParaEditar}
          usuarios={this.state.usuarios}
          onCadastrar={(usuario)=>this.cadastrar(usuario)}
          onAtualizar={(usuario)=>this.atualizar(usuario)}
          onCancelar={()=>this.setState({usuarioParaEditar:null})}
          />
          
          <br/>
        {this.state.carregar?"Carregando ...":
            <UsuarioTabela 
              usuarios={this.state.usuarios} 
              onEditar={(usuario)=>this.editar(usuario)}
              onApagar={(usuario)=>this.apagar(usuario)}
              />}
              </Container>
      </div>
      
    }
}
