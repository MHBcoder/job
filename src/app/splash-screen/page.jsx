'use client';

import SVGIntro from '@/app/splash-screen/assets/icons/intro.svg';
import SVGFlash from '@/app/splash-screen/assets/icons/flash.svg';

import { useRouter } from 'next/navigation';

import { StyledSplashScreen } from '@/app/splash-screen/assets/StyledSplash.style';

function introScreen() {
    const router = useRouter();
    function nextPage(){
        router.push("/register")
    }
    return ( 
        <>
            <StyledSplashScreen>
                <p className='brand-name'>Jobspot</p>
                <div className='parent-icon'>
                    <img src={SVGIntro.src} alt="" />
                </div>
                <div className='parent-title'>
                    <h3>Find Your</h3>
                    <h3 className='title-yellow'>Dream Job</h3>
                    <h3>Here!</h3>
                </div>
                <p>Explore all the most exciting job roles based on your interest and study major.</p>
                <div className="parent-btn">
                    <button onClick={() => {nextPage()}}>
                        <img src={SVGFlash.src} alt="" />
                    </button>
                </div>
            </StyledSplashScreen>
        </>
    );
}

export default introScreen;