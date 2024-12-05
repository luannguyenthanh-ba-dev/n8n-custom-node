import type { INodeProperties } from 'n8n-workflow';

export const groupChatsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['groupChats'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a group chats',
			},
			{
				name: 'Get One',
				value: 'getOne',
				action: 'Get a group chats',
			},
			{
				name: 'Get Many',
				value: 'getMany',
				action: 'Get many group chats',
			},
		],
		default: 'getMany',
	},
];

export const groupChatsFields: INodeProperties[] = [
	// ----------------------------------------
	//            Group Chats: create
	// ----------------------------------------
	{
		displayName: 'Project Code',
		name: 'projectCode',
		description: 'Project Code of the specific project in Viact',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['groupChats'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Group Chat Name',
		name: 'name',
		description: 'Name of group chat belong to the specific project in Viact',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['groupChats'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Timestamp',
		name: 'timestamp',
		type: 'string',
		default: '', // Default to current UTC time
		required: true,
		placeholder: 'YYYY-MM-DDTHH:mm:ss.sssZ',
		description: 'The timestamp in ISO 8601 format (UTC)',
		displayOptions: {
			show: {
				resource: ['groupChats'],
				operation: ['create'],
			},
		},
	},
	// ----------------------------------------
	//            Group Chats: get one
	// ----------------------------------------
	{
		displayName: 'Group Chat ID',
		name: 'groupChatId',
		description: 'ID of group chat belong to the specific project in Viact',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['groupChats'],
				operation: ['getOne'],
			},
		},
	},
	// ----------------------------------------
	//            Group Chats: get many
	// ----------------------------------------
	{
		displayName: 'Project Code',
		name: 'projectCode',
		description: 'Project Code of the specific project in Viact',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['groupChats'],
				operation: ['getMany'],
			},
		},
	},
	{
		displayName: 'Group Chat Name',
		name: 'name',
		description: 'Name of group chat belong to the specific project in Viact',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['groupChats'],
				operation: ['getMany'],
			},
		},
	},
	{
		displayName: 'From Create Time',
		name: 'fromTimestamp',
		type: 'string',
		default: '', // Default to current UTC time
		placeholder: 'YYYY-MM-DDTHH:mm:ss.sssZ',
		description: 'The timestamp in ISO 8601 format (UTC)',
		displayOptions: {
			show: {
				resource: ['groupChats'],
				operation: ['getMany'],
			},
		},
	},
	{
		displayName: 'To Create Time',
		name: 'toTimestamp',
		type: 'string',
		default: '', // Default to current UTC time
		placeholder: 'YYYY-MM-DDTHH:mm:ss.sssZ',
		description: 'The timestamp in ISO 8601 format (UTC)',
		displayOptions: {
			show: {
				resource: ['groupChats'],
				operation: ['getMany'],
			},
		},
	},
];
