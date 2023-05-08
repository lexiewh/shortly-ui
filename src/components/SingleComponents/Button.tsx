import type React from 'react'
import type { ReactElement } from 'react'

interface ButtonProps {
	text: string
	// eslint-disable-next-line react/require-default-props
	onClick?: React.MouseEventHandler
}

export default function Button({ text, onClick }: ButtonProps): ReactElement {
	return (
		<button
			data-testid='Button'
			type='button'
			onClick={onClick}
			className='rounded-3xl bg-primary-cyan hover:bg-darker-cyan hover:shadow-xl'
		>
			<p className='py-1.5 px-4 text-xs font-bold text-white'>{text}</p>
		</button>
	)
}
