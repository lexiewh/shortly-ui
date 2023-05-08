import type { ReactElement } from 'react'

export default function NavBar(): ReactElement {
	return (
		<div>
			<h1 data-cy='header' className='p-6 text-xl font-bold'>
				Shortly
			</h1>
		</div>
	)
}
