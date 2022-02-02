import React from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import perdido from '../imagem/perdido.jpg';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

export default class ItemCard extends React.Component {
        


        
    render() {

        return <Container>

                    
        <Row  style={{ marginLeft: "-30px", width: "1100px"}} xl={4} className="g-4">
        {this.props.itens.map((item)=> (
    <Col>
    <Card > 
        <Card.Img variant="top" src={perdido} />
        <Card.Body>
        <Card.Title >{item.nome}</Card.Title>
        <Card.Text>
        {item.descricao}
        </Card.Text>
        <Card.Text>
        Local: {item.local}
        </Card.Text>
        <Card.Text>
        Data: {item.data}
        </Card.Text>
        <Card.Text>
        Categoria: {item.categoria?(item.categoria.nome):""} <br />
    
        </Card.Text>
        
        </Card.Body>
    </Card>
    </Col>
))}
</Row>
</Container>


  



}

   
}