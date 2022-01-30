import React, { useEffect, useState } from 'react'
import { Text } from '../../components/atom/text'
import Api from '../../services/api'
import Table from './parts/table'
import debounce from 'lodash.debounce'
import { format, eachDayOfInterval } from 'date-fns'
import Box from '@mui/material/Box'
import { DateRange } from '@mui/lab/DateRangePicker'
import Button from '@mui/material/Button'
import { DateRangePicker } from '../../components/molecules/datePicker'

const style = {
  color: '#666',
  letterSpacing: '1',
}

interface DataRow {
  id: number
  debit: string
  credit: string
  year: string
  category: string
  description: string
  transactionDate: string
}

const Home = () => {
  const [listBank, setListBank] = useState<DataRow[] | any>([])
  const [filteredObj, setFilteredObj] = useState<DataRow[] | any>([])
  const [loading, setLoading] = useState(true)
  const [value, setValue] = React.useState<DateRange<Date>>([null, null])

  const search = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') {
      const filterdProduct = listBank.filter((value: DataRow) =>
        value.description
          .replace(/\s/g, '')
          .toLowerCase()
          .includes(e.target.value.replace(/\s/g, '').toLowerCase())
      )
      setFilteredObj(filterdProduct)
    } else {
      setFilteredObj(listBank)
    }
  }, 500)

  const setFilterDateListBank = () => {
    const startDate = value[0] ? format(value[0], 'yyyy-MM-dd') : null
    const endDate = value[1] ? format(value[1], 'yyyy-MM-dd') : null
    if (startDate && endDate) {
      const dates = eachDayOfInterval({
        start: new Date(startDate),
        end: new Date(endDate),
      }).map((date) => format(date, 'yyyy-MM-dd'))
      const filterDate = listBank.filter((item: DataRow) =>
        dates.includes(item.transactionDate)
      )
      setFilteredObj(filterDate)
    }
  }

  useEffect(() => {
    function fetchData() {
      Api.get('/fakebank/accounts').then((item) => {
        setListBank(item.data)
        setFilteredObj(item.data)
        setLoading(false)
      })
    }

    if (listBank.length <= 0) {
      fetchData()
    }

    if (value[0] === null && value[1] === null && filteredObj.length <= 0) {
      setFilteredObj(listBank)
    }
  }, [value])

  return (
    <div className="container mx-auto">
      <div className=" my-10">
        <Text tag="h2" style={style} className="right-0 mb-10">
          Bank List
        </Text>
        <div className="flex">
          <DateRangePicker value={value} setValue={(e) => setValue(e)} />
          <Box sx={{ mx: 2 }}> </Box>
          <Button variant="contained" onClick={() => setFilterDateListBank()}>
            Search
          </Button>
        </div>

        <div className="pt-2 relative mx-auto text-gray-600">
          <input
            onChange={(e) => search(e)}
            className="border-2 border-gray-300 bg-white h-10  pl-5 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search By Description"
          />
        </div>
        <Table data={filteredObj} loading={loading} />
      </div>
    </div>
  )
}

export default Home
