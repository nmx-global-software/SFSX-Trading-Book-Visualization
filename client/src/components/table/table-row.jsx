import React from 'react'

const TableRow = ({ data, resolvers }) => {
    return data && resolvers ? (
        <tr>
            {resolvers.map((resolver, i) => <td key={i}>{resolver ? resolver(data) : null}</td>)}
        </tr>
    ) : null
}

export default TableRow
