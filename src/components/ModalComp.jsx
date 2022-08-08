import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    Button,
    FormControl,
    Formlabel,
    Input,
    Box,

} from "@chakra-ui/react"
import { useState } from "react"


const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
    const [name, setName] = useState(dataEdit.name || "")
    const [email, setEmail] = useState(dataEdit.email || "")
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cadastro de Clientes</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl display="flex" flexDir="column" gap={4}>
                            <Box>
                                <Formlabel htmlFor="name">Nome</Formlabel>
                                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </Box>
                        </FormControl>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModalComp;