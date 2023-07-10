import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const TableBody = ({ data, columns }) => {
    // const twoDArray = [
    //     ['[i][j]', '[i][j+1]'],
    //     ['[i+1][j]', '[i+1][j+1]']
    // ]
    // console.log(twoDArray.length)
    // for (let i = 0; i < twoDArray.length; i++) {
    //     let row = ''
    //     for (let j = 0; j < twoDArray[i].length; j++) {
    //         row += `[${i}${j}]` + ' '
    //     }
    //     console.log(row)
    // }
    console.log(data)
    console.log(data[1]._id)
    console.log(columns)
    console.log(Object.keys(columns))
    console.log(columns[Object.keys(columns)[2]].path)
    const renderContent = (item, column) => {
        if (columns[column].component) {
            const component = columns[column].component
            if (typeof component === 'function') {
                return component(item)
            }
            return component
        }
        return _.get(item, columns[column].path)
    }
    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    {Object.keys(columns).map((column) => (
                        <td key={column}>{renderContent(item, column)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}

TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
}

export default TableBody
