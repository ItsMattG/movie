import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const body = await new Response(req.body).json()

        const message = `
            Subject: ${body.subject}\r\n
            Text: ${body.text}
        `;

				const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
if (!emailRegex.test(body.email)) {
	    return new Response("Invalid email address", {
        status: 400
    })
}

        // await sgMail.send({
        //     to: `${body.email}`,
        //     from: 'gleesonmatt96@gmail.com',
        //     subject: 'New Message!',
        //     text: message,
        //     html: message.replace(/\r\n/g, '<br>'),
        // });
	    return new Response("Ok", {
        status: 200
    })
} catch (error) {
	console.error(error);
	if ((error as any).response) {
		console.error('SendGrid errors:', (error as any).response.body.errors);
	}
	    return new Response((error as Error).message, {
        status: 500
    })
}
}