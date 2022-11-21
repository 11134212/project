import React from 'react'
import MSI from '../assets/photo/msi.png'
import Logo from '../assets/photo/logo-right.png'
import '../scss/header.scss'
import { BsSearch } from 'react-icons/bs'
import { MdWhereToVote } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'

export const Header = () => {
	return (
		<div className='header'>
			<img className='logo' src={MSI} alt='logo' />
			<div className='header-words'>
				<span>ПРОДУКЦИЯ</span>
				<span>ЧТО НОВОГО</span>
				<span>СЕРВИС</span>
				<span>ГДЕ КУПИТЬ</span>
			</div>
			<div className='icons'>
				<div className='low-icons'>
					<AiOutlineUser className='icon' />
					<MdWhereToVote className='icon' />
					<BsSearch className='icon' />
				</div>
				<img src={Logo} alt='second-logo' />
			</div>
		</div>
	)
}
