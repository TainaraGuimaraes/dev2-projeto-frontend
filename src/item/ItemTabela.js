import React from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default class ItemTabela extends React.Component {
        
        
    render() {

       return <table border="1" minWidth="650" class="table" > 
       <TableHead style={{padding:"0px"}}>
            <TableRow  style={{padding:"0px"}} >
                <TableCell>Nome</TableCell>
                <TableCell>Descricao</TableCell>
                <TableCell>Cor</TableCell>
                <TableCell>Local</TableCell>
                <TableCell>Marca</TableCell>
                <TableCell>Modelo</TableCell>
                <TableCell>Perdido</TableCell>
                <TableCell>Devolvido</TableCell>
                <TableCell>Data</TableCell>
                <TableCell>Usuario</TableCell>
                <TableCell>Categoria</TableCell>
                <TableCell>Excluir</TableCell>
                <TableCell>Editar</TableCell>

           </TableRow>
        </TableHead>
        <TableBody style={{padding:"0px"}}>
            {this.props.itens.map((item)=><TableRow style={{padding:"0px"}} key={item.id} > 
                <TableCell>{item.nome}</TableCell>
                <TableCell>{item.descricao}</TableCell>
                <TableCell>{item.cor}</TableCell>
                <TableCell>{item.local}</TableCell>
                <TableCell>{item.marca}</TableCell>
                <TableCell>{item.modelo}</TableCell>
                <TableCell>{item.perdido}</TableCell>
                <TableCell>{item.devolvido}</TableCell>
                <TableCell>{item.data}</TableCell>
                <TableCell>{item.usuario?(item.usuario.nome):""}</TableCell>
                <TableCell>{item.categoria?(item.categoria.nome):""}</TableCell>
                <TableCell>
                    <IconButton onClick={()=>this.props.onApagar(item)}>
                        <Icon color="error">delete</Icon>
                    </IconButton>
                </TableCell>
                <TableCell>
                        <IconButton onClick={()=>this.props.onEditar(item)}>
                            <Icon color="primary">edit</Icon>
                        </IconButton>
                </TableCell>
            </TableRow> )}
            </TableBody>
            </table>
            

    }
}