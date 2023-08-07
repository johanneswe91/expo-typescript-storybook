import { Dimensions, Platform, Text, View } from 'react-native';

interface IProps {
	title: string;
}

export const NavbarTitle = (props: IProps) => {
	const { title } = props;
	const { width } = Dimensions.get('window');

	return (
		<View
			style={{
				position: 'absolute',
				top: 10,
				left: Platform.OS === 'web' && width >= 500 ? 160 : 80,
				right: Platform.OS === 'web' && width >= 500 ? 160 : 80,
				bottom: 0,
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<Text
				testID="header_text_title"
				style={{
					fontWeight: 'bold',
					color: '#000000',
					fontSize: 18
				}}
				numberOfLines={2}
			>
				{title}
			</Text>
		</View>
	);
};
