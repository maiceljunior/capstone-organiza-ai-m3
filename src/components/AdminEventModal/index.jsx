import { ModalContainer, Modal, DivInputs, DivBtnRequest, CardGuests, CardRequests } from "./style";
import Header from "../../components/Header"
import { Api } from "../../services/api";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";

const AdminEventModal = ({ event, setOwnerOpen, ownerOpen }) => {

    const [requests, setRequests] = useState([]);
    const [guests, setGuests] = useState([]);
    const [declineds, setDeclineds] = useState([]);
    const toastId = useRef(null);

    const { dateEvent, type, description, nameEvent, id, eventToken } = event

    useEffect(() => {
        Api.get(`eventsPublics/${id}`).then((res) => {
            setGuests(res.data.guests)
            setRequests(res.data.requests)
            setDeclineds(res.data.denied)
        })
    }, [])

    function recuseRequest(person) {
        const listDenied = declineds.find(user => user.id === person.id)
        const newRequests = requests.filter(user => user.id !== person.id)

        if (listDenied === undefined) {
            const newDenied = [...declineds, person]
            recuseApiRequest(newDenied, newRequests)

        } else {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.info('Essa pessoa já está no evento!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    }

    function recuseApiRequest(newDenied, newRequest) {
        Api.patch(
            `eventsPublics/${id}`,
            {
                denied: newDenied,
                requests: newRequest
            }
            ,
            {
                headers: {
                    Authorization: `Bearer ${eventToken}`
                },
            }
        ).then((res) => {
            const newRequests = requests.filter(person => person.id !== newDenied.id)

            setRequests(newRequests)

            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success('Removido com sucesso!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            exitModal()
        })
            .catch((err) => console.log(err))
    }


    function acceptRequest(person) {
        const listGuests = guests.find(user => user.id === person.id)
        const newRequests = requests.filter(user => user.id !== person.id)


        if (listGuests === undefined) {
            const newGuest = [...guests, person]
            acceptApiRequest(newGuest, newRequests);

        } else {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.info('Essa pessoa já está no evento!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }

    }

    function acceptApiRequest(newGuest, newRequest) {

        Api.patch(
            `eventsPublics/${id}`,
            {
                guests: newGuest,
                requests: newRequest
            }
            ,
            {
                headers: {
                    Authorization: `Bearer ${eventToken}`
                },
            }
        )
            .then((res) => {
                const newRequests = requests.filter(person => person.id !== newGuest.id)

                setRequests(newRequests)
                exitModal()

                if (!toast.isActive(toastId.current)) {
                    toastId.current = toast.success('Usuario adicionado no evento!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
            .catch((err) => console.log(err))
    }




    function exitModal() {
        setOwnerOpen(false)
    }

    return (
        <ModalContainer>
            <Modal>
                <Header>
                    <button className="exit" onClick={exitModal}>X</button>
                </Header>

                <DivInputs>

                    <div>
                        <label className="inp">
                            <input disabled id="inp" value={nameEvent} />
                            <span className="label">Nome do evento</span>
                            <span className="focus-bg"></span>
                        </label>
                    </div>
                    <div>
                        <label className="inp">
                            <input disabled id="inp" value={type} />
                            <span className="label">Tipo de evento</span>
                            <span className="focus-bg"></span>
                        </label>
                    </div>

                    <div>
                        <label className="inp">
                            <input disabled id="inp" value={description} />
                            <span className="label">Descrição do evento</span>
                            <span className="focus-bg"></span>
                        </label>
                    </div>

                    <div>
                        <label className="inp">
                            <input disabled id="inp" value={`${dateEvent[2]}/${dateEvent[1]}/${dateEvent[3]} - ${dateEvent[4]}h`} />
                            <span className="label">Data e Hora do Evento</span>
                            <span className="focus-bg"></span>
                        </label>
                    </div>



                    <div className="ulPosition">
                        <span>Convidados:</span>
                        <ul>
                            {guests.length > 0 ?

                                guests.map((guest) => {
                                    return (
                                        <CardGuests key={guest.id}>
                                            <span>{guest.name}</span>
                                        </CardGuests>
                                    )
                                })

                                :

                                <span className="notPerson">Não existem convidados no evento.</span>

                            }
                        </ul>


                        <span>Solicitações de entrada:</span>
                        <ul>
                            {requests.length > 0 ?

                                requests.map((person) => {
                                    return (
                                        <CardRequests key={person.id}>
                                            <span>{person.name}</span>
                                            <DivBtnRequest>
                                                <button className="rejectUser" onClick={() => recuseRequest(person)}>Recusar</button>
                                                <button className="acceptUser" onClick={() => acceptRequest(person)}>Aceitar</button>
                                            </DivBtnRequest>
                                        </CardRequests>
                                    )
                                })

                                :

                                <span className="notPerson">Não existem solicitações para participar do evento.</span>
                            }
                        </ul>

                    </div>

                </DivInputs>

            </Modal>
        </ModalContainer>
    )
}

export default AdminEventModal;