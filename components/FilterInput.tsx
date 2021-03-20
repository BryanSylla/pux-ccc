/*
 * components/FilterInput.tsx
 * Description: Component used for filtering data
 * Copyright (c) 2021 PredictiveUX
 */
import styled from 'styled-components'

import css from 'styles/Home.module.css'
import { ChangeEvent } from 'react'

/** styled components here */
const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`

const Instructions = styled.div`
  margin-right: 10px;
`
type FilterInputProps = {
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const FilterInput = (props: FilterInputProps): JSX.Element => {
  return (
    <Wrapper>
      <Instructions>Use this input to filter data...</Instructions>
      <input type='text' className={css.filterInput} onChange={props.changeHandler} />
    </Wrapper>
  )
}

export default FilterInput
