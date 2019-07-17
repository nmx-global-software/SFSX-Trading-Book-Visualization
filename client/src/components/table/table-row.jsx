import React from 'react'
import PropTypes from 'prop-types'

const TableRow = ({ data, resolvers }) => {
    return data && resolvers ? (
        <tr>
            {resolvers.map((resolver, i) => <td key={i}>{resolver ? resolver(data) : null}</td>)}
        </tr>
    ) : null
}


TableRow.propTypes = {
    data: PropTypes.object,
    resolvers: PropTypes.array
}


export default TableRow
