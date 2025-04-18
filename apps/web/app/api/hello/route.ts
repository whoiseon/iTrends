import { HTTP_STATUS } from '../../../service/lib/httpStatus';

/**
 * @swagger
 * paths:
 *  /api/hello:
 *    get:
 *      tags:
 *        - test
 *      summary: testing
 *      description: >
 *        iTrends API Version
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                  createdAt:
 *                    type: string
 *                required:
 *                  - message
 *                  - createdAt
 */
export async function GET() {
  return new Response(
    JSON.stringify({ createdAt: Date(), message: 'iTrends API 1.0.0' }),
    {
      status: HTTP_STATUS.OK,
    },
  );
}
