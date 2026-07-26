const ProductDetailPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="rounded-[32px] bg-white p-8 shadow-xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="h-80 rounded-[32px] bg-slate-100" />
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">نام محصول</h2>
              <p className="text-sm text-gray-500">کد محصول: CP-XXXX</p>
            </div>
            <p className="text-gray-600">این بخش شامل تصاویر، توضیحات کامل و مشخصات فنی محصول است تا شما بتوانید سفارش استعلام یا درخواست خرید را به راحتی انجام دهید.</p>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-semibold">ویژگی‌های مهم</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• کیفیت بالا و استاندارد</li>
                <li>• ارسال سریع</li>
                <li>• پشتیبانی فنی</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">درخواست استعلام</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
