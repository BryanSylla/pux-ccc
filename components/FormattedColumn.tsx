/*
 * components/FormattedColumn.tsx
 * Description: React component that allows you to format the data represented in a table column.
 * To extend simply add your formatting algorithm in the switch statement in the formatData Method
 * Copyright (c) 2021 PredictiveUX
 */

import { DetailedHTMLProps, TdHTMLAttributes, useState, useEffect } from 'react'

type formattedTableProps = DetailedHTMLProps<
  TdHTMLAttributes<HTMLTableDataCellElement>,
  HTMLTableDataCellElement
> & {
  format: string
}

const formatData = (format: String, data: string) => {
  switch (format) {
    case 'addCommasBigNumber':
      return data
        .toString()
        .split(/(?=(?:\d{3})+(?:\.|$))/g)
        .join(',')
    default:
      return ''
  }
}

const FormattedColumn = (props: formattedTableProps) => {
  const data = (props && props.children && props.children.toString()) || ''
  const format = props.format
  const [formattedData, setFormattedData] = useState('')

  useEffect(() => {
    const result = formatData(format, data)
    setFormattedData(result)
  }, [format])

  return <td {...props}>{formattedData}</td>
}

export default FormattedColumn
