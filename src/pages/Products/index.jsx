import { useState } from "react";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import Table from "../../components/Table/Table";

export default function Products() {
    const [open, setOpen] = useState(true)

    return (
        <main>
            <Header open={open} setOpen={setOpen} />
            <Table />
            {/* <Modal open={open} setOpen={setOpen} /> */}
        </main>
    )
}