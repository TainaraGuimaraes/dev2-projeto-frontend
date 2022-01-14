import React, {Component} from 'react';
import axios from 'axios';
import ItemTabela from './ItemTabela';
import ItemForm from './ItemForm';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



export default class ItemView extends Component {

    constructor() {
      super();
      this.state={carregar:true, itemParaEditar:null};
    }

    listarUsuarios() {
      axios.get("/usuarios/").then(
        (retorno)=>this.setState({
          usuarios:retorno.data})  
      );
    }
    
    listarCategorias() {
      axios.get("/categorias/").then(
        (retorno)=>this.setState({
          categorias:retorno.data})  
      );
    }

    //teste

   


    listar() {
      axios.get("/itens/").then(
        (retorno)=>this.setState({
          carregar:false,
          itens:retorno.data})  
      );
    }
    apagar(item) {
      axios.delete(`/itens/${item.id}`).then(
        ()=>this.listar()
      );
    }

    cadastrar(item) {
      axios.post("/cadastrarItem/", item).then(
        ()=>this.listar()
      );
    }

    atualizar(item) {
      axios.put("/itens/"+item.id, item).then(
        ()=>this.listar()
      );
    }

    componentDidMount() {
      this.listar();
      this.listarUsuarios();
      this.listarCategorias();
    }

    editar(item) {
      this.setState({
        itemParaEditar:item
      });
    }

    render() {
       
            
      return <div>
      <Container maxWidth="sm" style={{ marginLeft: "300px"}}>
        <ItemForm 
          key={this.state.itemParaEditar?
              this.state.itemParaEditar.id:"0"}
          editar={this.state.itemParaEditar}
          usuarios={this.state.usuarios}
          categorias={this.state.categorias}
          onCadastrar={(item)=>this.cadastrar(item)}
          onAtualizar={(item)=>this.atualizar(item)}
          onCancelar={()=>this.setState({itemoParaEditar:null})}
          />
          
          <br/>
        {this.state.carregar?"Carregando ...":
            <ItemTabela 
              itens={this.state.itens} 
              onEditar={(item)=>this.editar(item)}
              onApagar={(item)=>this.apagar(item)}
              />}
              </Container>
      </div>
      
    }
}
