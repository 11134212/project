import React, { useEffect, useState } from 'react'
import '../scss/mainblock.scss'
import { BsFillLaptopFill, BsFillCpuFill } from 'react-icons/bs'
import { RiArrowUpDownFill } from 'react-icons/ri'
import { IoIosArrowUp } from 'react-icons/io'
import { Pagination } from '../components/pagination'
import axios from 'axios'

export const MainBlock = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [items, setItems] = useState([])

	const URL = process.env.REACT_API
	useEffect(() => {
		axios.get(`${URL}`).then(res => {
			console.log(res)
			setItems(res.data)
		})
	}, [currentPage, items])

	return (
		<div className='mainblock'>
			<div className='category'>
				<h2>ГРАФИЧЕСКИЕ КАРТЫ</h2>
				<div className='main-links'>
					<div className='links'>
						<h4>Главная</h4>
						<h4>/</h4>
						<h4>Графические карты</h4>
						<h4>/</h4>
						<h4>Продукция</h4>
					</div>
					<div className='sort'>
						<h4>
							<RiArrowUpDownFill />
							Сортировка
						</h4>
						<button>Дате</button>
					</div>
				</div>
				<div className='filter'>
					<span>
						Графика
						<IoIosArrowUp className='arrow' />
					</span>
					<span>
						Графика AMD
						<IoIosArrowUp className='arrow' />
					</span>
					<span>
						<BsFillLaptopFill />
						Серии
						<IoIosArrowUp className='arrow' />
					</span>
					<span>
						Память
						<IoIosArrowUp className='arrow' />
					</span>
					<span>
						Рекомендуемый блок питания
						<IoIosArrowUp className='arrow' />
					</span>
					<span>
						Охлаждение
						<IoIosArrowUp className='arrow' />
					</span>
					<span>
						Коннекторы
						<IoIosArrowUp className='arrow' />
					</span>
					<span>
						Особенности
						<IoIosArrowUp className='arrow' />
					</span>
					<span>
						Размер
						<IoIosArrowUp className='arrow' />
					</span>
					<span>
						Аксессуары
						<IoIosArrowUp className='arrow' />
					</span>
					<span>
						<BsFillCpuFill />
						Графика
						<IoIosArrowUp className='arrow' />
					</span>
					<span>
						Особенности
						<IoIosArrowUp className='arrow' />
					</span>
					<button>Очистить</button>
				</div>
				<Pagination onChangePage={number => setCurrentPage(number)} />
			</div>
		</div>
	)
}
