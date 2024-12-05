import type { INodeProperties } from 'n8n-workflow';

export const getOneLlmMessagesFields: INodeProperties[] = [
	// ----------------------------------------
	//            LLM Messages: create
	// ----------------------------------------
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: ['getOne'],
			},
		},
	},
];
