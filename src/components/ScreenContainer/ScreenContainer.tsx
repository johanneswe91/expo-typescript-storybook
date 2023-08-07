import { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';

interface IProps {
	children?: ReactNode;
	style?: ViewStyle;
}

const ScreenContainer = (props: IProps) => {
	const { children, style } = props;

	return <View style={[{ flex: 1 }, style]}>{children}</View>;
};

export default ScreenContainer;
