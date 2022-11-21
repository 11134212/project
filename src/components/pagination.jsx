import React from 'react'
import ReactPaginate from 'react-paginate'
import '../scss/pagination.scss'

export const Pagination = ({ onChangePage }) => {
	return (
		<>
			<ReactPaginate
				className='pagination'
				breakLabel='...'
				nextLabel='next >'
				onPageChange={e => onChangePage(e.selected + 1)}
				pageRangeDisplayed={6}
				pageCount={3}
				previousLabel='<'
				renderOnZeroPageCount={null}
			/>
		</>
	)
}
