import { useState } from "react"

export const useModal = (initState: boolean) => {
    const [isOpenModal, setIsOpenModal] = useState(initState)
    
    const handleOpenModal = () => {
        setIsOpenModal(true)
    }
    
    const handleCloseModal = () => {
        setIsOpenModal(false)
    }

    return { isOpenModal, handleOpenModal, handleCloseModal }
}