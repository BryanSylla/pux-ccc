/*
 * components/FormattedColumn.tsx
 * To extend simply add your formatting algorithm in the switch statement in the formatData Method
 * Copyright (c) 2021 PredictiveUX
 */

import { DetailedHTMLProps, ThHTMLAttributes } from 'react'

interface sortableHeaderProps
  extends DetailedHTMLProps<
    ThHTMLAttributes<HTMLTableHeaderCellElement>,
    HTMLTableHeaderCellElement
  > {
  handleClick: (column: string) => void
}

const SortableHeader = (props: sortableHeaderProps) => {
  const innerText = props.children?.toString().toLowerCase() || ''
  const clickCondition = props.handleClick && innerText
  return (
    <th
      onClick={() => {
        if (clickCondition) props.handleClick(innerText)
      }}
      style={{ cursor: 'pointer' }}
    >
      {props.children}
    </th>
  )
}

export default SortableHeader
