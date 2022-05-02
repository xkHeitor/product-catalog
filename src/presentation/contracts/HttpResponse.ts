export type HttpResponse<T = any> = {
    data: T
    statusCode: number;
}

export const ResponseError = (error: Error, code: number = 500): HttpResponse => ({
    statusCode: code, data: error
});

export const ResponseOk = (data: any, code: number = 200): HttpResponse => ({
    statusCode: code, data
});