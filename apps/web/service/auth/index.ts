import { db } from '../database';
import { generateNextResponse } from '../lib/generateNextResponse';
import { HTTP_STATUS } from '../lib/httpStatus';
import { supabase } from '../lib/supabase/server';

export default class AuthService {
  public async signUp({
    email,
    password,
    displayName,
  }: {
    email: string;
    password: string;
    displayName: string;
  }) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
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

    await db.user.create({
      data: {
        uid: data.user?.id || '',
        displayName,
        email: data.user?.email || '',
      },
    });

    return generateNextResponse({
      statusCode: HTTP_STATUS.OK,
      message: '',
      payload: { registered: true },
    });
  }
}
