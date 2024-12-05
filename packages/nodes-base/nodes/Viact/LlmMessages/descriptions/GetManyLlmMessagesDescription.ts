import type { INodeProperties } from 'n8n-workflow';

export const getManyLlmMessagesFields: INodeProperties[] = [
	// ----------------------------------------
	//            LLM Messages: get many
	// ----------------------------------------
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['getMany'],
			},
		},
	},
	{
		displayName: 'Project Code',
		name: 'projectCode',
		description: 'Project Code of the specific project in Viact',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['getMany'],
			},
		},
	},
	{
		displayName: 'Group Chat ID',
		name: 'groupChatId',
		description: 'ID of group chat belong to the specific project in Viact',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['getMany'],
			},
		},
	},
	{
		displayName: 'From Timestamp',
		name: 'fromTimestamp',
		type: 'string',
		default: '', // Default to current UTC time
		placeholder: 'YYYY-MM-DDTHH:mm:ss.sssZ',
		description: 'The timestamp in ISO 8601 format (UTC)',
		displayOptions: {
			show: {
				operation: ['getMany'],
			},
		},
	},
	{
		displayName: 'To Timestamp',
		name: 'toTimestamp',
		type: 'string',
		default: '', // Default to current UTC time
		placeholder: 'YYYY-MM-DDTHH:mm:ss.sssZ',
		description: 'The timestamp in ISO 8601 format (UTC)',
		displayOptions: {
			show: {
				operation: ['getMany'],
			},
		},
	},
];
