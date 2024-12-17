'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AuthChecker({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn) {
      router.push('/register');
    } else {
      setLoading(false);
    }
  }, [router]);

  return; // پس از بارگذاری، محتوای صفحه اصلی نمایش داده می‌شود
}
