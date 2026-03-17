type EmailLayoutProps = {
  title: string;
  preheader: string;
  body: string;
};

export function renderEmailLayout({ title, preheader, body }: EmailLayoutProps) {
  return `
  <html>
    <body style="margin:0;padding:0;background:#f7f2e8;font-family:Arial,sans-serif;color:#211d1a;">
      <div style="display:none;max-height:0;overflow:hidden;">${preheader}</div>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px;">
        <tr>
          <td align="center">
            <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:24px;overflow:hidden;border:1px solid #eadbc0;">
              <tr>
                <td style="background:#111319;padding:32px 40px;color:#fff7e8;">
                  <div style="font-size:14px;letter-spacing:0.18em;text-transform:uppercase;color:#d5b16a;">Erg Chebbi Luxury</div>
                  <div style="font-size:36px;line-height:1.15;font-family:Georgia,serif;margin-top:8px;">${title}</div>
                </td>
              </tr>
              <tr>
                <td style="padding:32px 40px;font-size:16px;line-height:1.75;">
                  ${body}
                </td>
              </tr>
              <tr>
                <td style="padding:0 40px 32px;color:#7c6d53;font-size:13px;">
                  Merzouga · Erg Chebbi · Morocco<br/>
                  WhatsApp: +212 691 999 897 · Email: soufianechahid80@gmail.com
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}
