import {
  ModalContainer,
  Modal,
  DivInputs,
  DivBtnRequest,
  CardGuests,
  CardRequests,
  AdminButton,
  ButtonsContainer,
  AdminHeader,
  ButtonRemoveGuest,
  AdminButtonRemove,
  AdminButtonEdit,
  SpanOwner,
} from "./style";
import { Api } from "../../services/api";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Button from "../Button";
import { useUser } from "../../providers/user";

const AdminEventModal = ({ event, setOwnerOpen, setRefreshPage }) => {
  const [requests, setRequests] = useState([]);
  const [guests, setGuests] = useState([]);
  const [declineds, setDeclineds] = useState([]);
  const toastId = useRef(null);
  const { user } = useUser()

  const { dateEvent, type, description, nameEvent, id, eventToken } = event;

  useEffect(() => {
    Api.get(`eventsPublics/${id}`).then((res) => {
      setGuests(res.data.guests);
      setRequests(res.data.requests);
      setDeclineds(res.data.denied);
    });
  }, []);

  function recuseRequest(person) {
    const listDenied = declineds.find((user) => user.id === person.id);
    const newRequests = requests.filter((user) => user.id !== person.id);

    if (listDenied === undefined) {
      const newDenied = [...declineds, person];
      recuseApiRequest(newDenied, newRequests);
    } else {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.info("Essa pessoa já está no evento!", {
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
        requests: newRequest,
      },
      {
        headers: {
          Authorization: `Bearer ${eventToken}`,
        },
      }
    )
      .then((res) => {
        const newRequests = requests.filter(
          (person) => person.id !== newDenied.id
        );

        setRequests(newRequests);
        setRefreshPage((state) => !state);

        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.success("Removido com sucesso!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        exitModal();
      })
      .catch((err) => console.log(err));
  }

  function acceptRequest(person) {
    const listGuests = guests.find((user) => user.id === person.id);
    const newRequests = requests.filter((user) => user.id !== person.id);

    if (listGuests === undefined) {
      const newGuest = [...guests, person];
      acceptApiRequest(newGuest, newRequests);
    } else {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.info("Essa pessoa já está no evento!", {
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
        requests: newRequest,
      },
      {
        headers: {
          Authorization: `Bearer ${eventToken}`,
        },
      }
    )
      .then((res) => {
        const newRequests = requests.filter(
          (person) => person.id !== newGuest.id
        );

        setRequests(newRequests);
        setRefreshPage((state) => !state);
        exitModal();

        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.success("Usuario adicionado no evento!", {
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
      .catch((err) => console.log(err));
  }

  function DeleteEvent() {
    Api.delete(
      `eventsPublics/${id}`,
      {
        headers: {
          Authorization: `Bearer ${eventToken}`,
        },
      }
    ).then(() => {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success("Evento removido com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setOwnerOpen(false);
      setRefreshPage((state) => !state);

    }).catch(() => {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Erro ao remover o evento!", {
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
  }

  function removeGuest(id) {

    const newData = guests.filter(guest => guest.id !== id)
    removeApiGuest(newData)
  }

  function removeApiGuest(data) {
    Api.patch(`eventsPublics/${id}`, { guests: data },
      {
        headers: {
          Authorization: `Bearer ${eventToken}`
        }
      })
      .then((res) => {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.success("Usuario removido com sucesso!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        setRefreshPage((state) => !state);
        setOwnerOpen(false);
      })
      .catch(() => {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.error("Erro ao remover o usuario!", {
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
  }

  function exitModal() {
    setOwnerOpen(false);
  }

  return (
    <ModalContainer>
      <Modal>
        <AdminHeader>
          <h1>Seu Evento</h1>
          <button className="exit" onClick={exitModal}>
            X
          </button>
        </AdminHeader>

        <ButtonsContainer>

          <Button className="AdminButtonEdit" onClick={exitModal}>Fechar</Button>
          <Button className="AdminButtonRemove" onClick={DeleteEvent}>Excluir </Button>
        </ButtonsContainer>
        <DivInputs>
          <div>
            <label className="inp">
              <input disabled id="inp" value={nameEvent} />
              <span className="label">Nome</span>
              <span className="focus-bg"></span>
            </label>
          </div>
          <div>
            <label className="inp">
              <input disabled id="inp" value={type} />
              <span className="label">Categoria</span>
              <span className="focus-bg"></span>
            </label>
          </div>

          <div>
            <label className="inp">
              <input disabled id="inp" value={description} />
              <span className="label">Descrição</span>
              <span className="focus-bg"></span>
            </label>
          </div>

          <div>
            <label className="inp">
              <input
                disabled
                id="inp"
                value={`${dateEvent[2]}/${dateEvent[1]}/${dateEvent[3]} - ${dateEvent[4]}h`}
              />
              <span className="label">Data e Hora</span>
              <span className="focus-bg"></span>
            </label>
          </div>

          <div className="ulPosition">
            <span>Participantes:</span>
            <ul>
              {guests.length > 0 ? (
                guests.map((guest) => {
                  return (
                    <CardGuests key={guest.id}>
                      <span>{guest.name}</span>
                      {guest.id === user.id ?
                        <SpanOwner />
                        :
                        <button className="rejectUser" onClick={() => removeGuest(guest.id)}>X</button>
                      }

                    </CardGuests>
                  );
                })
              ) : (
                <span className="notPerson">
                  Nenhum participante no momento.
                </span>
              )}
            </ul>

            <span>Solicitações de Participação:</span>
            <ul>
              {requests.length > 0 ? (
                requests.map((person) => {
                  return (
                    <CardRequests key={person.id}>
                      <span>{person.name}</span>
                      <DivBtnRequest>
                        <button
                          className="rejectUser"
                          onClick={() => recuseRequest(person)}
                        >
                          X
                        </button>
                        <button
                          className="acceptUser"
                          onClick={() => acceptRequest(person)}
                        >
                          V
                        </button>
                      </DivBtnRequest>
                    </CardRequests>
                  );
                })
              ) : (
                <span className="notPerson">Nenhuma solicitação recebida.</span>
              )}
            </ul>
          </div>
        </DivInputs>
      </Modal>
    </ModalContainer>
  );
};

export default AdminEventModal;
