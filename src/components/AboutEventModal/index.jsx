import {
  AdminButton,
  ButtonRemoveGuest,
  ButtonsContainer,
  CardGuests,
  DivInputs,
  ExitUser,
  HeaderContainer,
  Modal,
  ModalContainer,
} from "./style";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useUser } from "../../providers/user";
import { Api } from "../../services/api";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { AdminHeader } from "../AdminEventModal/style";

const AboutEventModal = ({ setModalOpen, event, setRefreshPage }) => {
  const { user } = useUser();
  const toastId = useRef(null);
  const [guestRender, setGuestRender] = useState([]);
  const [requestRender, setRequestRender] = useState([]);
  const [declineds, setDeclineds] = useState([]);
  const [trueButtons, setTrueButtons] = useState(false);


  const { type, nameEvent, description, eventToken, id, requests, dateEvent } =
    event;

  useEffect(() => {
    async function getEvent() {
      await Api.get(`/eventsPublics/${id}`).then((res) => {
        setGuestRender(res.data.guests);
        setRequestRender(res.data.requests);
        setDeclineds(res.data.denied);
        setTrueButtons(true);
      });
    }
    getEvent();
  }, []);

  function joinEvent(user) {
    const listGuests = guestRender.find((guest) => user.id === guest.id);
    const listRequests = requestRender.find(
      (request) => user.id === request.id
    );

    if (listGuests === undefined && listRequests === undefined) {
      const newRequest = [...requests, user];
      joinEventApi(newRequest);
    } else {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.info(
          "Você já solicitou a entrada no evento, aguarde pela aceitação do Host.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
    }
  }

  function joinEventApi(request) {
    Api.patch(
      `eventsPublics/${id}`,
      { requests: request },
      {
        headers: {
          Authorization: `Bearer ${eventToken}`,
        },
      }
    )
      .then((res) => {
        setRequestRender([res.data]);
        toast.success("Você solicitou a entrada no evento com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        exitModal();
      })
      .catch((err) => console.log(err));
  }

  function userExit(id) {

    console.log(id)
    const newData = guestRender.filter(guest => guest.id !== id)
    console.log(newData)
    removeApiUser(newData)

  }

  function removeApiUser(data) {
    Api.patch(`eventsPublics/${id}`, { guests: data },
      {
        headers: {
          Authorization: `Bearer ${eventToken}`
        }
      })
      .then((res) => {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.info("Você saiu do evento!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        setRefreshPage(state => !state);
        setModalOpen(false);
      })
      .catch(() => {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.error("Erro ao sair do evento!", {
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



  function isGuest(user) {
    const listGuests = guestRender.find((guest) => user.id === guest.id);

    return listGuests;
  }

  function isDenied(user) {
    const listDenied = declineds.find((denied) => user.id === denied.id);

    return listDenied;
  }

  function exitModal() {
    setModalOpen(false);
  }

  function chatEvent() {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.info("Chat em construção...", {
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


  return (
    <ModalContainer>
      {user.name && (
        <Modal>
          <AdminHeader>
            <h1>Detalhes do Evento</h1>
            <button className="exit" onClick={exitModal}>
              X
            </button>
          </AdminHeader>
          {trueButtons && (

              <div className="positionBtns">
                <Button className="btnExit" onClick={() => setModalOpen(false)}>
                  Fechar
                </Button>

              {isGuest(user) !== undefined && isDenied(user) === undefined ? (
                <Button className="btnChat" onClick={chatEvent}>
                  Chat do Evento
                </Button>
              ) : isGuest(user) === undefined &&
                isDenied(user) !== undefined ? (
                <span className="notAuthorization">
                  Participação Recusada.
                </span>
              ) : (
                <Button className="btnEnter" onClick={() => joinEvent(user)}>
                  Solicitar Participação
                </Button>
              )}
            </div>
          )}
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
              <span>Lista de Participantes</span>

              <ul>
                {guestRender.map((guest) => {
                  return (
                    <CardGuests key={guest.id}>
                      <span>{guest.name}</span>
                      {guest.id === user.id ?
                        <ExitUser onClick={() => userExit(guest.id)} />
                        :
                        null
                      }
                    </CardGuests>
                  );
                })}
              </ul>
            </div>


          </DivInputs>
        </Modal>
      )}
    </ModalContainer>
  );
};

export default AboutEventModal;
