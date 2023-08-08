import { MyButton } from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

const MyButtonMeta: ComponentMeta<typeof MyButton> = {
	title: 'MyButton',
	component: MyButton,
	args: {
		text: 'Hello world'
	},
	decorators: [
		(Story) => (
			<View style={{ padding: 16 }}>
				<Story />
			</View>
		)
	]
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof MyButton>;

export const Basic: MyButtonStory = (args) => <MyButton {...args} />;
