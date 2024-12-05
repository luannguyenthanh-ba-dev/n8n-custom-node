const axios = require('axios').default;

export function validateJSON(json: string | undefined): any {
	let result;
	try {
		result = JSON.parse(json!);
	} catch (exception) {
		result = undefined;
	}
	return result;
}

export const enum Methods {
	get = 'get',
	post = 'post',
	put = 'put',
	delete = 'delete',
	patch = 'patch',
}

interface IRequestData {
	// `headers` are custom headers to be sent
	headers?: any;
	// `params` are the URL parameters to be sent with the request - Must be a plain object or a URLSearchParams object
	params?: any;
	// `data` is the data to be sent as the request body
	// Only applicable for request methods 'PUT', 'POST', 'DELETE , and 'PATCH'
	data?: any;
	// `responseType` is the type of the response
	responseType?: any;
}

export async function HttpRequest(
	method: Methods | string,
	endpoint: string,
	requestData: IRequestData,
	//   apiKey?: string,
) {
	// API GATEWAY
	// const url = `https://conversation.viact.net:28866/` + endpoint;

	// Test Service:
	const url = `http://localhost:4000/api/v1/` + endpoint;

	console.log('HTTP Request to url:', url);
	if (!requestData?.headers) {
		requestData.headers = {};
	}
	//   requestData.headers['api-key'] = apiKey;
	//   Call to send alert api - no need result

	return axios({
		method,
		url,
		...requestData,
	})
		.then((response: any) => {
			return response?.data?.data || {};
		})
		.catch(function (err: any) {
			throw err;
		});
}

export const enum Operation {
	create = 'create',
	delete = 'delete',
	getOne = 'getOne',
	getMany = 'getMany',
	update = 'update',
	add = 'add',
	remove = 'remove',
}
