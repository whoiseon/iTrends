import { HTTP_STATUS } from '../../../service/lib/httpStatus';
import { getApiDocs } from '../../../service/lib/swagger';

export async function GET() {
  try {
    const spec = await getApiDocs();

    return new Response(JSON.stringify(spec), {
      status: HTTP_STATUS.OK,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    return new Response(e as BodyInit, { status: HTTP_STATUS.BAD_REQUEST });
  }
}
