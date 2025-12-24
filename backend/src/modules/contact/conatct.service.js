const mailSvc = require("../../utils/mail.service");
const contactModel = require("./contact.model");

class ContactService{
    sendInquery = async (data)=>{
        try{
            const inquiry = await contactModel.create(data)
            return inquiry.save()

        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
    sendMail = async({name, email})=>{
        // Skip sending email if email is not provided or empty
      if (!email || email.trim() === '') {
        console.log(`Skipping email, no email address provided for the inquiry`);
        return null;
      }
      try{
        return  await mailSvc.sendEmail({
            to:email,
            sub:"We've Received Your Inquiry - Bleeding Tech",
            message:
            `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td align="center" style="padding: 40px 20px;">
                            <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                                <!-- Header -->
                                <tr>
                                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                                        <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">Bleeding Tech</h1>
                                    </td>
                                </tr>
                                
                                <!-- Content -->
                                <tr>
                                    <td style="padding: 40px 30px;">
                                        <h2 style="margin: 0 0 20px; color: #1a1a1a; font-size: 22px; font-weight: 600;">Hello ${name},</h2>
                                        
                                        <p style="margin: 0 0 16px; color: #4a5568; font-size: 16px; line-height: 1.6;">
                                            Thank you for reaching out to us. We've successfully received your inquiry and appreciate you taking the time to contact us.
                                        </p>
                                        
                                        <p style="margin: 0 0 16px; color: #4a5568; font-size: 16px; line-height: 1.6;">
                                            Our team will review your message and get back to you as soon as possible, typically within 24-48 hours.
                                        </p>
                                        
                                        <p style="margin: 0; color: #4a5568; font-size: 16px; line-height: 1.6;">
                                            We look forward to speaking with you soon.
                                        </p>
                                    </td>
                                </tr>
                                
                                <!-- Footer -->
                                <tr>
                                    <td style="background-color: #f7fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                                        <p style="margin: 0 0 8px; color: #1a1a1a; font-size: 16px; font-weight: 600;">Best regards,</p>
                                        <p style="margin: 0 0 16px; color: #667eea; font-size: 16px; font-weight: 600;">The Bleeding Tech Team</p>
                                        
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            </html>
            `
        }) 

      }catch(exception){
        console.log(exception);
        throw exception
      }
    }
    sendAdminNotification = async({name, email, phone, message})=>{
      // Send notification to admin/company email
      const adminEmail = process.env.SMTP_FROM;
      
      if (!adminEmail) {
        console.log('No admin email configured, skipping admin notification');
        return null;
      }
      
      try{
        return await mailSvc.sendEmail({
            to: adminEmail,
            sub: "New Inquiry Received - Bleeding Tech",
            message:
            `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td align="center" style="padding: 40px 20px;">
                            <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                                <!-- Header -->
                                <tr>
                                    <td style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 30px; text-align: center;">
                                        <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">🔔 New Inquiry Alert</h1>
                                    </td>
                                </tr>
                                
                                <!-- Content -->
                                <tr>
                                    <td style="padding: 30px;">
                                        <p style="margin: 0 0 24px; color: #4a5568; font-size: 16px; line-height: 1.6;">
                                            A new inquiry has been submitted on your website. Here are the details:
                                        </p>
                                        
                                        <!-- Inquiry Details Card -->
                                        <table role="presentation" style="width: 100%; background-color: #f7fafc; border-radius: 6px; border: 1px solid #e2e8f0;">
                                            <tr>
                                                <td style="padding: 20px;">
                                                    <table role="presentation" style="width: 100%;">
                                                        <tr>
                                                            <td style="padding: 8px 0; color: #718096; font-size: 14px; font-weight: 600; width: 100px;">Name:</td>
                                                            <td style="padding: 8px 0; color: #1a1a1a; font-size: 15px; font-weight: 500;">${name}</td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding: 8px 0; color: #718096; font-size: 14px; font-weight: 600;">Email:</td>
                                                            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-size: 15px;">${email}</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding: 8px 0; color: #718096; font-size: 14px; font-weight: 600;">Phone:</td>
                                                            <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #667eea; text-decoration: none; font-size: 15px;">${phone}</a></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        
                                        <!-- Message Section -->
                                        <div style="margin-top: 20px;">
                                            <p style="margin: 0 0 10px; color: #718096; font-size: 14px; font-weight: 600;">Message:</p>
                                            <div style="background-color: #f7fafc; border-left: 4px solid #667eea; padding: 16px; border-radius: 4px;">
                                                <p style="margin: 0; color: #2d3748; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                                            </div>
                                        </div>
                                        
                                        <p style="margin: 24px 0 0; color: #718096; font-size: 14px; line-height: 1.6;">
                                            Please respond to this inquiry as soon as possible.
                                        </p>
                                    </td>
                                </tr>
                                
                                <!-- Footer -->
                                <tr>
                                    <td style="background-color: #f7fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                                        <p style="margin: 0; color: #718096; font-size: 13px;">
                                            This is an automated notification from Bleeding Tech
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            </html>
            `
        })
      }catch(exception){
        console.log('Error sending admin notification:', exception);
        // Don't throw error, as this is just a notification
        return null;
      }
    }
    getAllInquiries = async ({filter={}, limit=10, skip=0, })=>{
        try{
            const query = contactModel.find(filter)
                .sort({_id:-1})
                .skip(skip)
                .limit(limit)
                .lean();

            const [count, data] = await Promise.all([
                contactModel.countDocuments(filter),
                query
            ]);
            return {count, inquiries:data}
        }catch(exception){
            console.log(exception);
            throw exception
        }
    }
}
module.exports = new ContactService()