import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const afterCallback = (req: any, session: any) => {

    if (session.user) {
        return session;
    }
};

//export const GET = handleAuth();

export const GET = handleAuth({

    callback: async (req: NextApiRequest, res: NextApiResponse) => {

        try {
            return await handleCallback(req, res, {
                afterCallback,
            });
        } catch (error: any) {
            console.error('Error login: Redirecting to login-failed', error.message);
            return NextResponse.redirect(
                new URL(
                    `${process.env.AUTH0_ISSUER_BASE_URL}/v2/logout?client_id=nxBPyHyBrUa2fRNm9vPkdL4s850u8ndn&returnTo=${encodeURIComponent(`${process.env.AUTH0_BASE_URL}/login-failed`)}`
                )
            )
        }
    },
});


