import React from 'react';
import { PropTypes } from "prop-types";
import styled from 'styled-components';

const Table = styled.table`
border-spacing: 0;        
margin: 20px auto;
width: 700px;
border-radius: 5px;
border: 1px solid rgb(218, 217, 217);
box-shadow: 1px 4px 7px 2px rgba(230, 224, 224, 0.76);
-webkit-box-shadow: 1px 4px 7px 2px rgba(230, 224, 224, 0.76);
-moz-box-shadow: 1px 4px 7px 2px rgba(230, 224, 224, 0.76);
`;

const Thead = styled.thead`
background: #0cc2e1d9;
color: white;
`;

const Th = styled.th`
padding: 10px 0;

&:first-child {
    border-top-left-radius: 5px;
};

&:last-child {
    border-top-right-radius: 5px;
};
`;

const Td = styled.td`
text-align: center;
text-transform: capitalize;
padding: 10px 0;
color: gray;
`;

const Tbody = styled.tbody`

& tr:nth-child(odd) {
    background-color: white;
};

& tr:nth-child(even) {
    background-color: #e5ebf3;
};
`;

export default function TransactionHistory({items}) {

    return (
    <Table>
        <Thead>
        <tr>
            <Th>TYPE</Th>
            <Th>AMOUNT</Th>
            <Th>CURRENCY</Th>
        </tr>
        </Thead>
        <Tbody>
            {items.map(elemt => (
                <tr key= {elemt.id}>
                    <Td>{elemt.type}</Td>
                    <Td>{elemt.amount}</Td>
                    <Td>{elemt.currency}</Td>
                </tr>
            ))}
        </Tbody>
    </Table>
    )
};


TransactionHistory.propTypes = {
    items: PropTypes.array
};