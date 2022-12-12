import React from "react";
import { Card, CardGroup, Container, Table } from "react-bootstrap";
const Tours = props =>{
     return (
       <Container className="mt-3">
         <Table variant="gray">
           <tbody>
             <tr>
               <th>{props.date}</th>
               <td>{props.city}</td>
               <td>{props.location}</td>
               <td>{props.tickets}</td> 
             </tr>
           </tbody>
         </Table>
       </Container>
     );
}

export default Tours;