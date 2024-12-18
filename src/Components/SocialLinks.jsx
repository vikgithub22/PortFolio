import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  cursor-pointer rounded-tr-md'>
                    <a href="https://www.linkedin.com/in/vikrant-ahir-7518a027a" target="_blank" rel="noopener noreferrer" className='flex justify-between items-center w-full text-cyan-500'><>LinkedIn <FaLinkedin size={25} className='text-cyan-500'/></></a>
                </li>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  cursor-pointer'>
                    <a href="https://github.com/vikgithub22" target='_blank' rel='noopener noreferrer' className='flex justify-between items-center w-full text-cyan-500'><>GitHub <FaGithub size={25} className='text-cyan-500'/></></a>
                </li>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  cursor-pointer'>
                    <a href="mailto:vikrantahir1@gmail.com" target="_blank" rel="noopener noreferrer" className='flex justify-between items-center w-full text-cyan-500'><>Mail<HiOutlineMail size={25} className='text-cyan-500'/></></a>
                </li>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  cursor-pointer rounded-br-md '>
                    <a href='/ReactVik(3).pdf' download="ReactVik(3).pdf" className='flex justify-between items-center w-full text-cyan-500'><>Resume <BsFillPersonLinesFill size={25} className='text-cyan-500 '/></></a>
                </li>
                
            </ul>
        </div>
    )
}

export default SocialLinks
