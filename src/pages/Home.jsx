import React from "react";
import ButtonModal from "../components/ButtonModal";
import Modal from "../components/Modal";

const Home = () => {
  const [modal, setModal] = React.useState(false)

  return (
    <>
      <section>
        <Modal modal={modal} />
        <ButtonModal setModal={setModal} />
      </section>
    </>
  );
};

export default Home;
