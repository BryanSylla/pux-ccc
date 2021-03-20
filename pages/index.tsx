/*
 * pages/index.tsx
 * Description: The "homepage", so to speak.
 * Copyright (c) 2021 PredictiveUX
 */
import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react'
import Head from 'next/head'
import axios from 'axios'

import { AlbumTable, FilterInput, PageTitle } from 'components/'

import css from 'styles/Home.module.css'
import { AlbumData, TableColumn } from 'typings'

const url = 'http://localhost:3000/api/albums'

const Home = (): JSX.Element => {
  const [albumData, setAlbumData] = useState<AlbumData[] | []>([])
  const [filteredAlbumData, setFilteredAlbumData] = useState<AlbumData[] | []>([])
  const [currentSortedColumn, setCurrentSortedColumn] = useState<TableColumn | ''>('')
  const [asc, setAsc] = useState(1)
  const [desc, setDesc] = useState(-1)

  //pulls all albums on load
  useEffect(() => {
    getAllAlbumData()
  }, [])

  const getAllAlbumData = (): void => {
    axios
      .get(url)
      .then((res) => {
        const albumData = res.data
        setAlbumData(albumData)
        setFilteredAlbumData(albumData)
      })
      .catch((error) => console.error(`Error: ${error}`))
  }

  const onFilterChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchQuery = event.target.value.toLowerCase()
    if (!searchQuery) {
      setFilteredAlbumData(albumData)
    } else {
      const newFilteredData = filteredAlbumData.filter((each) => {
        const album = each.album.toLowerCase()
        const artist = each.artist.toLowerCase()
        return album.includes(searchQuery) || artist.includes(searchQuery)
      })
      setFilteredAlbumData(newFilteredData)
    }
  }

  const sortColumn = (column: TableColumn) => {
    function compare(a: AlbumData, b: AlbumData) {
      if (a[column] < b[column]) {
        return desc
      }
      if (a[column] > b[column]) {
        return asc
      }
      return 0
    }

    //if user clicks on same column reverse order
    if (column.toLowerCase() === currentSortedColumn.toLowerCase()) {
      setDesc(desc === -1 ? 1 : -1)
      setAsc(asc === 1 ? -1 : 1)
    }
    //if user clicks on different column reset order
    else {
      setDesc(-1)
      setAsc(1)
    }

    const newFilteredData = filteredAlbumData.sort(compare)
    setFilteredAlbumData(newFilteredData)
    setCurrentSortedColumn(column) //use to determine whether or not to switch order
  }

  return (
    <React.Fragment>
      <Head>
        <title>PUX: Candidate Coding Challenge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={css.header}>
        <div>
          <img src='assets/pux_logo.png' alt='Predictive UX' />
        </div>
        <div className={css.title}>Candidate Coding Challenge</div>
      </div>
      <div className={css.container}>
        <PageTitle />
        <FilterInput changeHandler={onFilterChange} />
        <AlbumTable data={filteredAlbumData} onClickTableColumnHeader={sortColumn} />
      </div>
    </React.Fragment>
  )
}

export default Home
