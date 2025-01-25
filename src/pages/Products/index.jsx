import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import Table from "../../components/Table/Table";
import axios from "axios";
import ModalUpdate from "../../components/ModalUpdate/ModalUpdate";

export default function Products() {
    const [open, setOpen] = useState(false)
    const [openModalUpdate, setOpenModalUpdate] = useState(false)

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchInput, setSearchInput] = useState("");

    const [products, setProducts] = useState([]);

    async function buscarDados() {
        const resposta = await axios.get("http://localhost:3000/products")

        setProducts(resposta.data)
    }

    function handleFilterProducts() {
        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchInput.toLowerCase()))

        setProducts(filteredProducts)
        console.log(filteredProducts)
    }

    useEffect(() => {
        handleFilterProducts()
    }, [searchInput])
    // console.log(products)
    // console.log(products.filter((product) => product.name.length > 3))

    useEffect(() => {
        buscarDados()
    }, [])

    function handleUpdateProduct(product) {
        setSelectedProduct(product);
        setOpenModalUpdate(true);
    }

    console.log(selectedProduct)

    return (
        <main>
            <Header
                open={open}
                setOpen={setOpen}
                setSearchInput={setSearchInput}
            />
            <Table
                products={products}
                openModalUpdate={handleUpdateProduct}
            />
            <Modal open={open} setOpen={setOpen} />
            <ModalUpdate
                open={openModalUpdate}
                setOpen={setOpenModalUpdate}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
            />
        </main>
    )
}