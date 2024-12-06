import {
	IDataObject,
	NodeConnectionType,
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';
// import { createLlmMessagesFields } from './descriptions/CreateLlmMessagesDescription';
// import { getOneLlmMessagesFields } from './descriptions/GetOneLlmMessagesDescription';
// import { getManyLlmMessagesFields } from './descriptions/GetManyLlmMessagesDescription';
import { groupChatsOperations, groupChatsFields } from './descriptions/groupChatsDescription';
import { Methods, Operation, HttpRequest } from './GenericFunctions';

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
			// {
			// 	displayName: 'Operation',
			// 	name: 'operation',
			// 	type: 'options',
			// 	noDataExpression: true,
			// 	options: [
			// 		{ name: 'Create', value: 'create', action: 'Create a new message' },
			// 		{ name: 'Get One', value: 'getOne', action: 'Retrieve a specific message' },
			// 		{ name: 'Get Many', value: 'getMany', action: 'Retrieve all messages' },
			// 		{ name: 'Update', value: 'update', action: 'Update a specific message' },
			// 	],
			// 	default: 'getOne',
			// },
			// ...createLlmMessagesFields,
			// ...getOneLlmMessagesFields,
			// ...getManyLlmMessagesFields,
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Group Chats',
						value: 'groupChats',
					},
					{
						name: 'Messages',
						value: 'messages',
					},
					{
						name: 'Topics',
						value: 'topics',
					},
					{
						name: 'Key Clouds',
						value: 'keyClouds',
					},
				],
				default: 'groupChats',
			},
			...groupChatsOperations,
			...groupChatsFields,
		],
	};

	// The function below is responsible for actually doing whatever this node
	// is supposed to do. In this case, we're just appending the `myString` property
	// with whatever the user has entered.
	// You can make async calls and use `await`.
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		// Process data and return
		const result: IDataObject[] = [];
		const credentials = await this.getCredentials('viactLlmMessagesApi');
		const apiKey = credentials.apiKey as string;

		console.log('apiKey', apiKey);

		for (let i = 0; i < items.length; i++) {
			const resource = this.getNodeParameter('resource', 0) as string;
			const operation = this.getNodeParameter('operation', 0) as string;

			let response: any = {};
			try {
				// Select operation
				switch (resource) {
					case 'groupChats':
						if (operation === Operation.create) {
							const projectCode = this.getNodeParameter('projectCode', i, '') as string;
							const name = this.getNodeParameter('name', i, '') as string;
							const timestamp = this.getNodeParameter('timestamp', i, '') as string;
							response = await HttpRequest(Methods.post, 'group-chats', {
								headers: {
									['api-key']: apiKey,
								},
								data: { projectCode, name, timestamp },
							});
						}
						if (operation === Operation.getMany) {
							const projectCode = this.getNodeParameter('projectCode', i, '') as string;
							const name = this.getNodeParameter('name', i, '') as string;
							const fromTimestamp = this.getNodeParameter('fromTimestamp', i, '') as string;
							const toTimestamp = this.getNodeParameter('toTimestamp', i, '') as string;
							const params: any = {};
							if (projectCode) {
								params.projectCode = projectCode;
							}
							if (name) {
								params.name = name;
							}
							if (fromTimestamp) {
								params.fromTimestamp = fromTimestamp;
							}
							if (toTimestamp) {
								params.toTimestamp = toTimestamp;
							}
							console.log("params", params);
							response = await HttpRequest(Methods.get, 'group-chats', {
								headers: {
									['api-key']: apiKey,
								},
								params,
							});
						}
						break;

					case 'messages':
						console.log('Messages are coming soon!');
						break;

					case 'topics':
						console.log('Topics are coming soon!');
						break;

					case 'keyClouds':
						console.log('Key clouds are coming soon!');
						break;

					default:
						throw new Error('Invalid resource!');
				}

				Array.isArray(response)
					? result.push(...(response as IDataObject[]))
					: result.push(response as IDataObject);
			} catch (error) {
				if (this.continueOnFail()) {
					result.push({ error: error.message });
					continue;
				}
				throw new Error(`Call LLM Error: ${error.message}`);
			}
		}

		return [this.helpers.returnJsonArray(result)];
	}
}
