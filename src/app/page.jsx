'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [users, setUsers] = useState([]); // وضعیت برای ذخیره لیست کاربران
  const [loading, setLoading] = useState(true); // برای نمایش وضعیت بارگذاری
  const [error, setError] = useState(''); // برای نمایش خطا
  const router = useRouter();

  useEffect(() => {
    const status = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(status);

    if (status !== 'true') {
      router.push('/splash-screen');
    } else {
      fetchUsers(); // وقتی کاربر وارد شده، لیست کاربران را بارگذاری می‌کنیم
    }
  }, [router]);

  // بارگذاری لیست کاربران از API
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data); // ذخیره داده‌های کاربران
    } catch (error) {
      setError('Error fetching users');
    } finally {
      setLoading(false);
    }
  };

  if (isLoggedIn === null) return null; // نمایش هیچ چیز تا وضعیت ورود مشخص شود

  return (
    <div>
      <h1>به صفحه اصلی خوش آمدید!</h1>
      
      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>لیست کاربران</h2>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.fullName} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
