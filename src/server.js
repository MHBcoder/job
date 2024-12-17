const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000; // پورت سرور

// Middleware
app.use(cors()); // فعال کردن درخواست‌ها از منابع دیگر
app.use(bodyParser.json()); // پردازش درخواست‌های JSON

// حافظه موقت برای ذخیره کاربران
const users = [];

// مسیر ثبت‌نام
app.post('/api/register', (req, res) => {
    const { fullName, email, password } = req.body;

    // اعتبارسنجی اطلاعات
    if (!fullName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // بررسی تکراری بودن ایمیل
    const existingUser = users.find(user => user.email === email & user.fullName === fullName);
    if (existingUser) {
        return res.status(400).json({ message: 'Email or name is already registered' });
    }

    // ذخیره کاربر جدید
    users.push({ fullName, email, password });
    return res.status(201).json({ message: 'User registered successfully' });
});

// مسیر دریافت لیست کاربران
app.get('/api/users', (req, res) => {
    res.status(200).json(users); // برگرداندن لیست کاربران
});

// راه‌اندازی سرور
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
