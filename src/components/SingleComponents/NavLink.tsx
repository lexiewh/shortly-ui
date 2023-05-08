import type { ReactElement } from 'react'

interface LinkProps {
	text: string
	link: string
}

export default function NavLink({ text, link }: LinkProps): ReactElement {
	return (
		<li className='text-xs font-bold text-gray-violet'>
			<a href={link}>{text}</a>
		</li>
	)
}
