import {
	NodeConnectionType,
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';
import { createLlmMessagesFields } from './descriptions/CreateLlmMessagesDescription';
import { getOneLlmMessagesFields } from './descriptions/GetOneLlmMessagesDescription';
import { getManyLlmMessagesFields } from './descriptions/GetManyLlmMessagesDescription';

export class LlmMessages implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details here
		displayName: 'LLMMessages',
		name: 'llmMessages',
		icon: 'file:llmMessages.svg',
		group: ['transform'],
		version: 1,
		description: 'Perform actions on messages from the Viact API',
		defaults: {
			name: 'Viact LLM Messages',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'viactLlmMessagesApi',
				required: true,
			},
		],
		subtitle: '=LLMMessages {{ ": " + $parameter["operation"]}}',
		properties: [
			/**
			  {
				displayName: 'API Key',
				name: 'api-key',
				type: 'string',
				required: true,
				typeOptions: { password: true },
				default: '',
				placeholder: 'Enter your Viact LLM Project API Key',
				description: 'Your API key for authenticating with Viact LLM System',
			},
			 */
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Create', value: 'create', action: 'Create a new message' },
					{ name: 'Get One', value: 'getOne', action: 'Retrieve a specific message' },
					{ name: 'Get Many', value: 'getMany', action: 'Retrieve all messages' },
					// { name: 'Update', value: 'update', action: 'Update a specific message' },
				],
				default: 'getOne',
			},
			...createLlmMessagesFields,
			...getOneLlmMessagesFields,
			...getManyLlmMessagesFields,
		],
	};

	// The function below is responsible for actually doing whatever this node
	// is supposed to do. In this case, we're just appending the `myString` property
	// with whatever the user has entered.
	// You can make async calls and use `await`.
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		// Process data and return
		const result: INodeExecutionData[] = [
			{
				json: {},
			},
		];

		return [result];
	}
}
