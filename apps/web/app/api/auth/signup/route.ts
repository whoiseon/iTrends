import { NextRequest } from 'next/server';

import AuthService from '../../../../service/auth';
import { generateNextResponse } from '../../../../service/lib/generateNextResponse';
import { HTTP_STATUS } from '../../../../service/lib/httpStatus';

const authService = new AuthService();

/**
 * @swagger
 * paths:
 *  /api/auth/signup:
 *    post:
 *      tags:
 *        - auth
 *      summary: Sign up
 *      description: >
 *        Sign up for a new account
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  description: The email address of the user
 *                password:
 *                  type: string
 *                  description: The password of the user
 *                displayName:
 *                  type: string
 *                  description: The display name of the user
 *              required:
 *                - email
 *                - password
 *                - displayName
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  statusCode:
 *                    type: number
 *                    description: The status code of the response
 *                    example: 200
 *                  message:
 *                    type: string
 *                    description: The message from the server
 *                    example: ''
 *                  payload:
 *                    type: object
 *                    properties:
 *                      registered:
 *                        type: boolean
 *                        description: Whether the user was registered successfully
 *                        example: true
 *                required:
 *                  - statusCode
 *                  - message
 *                  - payload
 *        400:
 *          description: Bad Request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  statusCode:
 *                    type: number
 *                    description: The status code of the response
 *                    example: 400
 *                  message:
 *                    type: string
 *                    description: The message from the server
 *                    example: 'User already exists'
 *                  payload:
 *                    type: object
 *                    properties:
 *                      registered:
 *                        type: boolean
 *                        description: Whether the user was registered successfully
 *                        example: false
 *                required:
 *                  - statusCode
 *                  - message
 *                  - payload
 *        500:
 *          description: Internal Server Error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  statusCode:
 *                    type: number
 *                    description: The status code of the response
 *                    example: 500
 *                  message:
 *                    type: string
 *                    description: The message from the server
 *                    example: 'Internal Server Error'
 *                  payload:
 *                    type: object
 *                    properties:
 *                      registered:
 *                        type: boolean
 *                        description: Whether the user was registered successfully
 *                        example: false
 *                required:
 *                  - statusCode
 *                  - message
 *                  - payload
 */
export async function POST(request: NextRequest) {
  try {
    const { email, password, displayName } = (await request.json()) as {
      email: string;
      password: string;
      displayName: string;
    };

    return await authService.signUp({ email, password, displayName });
  } catch (error) {
    console.error(error);

    return generateNextResponse({
      statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR,
      message: 'Internal Server Error',
      payload: {
        registered: false,
      },
    });
  }
}
