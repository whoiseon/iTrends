import { PostApiAuthSignupBody } from '@itrends/api';
import { createClient } from '../supabase/server';

import { generateNextResponse } from '../lib/generateNextResponse';
import { HTTP_STATUS } from '../lib/httpStatus';

export default class AuthService {
  public async signUp({ email, password, displayName }: PostApiAuthSignupBody) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          displayName,
        },
      },
    });

    if (error) {
      return generateNextResponse({
        statusCode: HTTP_STATUS.BAD_REQUEST,
        message: error.message,
        payload: {
          registered: false,
        },
      });
    }

    return generateNextResponse({
      statusCode: HTTP_STATUS.OK,
      message: '',
      payload: { registered: true },
    });
  }
}
