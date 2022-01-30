import React from 'react'
import DataTable, { TableProps } from 'react-data-table-component'
import ArrowDownward from '@material-ui/icons/ArrowDownward'

const sortIcon = <ArrowDownward />
const selectProps = {
  indeterminate: (isIndeterminate: boolean) => isIndeterminate,
}

function DataTableBase<T>(props: TableProps<T>): JSX.Element {
  return (
    <DataTable
      pagination
      selectableRowsComponentProps={selectProps}
      sortIcon={sortIcon}
      dense
      {...props}
    />
  )
}

export default DataTableBase
