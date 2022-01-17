import React from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default class UsuarioTabela extends React.Component {
        
        
    render() {

       return <table border="1" minWidth="650" class="table" > 
       <TableHead style={{padding:"0px"}}>
            <TableRow  style={{padding:"0px"}} >
                <TableCell>Nome</TableCell>
                <TableCell>Usuario</TableCell>
                <TableCell>Senha</TableCell>
                <TableCell>CPF</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>Telefone</TableCell>
                <TableCell>Excluir</TableCell>
                <TableCell>Editar</TableCell>

           </TableRow>
        </TableHead>
        <TableBody style={{padding:"0px"}}>
            {this.props.itens.map((usuario)=><TableRow style={{padding:"0px"}} key={usuario.id} > 
                <TableCell>{usuario.nome}</TableCell>
                <TableCell>{usuario.usuario}</TableCell>
                <TableCell>{usuario.senha}</TableCell>
                <TableCell>{usuario.cpf}</TableCell>
                <TableCell>{usuario.email}</TableCell>
                <TableCell>{usuario.telefone}</TableCell>
                <TableCell>{usuario.usuario?(usuario.usuario.nome):""}</TableCell>
                <TableCell>
                    <IconButton onClick={()=>this.props.onApagar(usuario)}>
                        <Icon color="error">delete</Icon>
                    </IconButton>
                </TableCell>
                <TableCell>
                        <IconButton onClick={()=>this.props.onEditar(usuario)}>
                            <Icon color="primary">edit</Icon>
                        </IconButton>
                </TableCell>
            </TableRow> )}
            </TableBody>
            </table>
            

    }
}