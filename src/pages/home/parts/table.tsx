import React from 'react'
import { TableColumn } from 'react-data-table-component'
import DataTable from '../../../components/organism/table/index'
import { navigate } from '@reach/router'

interface DataRow {
  id: number
  debit: string
  credit: string
  year: string
  category: string
  description: string
  transactionDate: string
}

interface IProps {
  data: []
  loading: boolean
}

const Table = (Props: IProps) => {
  const detailPage = (row: DataRow) => {
    navigate('/detail', { state: { data: row } })
  }
  const columns: TableColumn<DataRow>[] = [
    {
      name: 'Id',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Debit',
      selector: (row) => row.debit,
      sortable: true,
    },
    {
      name: 'Credit',
      selector: (row) => row.credit,
      sortable: true,
    },
    {
      name: 'Category',
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: 'Description',
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: 'Transaction Date',
      selector: (row) => row.transactionDate,
      sortable: true,
    },
    {
      name: 'Detail',
      cell: (row) => (
        <button
          className="bg-blue-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex "
          onClick={() => detailPage(row)}
        >
          <span>Detail</span>
        </button>
      ),
      sortable: true,
    },
  ]

  return (
    <div>
      <DataTable
        columns={columns}
        data={Props.data}
        theme="solarized"
        striped
        progressPending={Props.loading}
      />
    </div>
  )
}

export default Table
