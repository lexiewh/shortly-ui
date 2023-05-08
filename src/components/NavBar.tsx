import type { ReactElement } from 'react'
import Button from './SingleComponents/Button'
import NavLink from './SingleComponents/NavLink'

export default function NavBar(): ReactElement {
	return (
		<div className='container flex w-[100vw] items-center px-32 py-10'>
			<div className='title-container container flex items-center'>
				<h1 data-cy='title' className='pr-6 text-3xl font-bold text-dark-blue'>
					Shortly
				</h1>
				<ul className='flex space-x-4'>
					<NavLink text='Features' link='/' />
					<NavLink text='Pricing' link='/' />
					<NavLink text='Resources' link='/' />
				</ul>
			</div>
			<div className='acc-container container flex items-center justify-end'>
				<ul className='flex items-center space-x-6'>
					<NavLink text='Login' link='/' />
					<li>
						<Button text='Sign Up' />
					</li>
				</ul>
			</div>
		</div>
	)
}
