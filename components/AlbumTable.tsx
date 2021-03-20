/*
 * components/AlbumTable.tsx
 * Description: Table displaying album information
 * Copyright (c) 2021 PredictiveUX
 */
import styled from 'styled-components'

import css from 'styles/Home.module.css'

const Wrapper = styled.div`
  margin-top: 20px;
`

type AlbumTableProps = {
  data: any[]
}

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
              <tr>
                <td>{album.country}</td>
                <td>{album.rank}</td>
                <td>{album.artist}</td>
                <td>{album.album}</td>
                <td>{album.year}</td>
                <td>{album.sold}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Wrapper>
  )
}

export default AlbumTable
