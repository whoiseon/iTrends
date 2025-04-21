import { NextResponse } from 'next/server';
import { HTTP_STATUS } from './httpStatus';

export type AppResponse<T> = {
  statusCode: HTTP_STATUS;
  message: string;
  payload: T;
};

export function generateNextResponse<T>(data: AppResponse<T>) {
  return NextResponse.json(data, { status: data.statusCode });
}
