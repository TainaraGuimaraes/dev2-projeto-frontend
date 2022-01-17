import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import ItemView from '../item/ItemView';
import Typography from '@material-ui/core/Typography';
import logoifrs from '../logoifrs.png';
import UsuarioView from '../usuario/UsuarioView';

export default class MenuPagina extends React.Component {
        constructor(){
        super();
        this.state={itemMenu:"", usuarioMenu: ""};
    }

    render() {
        return <Grid container justify="center" alignItems="stretch" style={
            {
                height: "100vh",
                backgroundColor: "#DCDCDC"
                
            }}>
            <Grid item xs="3" md="2" lg="2" style={{ backgroundColor: "#D3D3D3" }}  >

            <Toolbar><img src={logoifrs} style={{ height: "60px", marginRight: "5px" }} />
                    <Typography variant="title" gutterBottom>
                       
              </Typography>
                </Toolbar>
                <List component="nav">
                <ListItem button onClick={()=>this.setState({itemMenu:"item"})}>
                        
                    <ListItemIcon>
                        <Icon></Icon>
                        </ListItemIcon>
                        <ListItemText inset primary={
                            <Typography variant="button">
                                Cadastrar Item             
                            </Typography>
                           
                        } />
                    </ListItem>

                <ListItem button onClick={()=>this.setState({itemMenu:"item"})}>
                        
                    <ListItemIcon>
                        <Icon></Icon>
                        </ListItemIcon>
                        <ListItemText inset primary={
                            <Typography variant="button">
                                Consultar Item            
                            </Typography>
                               
                        } />
                    </ListItem>   

                <ListItem button onClick={()=>this.setState({itemMenu:"item"})}>
                        
                    <ListItemIcon>
                        <Icon></Icon>
                        </ListItemIcon>
                        <ListItemText inset primary={
                            <Typography variant="button">
                                Editar Item            
                            </Typography>
                               
                        } />
                    </ListItem> 

                <ListItem button onClick={()=>this.setState({usuarioMenu:"usuario"})}>
                        
                    <ListItemIcon>
                        <Icon></Icon>
                        </ListItemIcon>
                        <ListItemText inset primary={
                            <Typography variant="button">
                                Cadastrar usuario           
                            </Typography>
                               
                        } />
                    </ListItem>    

                <ListItem button onClick={()=>this.setState({usuarioMenu:"usuario"})}>
                        
                    <ListItemIcon>
                        <Icon></Icon>
                        </ListItemIcon>
                        <ListItemText inset primary={
                            <Typography variant="button">
                                Consultar usuario           
                            </Typography>
                                   
                         } />
                    </ListItem> 

                <ListItem button onClick={()=>this.setState({usuarioMenu:"usuario"})}>
                        
                    <ListItemIcon>
                        <Icon></Icon>
                        </ListItemIcon>
                        <ListItemText inset primary={
                            <Typography variant="button">
                                Editar Usuario           
                            </Typography>
                                   
                        } />
                    </ListItem>     

                </List> </Grid>
            <Grid item xs="9" md="100" lg="20"    >
                <Paper style={{ height: "100%"}} >
                    <AppBar position="static" style={{ height: "60px", backgroundColor: "#32CD32" }} >
                        <Toolbar style={{ color: "black"}}>Achados e Perdidos IFRS</Toolbar>
                    </AppBar>


                    <div style={{ marginLeft: "-300px", height: "calc(100% - 90px)"}}>
                        {this.state.itemMenu==="item"?<ItemView />:""} ,
                        {this.state.usuarioMenu ==="usuario"?<UsuarioView/>:""}

                    </div>
                    
                </Paper>
            </Grid>
            
        </Grid>
    }

}

