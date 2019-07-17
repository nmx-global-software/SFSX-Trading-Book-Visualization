import React from 'react'

import Row from './table-row'

const Table = ({ headers, data, resolvers }) => {
    return data ? (
        <table className="table">
            {headers && <thead><tr>{headers.map((columnTitle, i) => <th key={i}>{columnTitle}</th>)}</tr></thead>}
            <tbody>{data.map((row, i) => <Row key={i} data={row} resolvers={resolvers}></Row>)}</tbody>
        </table>
    ) : null
}

export default Table
