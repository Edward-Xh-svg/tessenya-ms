const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// خدمة الملفات الثابتة من مجلد root
app.use(express.static(path.join(__dirname, 'root')));

// التوجيه إلى الصفحة الرئيسية لأي مسار غير موجود
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'root', 'index.html'));
});

// تشغيل الخادم محليًا فقط (وليس على Vercel)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Maintenance page running at http://localhost:${PORT}`);
  });
}

// تصدير التطبيق لـ Vercel
module.exports = app;