import React from 'react'
import PropTypes from 'prop-types'

import Row from './table-row'

const Table = ({ headers, data, resolvers }) => {
    return data && data.length ? (
        <table className="table is-bordered is-striped is-fullwidth">
            {headers && <thead><tr>{headers.map((columnTitle, i) => <th key={i}>{columnTitle}</th>)}</tr></thead>}
            <tbody>{data.map((row, i) => <Row key={i} data={row} resolvers={resolvers}></Row>)}</tbody>
        </table>
    ) : null
}

Table.propTypes = {
    headers: PropTypes.array,
    data: PropTypes.array,
    resolvers: PropTypes.array
}

export default Table
