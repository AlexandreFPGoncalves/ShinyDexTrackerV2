import React from 'react';
import { Block, Header, InitialPage } from '../../components';
import { rem } from '../../helpers';
import { useRandomNumberHelper } from './randomNumber.helper';

export const RandomNumberScreen: React.FC = () => {
	const { handleGenerateOnClick, generatedValue, handleOnChange, resources, values } = useRandomNumberHelper();
	return (
		<InitialPage style={{ backgroundColor: 'var(--grey-900)' }}>
			<Header />
			<Block
				stack
				style={{
					height: '100%',
					justifyContent: 'space-evenly',
				}}
			>
				<Block align={{ horizontal: 'center' }} style={{ color: 'var(--white)' }}>
					<Block style={{ border: `1px solid var(--grey-100)`, borderRadius: '5px', padding: rem(50) }}>
						<Block stack align={{ horizontal: 'center' }}>
							<button className="btn btn-purple">Click me</button>
						</Block>
					</Block>
				</Block>
			</Block>
		</InitialPage>
	);
};
