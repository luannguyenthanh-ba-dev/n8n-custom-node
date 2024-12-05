import type {
	ICredentialDataDecryptedObject,
	// ICredentialTestRequest,
	ICredentialType,
	IHttpRequestOptions,
	INodeProperties,
} from 'n8n-workflow';

export class ViactLlmMessagesApi implements ICredentialType {
	name = 'viactLlmMessagesApi';

	displayName = 'Viact LLM Message API Key';

	documentationUrl = '';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	// test: ICredentialTestRequest = {
	// 	request: {
	// 		baseURL: 'https://actionnetwork.org/api/v2',
	// 		url: '/events?per_page=1',
	// 	},
	// };

	async authenticate(
		credentials: ICredentialDataDecryptedObject,
		requestOptions: IHttpRequestOptions,
	): Promise<IHttpRequestOptions> {
		requestOptions.headers = { 'api-key': credentials.apiKey };
		return requestOptions;
	}
}
