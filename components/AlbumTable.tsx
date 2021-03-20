/*
 * components/AlbumTable.tsx
 * Description: Table displaying album information
 * Copyright (c) 2021 PredictiveUX
 */
import styled from 'styled-components'

import { AlbumTableProps } from '../typings'

import css from 'styles/Home.module.css'
import FormattedColumn from './FormattedColumn'
import SortableHeader from './SortableHeader'

const Wrapper = styled.div`
  margin-top: 20px;
`
const AlbumTable: React.FC<AlbumTableProps> = ({
  data,
  onClickTableColumnHeader
}: AlbumTableProps): JSX.Element => {
  return (
    <Wrapper>
      <table className={css.albumTable}>
        <thead>
          <tr>
            <SortableHeader handleClick={onClickTableColumnHeader}>Country</SortableHeader>
            <SortableHeader handleClick={onClickTableColumnHeader}>Rank</SortableHeader>
            <SortableHeader handleClick={onClickTableColumnHeader}>Artist</SortableHeader>
            <SortableHeader handleClick={onClickTableColumnHeader}>Album</SortableHeader>
            <SortableHeader handleClick={onClickTableColumnHeader}>Year</SortableHeader>
            <SortableHeader handleClick={onClickTableColumnHeader}>Sold</SortableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((album) => {
            return (
              <tr key={album.artist + album.album + album.country}>
                <td>{album.country}</td>
                <td>{album.rank}</td>
                <td>{album.artist}</td>
                <td>{album.album}</td>
                <td>{album.year}</td>
                <FormattedColumn format={'addCommasBigNumber'}>{album.sold}</FormattedColumn>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Wrapper>
  )
}

export default AlbumTable
