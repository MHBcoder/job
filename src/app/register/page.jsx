'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { StyledRegister } from '@/app/register/assets/register.style';

import SVGEye from '@/app/register/assets/icon/eye.svg';
import SVGNoEye from '@/app/register/assets/icon/no-eye.svg';
import SVGgoogle from '@/app/register/assets/icon/google.svg';
import Message from '@/components/Message'; // اضافه کردن کامپوننت پیغام

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();

    // تغییر نوع پسورد (نمایش یا مخفی کردن)
    const changeType = () => setShowPassword(!showPassword);

    // مدیریت تغییرات ورودی‌های فرم
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // ثبت‌نام در سایت و ارسال درخواست به سرور
    const handleRegister = async (e) => {
        e.preventDefault(); // جلوگیری از رفرش شدن صفحه

        if (loading) return; // جلوگیری از ارسال دوباره درخواست در زمان لود

        setLoading(true);
        setError(''); // پاک کردن ارور قبلی
        setSuccess(''); // پاک کردن پیام موفقیت قبلی

        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const result = await response.json();
            localStorage.setItem('isLoggedIn', 'true');
            setSuccess('sign up is ok!');

            setTimeout(() => {
                router.push('/');
            }, 2000);

        } catch (error) {
            setError('error! email or name is alredy');
        } finally {
            setLoading(false);
        }
    };

    return (
        <StyledRegister>
            {success && <Message type="success" message={success} />}
            {error && <Message type="error" message={error} />}

            <h1>Create an Account</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            
            
            <form onSubmit={handleRegister}>
                <label>Full name</label>
                <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    placeholder='Brandone Louis' 
                    required 
                />
                <label>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder='Brandonelouis@gmail.com' 
                    required 
                />
                <div className="parent-pass">
                    <label>Password</label>
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        placeholder='password' 
                        id='password'
                        required
                    />
                    <img 
                        src={showPassword ? SVGEye.src : SVGNoEye.src} 
                        id='icon' 
                        alt="toggle password visibility" 
                        onClick={changeType} 
                    />
                </div>
                <div className="parent-forgot">
                    <label>
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </label>
                    <span>Forgot Password ?</span>
                </div>
                <div className="parent-btn">
                    <button type="submit" disabled={loading}>
                        {loading ? 'Signing Up...' : 'Sign up'}
                    </button>
                    <button className='google'>
                        <img src={SVGgoogle.src} alt="Google logo" />
                        <span>SIGN UP WITH GOOGLE</span>
                    </button>
                </div>
                <p>You have an account?  <span>Login</span></p>
            </form>
        </StyledRegister>
    );
}
