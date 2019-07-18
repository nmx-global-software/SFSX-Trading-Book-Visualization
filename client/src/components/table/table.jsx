import React from 'react'
import PropTypes from 'prop-types'

import Row from './table-row'

const Table = ({ headers, data, resolvers, title }) => {
    return data && data.length ? (
        <div>
            {title && <h1 className="subtitle" style={{fontWeight: 700}}>{title}</h1>}
            <table className="table is-bordered is-striped is-fullwidth">
                {headers && <thead><tr>{headers.map((columnTitle, i) => <th key={i}>{columnTitle}</th>)}</tr></thead>}
                <tbody>{data.map((row, i) => <Row key={i} data={row} resolvers={resolvers}></Row>)}</tbody>
            </table>
        </div>
    ) : null
}

Table.propTypes = {
    headers: PropTypes.array,
    data: PropTypes.array,
    resolvers: PropTypes.array
}

export default Table
