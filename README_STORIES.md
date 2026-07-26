# راهنمای پیاده‌سازی قابلیت استوری در Pinpart Store

## 🎯 ویژگی‌های پیاده‌سازی شده

### 1. **بک‌اند (API)**
- ✅ مدل `Story` با تمام فیلدهای لازم
- ✅ کنترلر `StoriesController` با CRUD کامل
- ✅ آپلود فایل برای ویدیو و عکس
- ✅ مدیریت وضعیت فعال/غیرفعال
- ✅ سیستم انقضای خودکار (24 ساعته)
- ✅ شمارنده بازدید
- ✅ API برای گرفتن استوری‌های فعال

### 2. **فرانت‌اند (React)**
- ✅ `StoryCircle`: دایره‌های استوری مثل اینستاگرام
- ✅ `StoryViewer`: نمایش کامل استوری با قابلیت swipe
- ✅ `StoriesSection`: بخش استوری‌ها در صفحه اصلی
- ✅ `AdminStories`: مدیریت استوری‌ها در پنل ادمین
- ✅ `StoryForm`: فرم آپلود استوری برای ادمین

### 3. **پنل ادمین جدید**
- ✅ `AdminLayoutNew`: سایدبار مدرن با Material-UI Icons
- ✅ منوهای دسته‌بندی شده
- ✅ طراحی حرفه‌ای و مدرن
- ✅ رنگ‌بندی حرفه‌ای (بدون بنفش)
- ✅ قابلیت collapse/expand

## 🚀 راه‌اندازی

### 1. **بک‌اند**
```bash
cd PinpartStore.API
# Migration ایجاد شده است، فقط نیاز به آپدیت دیتابیس دارید
```

### 2. **فرانت‌اند**
```bash
cd Pinpartstore-frontend
npm install
npm run dev
```

## 📁 ساختار فایل‌های جدید

### بک‌اند:
```
PinpartStore.API/
├── Models/Story.cs
├── DTOs/StoryDTOs.cs
├── Controllers/StoriesController.cs
├── Migrations/20250101_AddStoriesTable.cs
└── Data/ApplicationDbContext.cs (آپدیت شده)
```

### فرانت‌اند:
```
Pinpartstore-frontend/
├── src/components/
│   ├── StoryCircle.tsx
│   ├── StoryViewer.tsx
│   └── StoriesSection.tsx
├── src/layouts/
│   └── AdminLayoutNew.tsx
├── src/pages/admin/
│   ├── Stories.tsx
│   └── StoryForm.tsx
├── src/services/api.ts (آپدیت شده)
├── src/types/index.ts (آپدیت شده)
└── src/App.tsx (آپدیت شده)
```

## 🔧 API Endpoints

### استوری‌ها:
- `GET /api/stories/active` - دریافت استوری‌های فعال
- `GET /api/stories` - دریافت همه استوری‌ها (ادمین)
- `GET /api/stories/{id}` - دریافت استوری خاص
- `POST /api/stories` - ایجاد استوری جدید
- `PUT /api/stories/{id}` - ویرایش استوری
- `DELETE /api/stories/{id}` - حذف استوری
- `POST /api/stories/{id}/view` - افزایش شمارنده بازدید
- `PUT /api/stories/{id}/toggle-status` - تغییر وضعیت فعال/غیرفعال

## 🎨 ویژگی‌های UI/UX

### StoryCircle:
- دایره‌های گرادیان رنگی
- نشانگر نوع رسانه (ویدیو/عکس)
- شمارنده بازدید
- تایمر انقضا
- انیمیشن hover

### StoryViewer:
- نمایش تمام‌صفحه
- نوار پیشرفت
- کنترل‌های پخش/توقف
- کنترل صدا برای ویدیو
- قابلیت swipe برای تغییر استوری
- کلیدهای میانبر کیبورد

### Admin Panel:
- سایدبار مدرن با Material-UI Icons
- منوهای دسته‌بندی شده
- آیکون‌های گرادیان رنگی
- حالت responsive
- طراحی dark/light friendly

## 🎯 نحوه استفاده

### 1. **ایجاد استوری جدید:**
- به آدرس `/admin/stories/create` بروید
- فایل عکس یا ویدیو آپلود کنید
- عنوان و توضیحات وارد کنید
- مدت زمان نمایش تنظیم کنید
- دکمه "ایجاد استوری" را بزنید

### 2. **مشاهده استوری‌ها:**
- کاربران: در صفحه اصلی، بالای Hero Section
- ادمین: در پنل مدیریت `/admin/stories`

### 3. **مدیریت استوری‌ها:**
- فعال/غیرفعال کردن
- ویرایش اطلاعات
- حذف استوری
- مشاهده آمار بازدید

## 🎨 رنگ‌بندی

### Primary Colors:
- آبی: `from-blue-500 to-blue-600`
- سبز: `from-emerald-500 to-emerald-600`
- بنفش: `from-purple-500 to-purple-600`
- صورتی: `from-pink-500 to-pink-600`
- نارنجی: `from-amber-500 to-amber-600`
- قرمز: `from-red-500 to-red-600`
- نیلی: `from-indigo-500 to-indigo-600`
- فیروزه‌ای: `from-cyan-500 to-cyan-600`

## 📱 Responsive Design
- کاملاً واکنش‌گرا
- مناسب موبایل، تبلت و دسکتاپ
- سایدبار جمع‌شونده در موبایل
- دکمه‌های عملیات سریع در موبایل

## 🔒 امنیت
- احراز هویت JWT برای APIهای ادمین
- دسترسی فقط برای نقش Admin
- اعتبارسنجی فایل‌های آپلود شده
- محدودیت حجم فایل (50MB)

## 🚀 نکات فنی

### 1. **انقضای خودکار:**
- استوری‌ها بعد از 24 ساعت منقضی می‌شوند
- API فقط استوری‌های فعال و منقضی‌نشده را برمی‌گرداند
- تایمر انقضا در UI نمایش داده می‌شود

### 2. **آپلود فایل:**
- پشتیبانی از فرمت‌های عکس: JPG, PNG, GIF
- پشتیبانی از فرمت‌های ویدیو: MP4, MOV, AVI
- تولید thumbnail برای ویدیوها
- ذخیره فایل‌ها در `wwwroot/uploads/stories/`

### 3. **Performance:**
- Lazy loading برای تصاویر
- Caching برای APIها
- Optimized image/video preview
- Smooth animations

## 🐛 عیب‌یابی

### اگر استوری‌ها نمایش داده نمی‌شوند:
1. بررسی کنید API بک‌اند در حال اجراست
2. بررسی کنید migrationها اعمال شده‌اند
3. بررسی کنید دایرکتوری `uploads/stories` وجود دارد
4. بررسی کنید token احراز هویت معتبر است

### اگر فایل آپلود نمی‌شود:
1. بررسی کنید حجم فایل کمتر از 50MB است
2. بررسی کنید فرمت فایل مجاز است
3. بررسی کنید دایرکتوری uploads write permission دارد

## 📈 آمار و گزارش
- تعداد کل استوری‌ها
- تعداد استوری‌های فعال
- تعداد ویدیوها و عکس‌ها
- کل بازدیدها
- آمار انقضا

## 🎉 موفق باشید!
این سیستم به طور کامل داینامیک است و تمام نیازهای شما را پوشش می‌دهد. برای هرگونه سوال یا مشکل، مستندات را بررسی کنید.