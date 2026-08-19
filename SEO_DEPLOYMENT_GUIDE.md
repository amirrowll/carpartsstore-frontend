# راهنمای SEO و Deployment برای Pinpart Store

## 🚀 مراحل Deployment با SEO کامل

### 1. **قبل از Deployment**

#### 1.1 بررسی فایل‌های SEO
- [x] `index.html` - شامل Schema.org و Open Graph
- [x] `SEO.tsx` - کامپوننت SEO داینامیک
- [x] `seoConfig.ts` - تنظیمات SEO برای صفحات مختلف
- [x] `ProductDetailPage.tsx` - صفحه محصول با FAQ Schema
- [x] `HomePage.tsx` - صفحه اصلی با FAQ

#### 1.2 بررسی بکند
- [x] `SitemapController.cs` - sitemap داینامیک
- [x] `robots.txt` داینامیک
- [x] Image sitemap برای محصولات

### 2. **مراحل Deployment**

#### 2.1 Build فرانتند
```bash
cd carpartsstore-frontend
npm run build
```

#### 2.2 Publish بکند
- Publish پروژه .NET به هاست
- تنظیم connection string دیتابیس
- تنظیم `SiteUrl` در appsettings.json

#### 2.3 تنظیمات هاستینگ
```json
// appsettings.Production.json
{
  "SiteUrl": "https://pinpartstore.com",
  "ConnectionStrings": {
    "DefaultConnection": "Server=...;Database=...;"
  }
}
```

### 3. **ثبت در Google Search Console**

#### 3.1 اضافه کردن سایت
1. به [Google Search Console](https://search.google.com/search-console) بروید
2. دامنه `pinpartstore.com` را اضافه کنید
3. روش verification را انتخاب کنید

#### 3.2 روش‌های Verification
**روش 1: HTML File**
- فایل `google-site-verification.html` را در root سایت آپلود کنید
- در Search Console آپلود را تایید کنید

**روش 2: DNS Record**
- TXT record با مقدار verification code اضافه کنید
- در Search Console تایید کنید

#### 3.3 Sitemap Submit
1. به بخش Sitemaps در Search Console بروید
2. آدرس `https://pinpartstore.com/sitemap.xml` را اضافه کنید
3. وضعیت indexing را بررسی کنید

### 4. **بهبود سرعت سایت (Core Web Vitals)**

#### 4.1 بررسی با PageSpeed Insights
- به [PageSpeed Insights](https://pagespeed.web.dev/) بروید
- آدرس سایت را وارد کنید
- مشکلات را بررسی و رفع کنید

#### 4.2 اقدامات ضروری
1. **تصاویر بهینه**
   - از WebP format استفاده کنید
   - اندازه تصاویر را بهینه کنید
   - lazy loading فعال باشد

2. **Caching**
   - Browser caching فعال باشد
   - CDN برای static files
   - Cache headers مناسب

3. **JavaScript/CSS**
   - Minify و compress
   - Defer non-critical JS
   - Critical CSS inline

### 5. **تست SEO**

#### 5.1 تست Structured Data
- به [Google Rich Results Test](https://search.google.com/test/rich-results) بروید
- URL صفحات محصول را تست کنید
- از [Schema Markup Validator](https://validator.schema.org/) استفاده کنید

#### 5.2 تست Mobile Friendly
- به [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) بروید
- مطمئن شوید سایت mobile-friendly است

#### 5.3 تست Robots.txt
- به [Robots.txt Tester](https://www.google.com/webmasters/tools/robots-testing-tool) بروید
- مطمئن شوید صفحات مهم block نشده‌اند

### 6. **مانیتورینگ و آنالیز**

#### 6.1 Google Analytics 4
1. حساب GA4 ایجاد کنید
2. Tracking code را به سایت اضافه کنید
3. Events مهم را track کنید:
   - Product views
   - Contact clicks
   - Category navigation

#### 6.2 Google Search Console Monitoring
- روزانه performance را چک کنید
- Keywords و impressions را بررسی کنید
- Crawl errors را رفع کنید

### 7. **بهبود مداوم SEO**

#### 7.1 محتوای جدید
- هفته‌ای 2-3 محصول جدید اضافه کنید
- محتوای blog درباره قطعات خودرو
- FAQ صفحات را به روز کنید

#### 7.2 لینک‌سازی داخلی
- بین صفحات محصول لینک دهید
- از صفحات category به محصولات
- Breadcrumb navigation کامل

#### 7.3 لینک‌سازی خارجی
- در شبکه‌های اجتماعی فعال باشید
- با سایت‌های مرتبط همکاری کنید
- Reviews و testimonials جمع‌آوری کنید

### 8. **Troubleshooting**

#### 8.1 صفحات ایندکس نمی‌شوند
- robots.txt را چک کنید
- noindex تگ‌ها را بررسی کنید
- canonical URLs را چک کنید

#### 8.2 سرعت پایین
- تصاویر را بهینه کنید
- CDN فعال کنید
- Caching را بررسی کنید

#### 8.3 Structured Data Errors
- Schema markup را validate کنید
- Required fields را چک کنید
- JSON-LD syntax را بررسی کنید

## 📊 معیارهای موفقیت SEO

### کوتاه مدت (1 ماه)
- [ ] سایت در Google Search Console verified
- [ ] Sitemap submitted و indexed
- [ ] Core Web Vitals قابل قبول
- [ ] 10+ صفحه ایندکس شده

### میان مدت (3 ماه)
- [ ] 50+ صفحه ایندکس شده
- [ ] 100+ keyword impressions
- [ ] CTR بالای 2%
- [ ] سرعت سایت < 3 ثانیه

### بلند مدت (6 ماه)
- [ ] 200+ صفحه ایندکس شده
- [ ] 1000+ keyword impressions
- [ ] Position 1-3 برای 10+ keyword
- [ ] Organic traffic > 500 ماهانه

## 🛠 ابزارهای مفید

1. **Google Search Console** - مانیتورینگ performance
2. **Google Analytics 4** - آنالیز ترافیک
3. **PageSpeed Insights** - بررسی سرعت
4. **Rich Results Test** - تست structured data
5. **Mobile-Friendly Test** - تست mobile
6. **Ahrefs/SEMrush** - competitor analysis
7. **Screaming Frog** - crawl سایت
8. **GTmetrix** - performance testing

## 📞 پشتیبانی

برای هر سوال یا مشکل:
1. ابتدا این راهنما را بررسی کنید
2. خطاها را در Google Search Console چک کنید
3. با تیم توسعه تماس بگیرید

**توجه:** SEO فرآیندی مداوم است. حداقل هفته‌ای یکبار گزارش‌ها را بررسی و بهبود دهید.