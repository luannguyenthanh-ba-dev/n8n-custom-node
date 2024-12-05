import type { INodeProperties } from 'n8n-workflow';

export const createLlmMessagesFields: INodeProperties[] = [
	// ----------------------------------------
	//            LLM Messages: get one
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
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Group Chat ID',
		name: 'groupChatId',
		description: 'ID of group chat belong to the specific project in Viact',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
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
				operation: ['create'], // Only show for Create and Update
			},
		},
	},
];
