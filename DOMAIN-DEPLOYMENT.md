# StreamTek Domain Deployment Instructions

## ✅ Site Rebrand Complete

The site has been fully rebranded from "Forefront Imaging" to **StreamTek**.

---

## 🌐 Domain Configuration for Vercel

You now own three StreamTek domains:
- `streamtek.co.uk` (PRIMARY - UK market)
- `streamtek.co` (Secondary)
- `streamtek.org` (Secondary)

### Step 1: Add Primary Domain to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/damian756s-projects/forefront-imaging-6zvd)
2. Click **Settings** → **Domains**
3. Add domain: `streamtek.co.uk`
4. Vercel will provide DNS records to configure

### Step 2: Configure DNS at Your Domain Registrar

**For streamtek.co.uk (primary):**

Add these DNS records where you registered the domain:

**Option A: Using Vercel DNS (Recommended)**
```
Type: NS (Nameserver)
Name: @
Value: ns1.vercel-dns.com
Value: ns2.vercel-dns.com
```

**Option B: Using A/CNAME Records**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Add Secondary Domains

After streamtek.co.uk is working:

1. Add `streamtek.co` to Vercel domains
2. Configure to **redirect** to streamtek.co.uk
3. Add `streamtek.org` to Vercel domains  
4. Configure to **redirect** to streamtek.co.uk

### Step 4: Email Configuration (Optional)

**For Resend Email (order notifications):**

The site uses `orders@streamtek.co.uk` for order confirmation emails.

1. Go to [Resend Dashboard](https://resend.com/domains)
2. Add domain: `streamtek.co.uk`
3. Add these DNS records:

```
Type: TXT
Name: resend._domainkey
Value: [Resend will provide]

Type: MX
Name: @
Value: feedback-smtp.eu-west-1.amazonses.com
Priority: 10
```

---

## 🔄 Migration Timeline

### Current State:
- ✅ Site fully rebranded to StreamTek
- ✅ Code deployed to GitHub
- ⏳ Currently hosted at: `forefront-imaging-6zvd.vercel.app`

### After Domain Setup:
- ✅ Primary URL: `https://streamtek.co.uk`
- ✅ WWW redirect: `https://www.streamtek.co.uk` → `https://streamtek.co.uk`
- ✅ Secondary domains redirect: `.co` and `.org` → `.co.uk`
- ✅ Old domain keeps working until you're ready to remove it

---

## 📧 Email Configuration in Vercel

After domain is connected, update Resend API key:

1. Go to Vercel **Settings** → **Environment Variables**
2. Update or add:
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_your_resend_api_key`
   - **Environment:** All (Production, Preview, Development)
3. **Redeploy** the site

---

## 🧪 Testing Checklist

After domain is live, test:

- [ ] Homepage loads at streamtek.co.uk
- [ ] All navigation links work
- [ ] Product pages load correctly
- [ ] Add to cart functionality works
- [ ] Checkout process completes
- [ ] Contact form submits
- [ ] www.streamtek.co.uk redirects to streamtek.co.uk
- [ ] streamtek.co redirects to .co.uk
- [ ] streamtek.org redirects to .co.uk

---

## 🔐 SSL Certificate

Vercel automatically provisions SSL certificates via Let's Encrypt.

After adding domains:
- Wait 5-10 minutes for SSL to activate
- Both `http://` and `https://` will work
- `http://` auto-redirects to `https://`

---

## 📱 Social Media & Marketing Updates

After going live, update:

- [ ] Google My Business (if applicable)
- [ ] Social media profiles (LinkedIn, Facebook, etc.)
- [ ] Email signatures
- [ ] Business cards
- [ ] Any marketing materials

---

## 🔗 Old Domain Strategy

For `forefront-imaging-6zvd.vercel.app`:

**Option 1: Keep as Staging**
- Use for testing new features before production
- Don't delete from Vercel

**Option 2: Redirect**
- Set up redirect to streamtek.co.uk
- Remove after you're confident in new domain

---

## 💡 Brand Consistency

**Site Branding:**
- ✅ Logo: "StreamTek" 
- ✅ Tagline: "USB Video Capture"
- ✅ SEO Badge: "Magewell Official Distributor"
- ✅ Company: Churchtown Media Ltd (Company No. 16960442)
- ✅ Trading As: StreamTek

**Contact Details:**
- Phone: 07545 934360
- Email: hello@churchtownmedia.co.uk
- Address: Cambridge Avenue, Southport, PR9 9SA

---

## 🚨 Common Issues

**"Domain not found"**
- DNS propagation takes 24-48 hours
- Clear browser cache
- Check DNS settings at registrar

**"SSL Certificate Error"**
- Wait 10 minutes after adding domain
- Redeploy in Vercel if needed

**"Email not sending"**
- Verify RESEND_API_KEY is set in Vercel
- Check Resend domain verification status

---

## 📞 Support

**Vercel Issues:**
- [Vercel Docs](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)

**DNS Issues:**
- Contact your domain registrar support
- Use [DNS Checker](https://dnschecker.org/) to verify propagation

**Code Issues:**
- Check GitHub repository: damian756/forefront-imaging
- Latest commit includes full StreamTek rebrand

---

## 🎉 You're Ready!

The site is fully rebranded to StreamTek. Just add the domains to Vercel and configure DNS.

**Primary domain:** `streamtek.co.uk`
**Deployed from:** GitHub `main` branch
**Company:** Churchtown Media Ltd trading as StreamTek
