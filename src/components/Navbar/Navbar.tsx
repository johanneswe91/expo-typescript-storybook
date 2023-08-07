import { ReactNode } from 'react';
import { View } from 'react-native';

interface IProps {
	children: ReactNode[];
}

export const Navbar = (props: IProps) => {
	const { children } = props;

	return (
		<View
			style={{
				position: 'relative',
				height: 60,
				width: '100%',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: '#ffffff',
				paddingHorizontal: 10,
				paddingTop: 10
			}}
		>
			{children}
		</View>
	);
};
