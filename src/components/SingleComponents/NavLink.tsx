import type { ReactElement } from 'react'

interface LinkProps {
	text: string
	link: string
}

export default function NavLink({ text, link }: LinkProps): ReactElement {
	return (
		<li data-testid='NavLink' className='text-xs font-bold text-gray-violet'>
			<a href={link}>{text}</a>
		</li>
	)
}
