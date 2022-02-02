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
import ItemCadastroView from '../item/ItemCadastroView';
import Typography from '@material-ui/core/Typography';
import logoifrs from '../logoifrs.png';

export default class MenuPagina extends React.Component {
        constructor(){
        super();
        this.state={itemMenu:""};
    }

       



    render() {
        return <Grid container justify="center" alignItems="stretch" style={
            {
                height: "100vh",
                backgroundColor: "#DCDCDC"
                
            }}>
            <Grid item xs="3" md="2" lg="2" style={{ backgroundColor: "#fff" }}  >

            <Toolbar><img src={logoifrs} style={{ height: "60px", marginRight: "0px" }} />
                    <Typography variant="title" gutterBottom>
                        
              </Typography>
                </Toolbar>
                <List component="nav" >
                <ListItem button onClick={()=>this.setState({itemMenu:"item"})}>
                        
                        <ListItemIcon>
                            <Icon>table_rows</Icon>
                        </ListItemIcon>
                        <ListItemText inset primary={
                            <Typography variant="button">
                                Perdidos             
                            </Typography>
                           
                        } />
                    </ListItem>

                    <ListItem button onClick={()=>this.setState({itemMenu:"cadastro"})}>
                        
                        <ListItemIcon>
                            <Icon>add_box</Icon>
                        </ListItemIcon>
                        <ListItemText inset primary={
                            <Typography variant="button">
                                Novo item             
                            </Typography>
                           
                        } />
                    </ListItem>

                   
                    
                    
                </List> </Grid>
            <Grid item xs="9" md="100" lg="10"    >
                <Paper style={{ height: "100%"}} >
                    <AppBar position="static" style={{ height: "60px", backgroundColor: "#32CD32" }} >
                        <Toolbar style={{ color: "black" }}>Achados e Perdidos IFRS</Toolbar>
                    </AppBar>


                    <div style={{ marginLeft: "-300px", height: "calc(100% - 90px)"}}>
                        {this.state.itemMenu=="item"?<ItemView />:""}
                        {this.state.itemMenu=="cadastro"?<ItemCadastroView />:""} 

                    </div>
                    
                </Paper>
            </Grid>
            
        </Grid>
    }

}

