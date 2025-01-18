import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import Table from "../../components/Table/Table";
import axios from "axios";
import ModalUpdate from "../../components/ModalUpdate/ModalUpdate";

export default function Products() {
    const [open, setOpen] = useState(false)
    const [openModalUpdate, setOpenModalUpdate] = useState(false)

    const [products, setProducts] = useState([]);

    async function buscarDados() {
        const resposta = await axios.get("http://localhost:3000/products")

        setProducts(resposta.data)
    }

    useEffect(() => {
        buscarDados()
    }, [])


    return (
        <main>
            <Header open={open} setOpen={setOpen} />
            <Table products={products} />
            <Modal open={open} setOpen={setOpen} />
            <ModalUpdate
                open={openModalUpdate}
                setOpen={setOpenModalUpdate}
            />
        </main>
    )
}