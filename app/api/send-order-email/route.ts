import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { orderNumber, customer, items, totalPrice, orderDate } = body;

    // Format items list for email
    const itemsList = items.map((item: any) => 
      `- ${item.name} x ${item.quantity} - £${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; }
            .order-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6; }
            .bank-details { background: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #3b82f6; }
            .bank-details h3 { color: #1e40af; margin-top: 0; }
            .bank-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #bfdbfe; }
            .bank-row:last-child { border-bottom: none; }
            .label { font-weight: 600; color: #64748b; }
            .value { font-weight: 700; color: #1e293b; }
            .footer { background: #1e293b; color: #94a3b8; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; }
            .items-list { background: white; padding: 15px; border-radius: 8px; margin: 15px 0; }
            .total { font-size: 24px; color: #3b82f6; font-weight: bold; text-align: right; margin-top: 15px; }
            .highlight { background: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">✓ Order Confirmed</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Forefront Imaging</p>
            </div>
            
            <div class="content">
              <h2>New Order Received</h2>
              
              <div class="order-details">
                <h3 style="margin-top: 0; color: #1e40af;">Order #${orderNumber}</h3>
                <p><strong>Date:</strong> ${new Date(orderDate).toLocaleString('en-GB')}</p>
                
                <h4 style="margin-top: 20px;">Customer Details:</h4>
                <p style="margin: 5px 0;"><strong>Name:</strong> ${customer.fullName}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> ${customer.email}</p>
                <p style="margin: 5px 0;"><strong>Phone:</strong> ${customer.phone}</p>
                ${customer.company ? `<p style="margin: 5px 0;"><strong>Company:</strong> ${customer.company}</p>` : ''}
                
                <h4 style="margin-top: 20px;">Shipping Address:</h4>
                <p style="margin: 5px 0;">${customer.address}</p>
                <p style="margin: 5px 0;">${customer.city}, ${customer.postcode}</p>
                <p style="margin: 5px 0;">${customer.country}</p>
                
                ${customer.orderNotes ? `
                  <h4 style="margin-top: 20px;">Order Notes:</h4>
                  <p style="margin: 5px 0; font-style: italic;">${customer.orderNotes}</p>
                ` : ''}
              </div>

              <div class="items-list">
                <h3 style="margin-top: 0;">Order Items:</h3>
                <pre style="font-family: monospace; font-size: 14px; white-space: pre-wrap;">${itemsList}</pre>
                <div class="total">Total: £${totalPrice.toFixed(2)}</div>
              </div>

              <div class="bank-details">
                <h3>⚠️ Awaiting Bank Transfer Payment</h3>
                <div class="bank-row">
                  <span class="label">Account Name:</span>
                  <span class="value">Electronic Modular Solutions Ltd</span>
                </div>
                <div class="bank-row">
                  <span class="label">Sort Code:</span>
                  <span class="value">12-34-56</span>
                </div>
                <div class="bank-row">
                  <span class="label">Account Number:</span>
                  <span class="value">12345678</span>
                </div>
                <div class="bank-row">
                  <span class="label">Amount:</span>
                  <span class="value">£${totalPrice.toFixed(2)}</span>
                </div>
                <div class="bank-row">
                  <span class="label">Reference:</span>
                  <span class="value" style="color: #3b82f6;">${orderNumber}</span>
                </div>
              </div>

              <div class="highlight">
                <strong>⏰ Action Required:</strong> This order will be processed once payment is received. Typically confirmed within 1-2 business days.
              </div>
            </div>

            <div class="footer">
              <p><strong>Forefront Imaging</strong></p>
              <p>Electronic Modular Solutions Ltd<br>
              Unit 3, Towers Business Park, Rugeley, Staffordshire, WS15 1UZ, UK</p>
              <p>📞 +44 (0)116 277 5730 | 📧 hello@churchtownmedia.co.uk</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to business owner
    const { data, error } = await resend.emails.send({
      from: 'Forefront Imaging <orders@forefrontimaging.com>',
      to: ['damian.roche84@gmail.com'],
      subject: `🛒 New Order #${orderNumber} - ${customer.fullName}`,
      html: emailHtml,
      replyTo: customer.email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
