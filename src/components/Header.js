import { useState, useEffect} from "react";
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import {useMediaQuery} from "react-responsive";


export default function Header(){
    const [burgerClick, setBurgerClick] = useState(false)
    

    const isMobile = useMediaQuery({ query: "(max-width: 375px)"})
    
    
    const BurgerMenu = () => {
        const handleClearClick = () => {
            setBurgerClick(false)
        }
        return(
            <div className="w-[75%] bg-slate-600 h-screen absolute right-0 top-0 -mr-5 text-white drop-shadow-2xl">
                <span onClick={handleClearClick} className="flex justify-end">
                    <ClearIcon className="mt-4 mr-5" viewBox="0 0 20 20"/>
                </span>
                <ul className="ml-8 mt-32 text-left text-lg" >
                    <li className="mb-6"><h2>Home</h2></li>
                    <li className="mb-6"><h2>New</h2></li>
                    <li className="mb-6"><h2>Popular</h2></li>
                    <li className="mb-6"><h2>Trending</h2></li>
                    <li className="mb-6"><h2>Categories</h2></li>
                </ul>
            </div>
        )
    }

    return(
        <nav className="flex justify-between w-[90%] md:w-[75%] items-center mx-auto relative">

            {isMobile ? <Image src="/logo.svg" alt="logo" width={40} height={40} className="mt-5" /> : 
            <Image src="/logo.svg" alt="logo" width={60} height={60} className="mt-16" />}

            {isMobile ? (
                <>
                { burgerClick === false && <div className="burger text-right">
                    <MenuIcon onClick={() => setBurgerClick(true)} className="absolute right-1 top-0 mt-5"/>
                </div>}
                <div>
                    {burgerClick ? <BurgerMenu /> : null}
                </div>
                </>
                
            ):(<ul className="flex xl:mt-16 text-slate-600 hover:cursor-pointer">
                <li className="mr-6 md:hover:text-[#E9AB53]"><h2>Home</h2></li>
                <li className="mr-6 md:hover:text-[#E9AB53]"><h2>New</h2></li>
                <li className="mr-6 md:hover:text-[#E9AB53]"><h2>Popular</h2></li>
                <li className="mr-6 md:hover:text-[#E9AB53]"><h2>Trending</h2></li>
                <li className="md:hover:text-[#E9AB53]"><h2>Categories</h2></li>
            </ul>)}
        </nav>
    )

}