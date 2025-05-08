import { readFileSync } from 'fs';
import { join } from 'path';

import { generateNextResponse } from '../../../service/lib/generateNextResponse';
import { HTTP_STATUS } from '../../../service/lib/httpStatus';

import { Notification } from './notification';

/**
 * @swagger
 * paths:
 *  /api/notifications:
 *    get:
 *      tags:
 *        - notifications
 *      summary: Get all notifications
 *      description: Retrieve a list of notifications from the system
 *      responses:
 *        200:
 *          description: Successful operation
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  payload:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        title:
 *                          type: string
 *                        date:
 *                          type: string
 *                  statusCode:
 *                    type: number
 *                  message:
 *                    type: string
 *                required:
 *                  - payload
 *                  - statusCode
 *                  - message
 */
export async function GET() {
  const dataDir = join(process.cwd(), '/public/data/notifications.json');
  const jsonData = readFileSync(dataDir, 'utf8');
  const { data } = JSON.parse(jsonData) as { data: Notification[] };

  return generateNextResponse<Notification[]>({
    payload: data,
    statusCode: HTTP_STATUS.OK,
    message: '',
  });
}
