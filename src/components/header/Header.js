'use client'
import Image from "next/image"
import styled from "../../style/header.module.css"
import Logo  from "../../assets/logo.svg"
import Menu  from "../../assets/menu.svg"

export default function Header(){
    return(
        <div className={styled.container}>
            <div>
                <Image src={Logo} alt=""  width={55} height={55}/>
                <button>
                <Image src={Menu} alt=""  width={55} height={55}/>
                </button>
            </div>
        </div>
    )   
}