type EmptyParams = {} | undefined;

export type AnonymousParamList = {
	[ERoutes.Welcome]: EmptyParams;
	[ERoutes.Authentication]: EmptyParams;
};

export type RegisteredParamList1 = {
	[ERoutes.Registered1]: EmptyParams;
	[ERoutes.Registered2]: EmptyParams;
};

export type RegisteredParamList2 = {
	[ERoutes.Registered3]: EmptyParams;
	[ERoutes.Registered4]: EmptyParams;
};

export type RegisteredParamList3 = {
	[ERoutes.Registered5]: EmptyParams;
	[ERoutes.Registered6]: EmptyParams;
};

export type RegisteredParamList4 = {
	[ERoutes.Registered7]: EmptyParams;
	[ERoutes.Registered8]: EmptyParams;
};

export enum ERoutes {
	// Anonymous
	Welcome = 'welcome',
	Authentication = 'authentication',

	// Registered
	RegisteredStack1 = 'registeredstack1',
	RegisteredStack2 = 'registeredstack2',
	RegisteredStack3 = 'registeredstack3',
	RegisteredStack4 = 'registeredstack4',

	// Stack 1 in Tab
	Registered1 = 'registered1',
	Registered2 = 'registered2',

	// Stack 2 in Tab
	Registered3 = 'registered3',
	Registered4 = 'registered4',

	// Stack 3 in Tab
	Registered5 = 'registered5',
	Registered6 = 'registered6',

	// Stack 4 in Tab
	Registered7 = 'registered7',
	Registered8 = 'registered8'
}
