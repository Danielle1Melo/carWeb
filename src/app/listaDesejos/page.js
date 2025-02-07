import Image from "next/image";
import styled from "../../style/listaDesejos.module.css";
import carImage from "../../assets/carImage.svg"
import Header from "@/components/header/Header";

const carItens = [
    {
        id: 1,
        imagem: carImage,
        desc: "volkswagen gol",
    },
    {
        id: 2,
        imagem: carImage,
        desc: "volkswagen gol",
    },
    {
        id: 3,
        imagem: carImage,
        desc: "volkswagen gol",
    },
    {
        id: 4,
        imagem: carImage,
        desc: "volkswagen gol",
    },
    {
        id: 5,
        imagem: carImage,
        desc: "volkswagen gol",
    },
    {
        id: 6,
        imagem: carImage,
        desc: "volkswagen gol",
    },
    {
        id: 7,
        imagem: carImage,
        desc: "volkswagen gol",
    },
]

export default function ListaDesejos() {
    return (
        <div className={styled.container}>
            <Header />
            {/* {carItens.map((item) => {
                return (
                    <div className={styled.cards} key={item.id}>
                        <Image src={item.imagem} alt="" />
                        <p>{item.desc}</p>
                        <button className={styled.button}>Veja mais</button>
                    </div>
                )
            })} */}
        </div>
    )
}