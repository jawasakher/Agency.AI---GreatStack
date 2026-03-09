
import assets from '../assets/assets'
import React,{useEffect} from 'react'



const ThemeToggleBtn = ({theme, setTheme}) => {
    
    useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(theme || ( prefersDark ? 'dark' : 'light'))
    }, [])

    useEffect(() => {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme)
    }, [theme])

  return (
    <>
     <button>
        {theme === 'dark' ? (
            <img onClick={()=> setTheme('light')} src={assets.sun_icon} 
             className='w-8 h-8 border border-gray-500 rounded-full cursor-pointer' alt=""/>
            ) : (
                <img onClick={()=> setTheme('dark')} src={assets.moon_icon}
                className='w-8 h-8 border border-gray-500 rounded-full cursor-pointer' alt=""/>
            )}
        </button> 
    </>
  )
}

export default ThemeToggleBtn
