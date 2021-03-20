/*
 * components/AlbumTable.tsx
 * Description: Table displaying album information
 * Copyright (c) 2021 PredictiveUX
 */
import styled from 'styled-components'

import { AlbumTableProps } from '../typings'

import css from 'styles/Home.module.css'
import FormattedColumn from './FormattedColumn'

const Wrapper = styled.div`
  margin-top: 20px;
`
const AlbumTable: React.FC<AlbumTableProps> = ({ data }: AlbumTableProps): JSX.Element => {
  return (
    <Wrapper>
      <table className={css.albumTable}>
        <thead>
          <tr>
            <th>Country</th>
            <th>Rank</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Year</th>
            <th>Sold</th>
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
