import React, { useEffect, useState } from "react";
import {
  createPodiumComment,
  getAllPodiums,
} from "../../services/podium.service";
import { CardPodiums } from "../CardPodiums/CardPodiums";
import { useForm } from "react-hook-form";
import { Paginacion } from "../../utils/paginacion";



export const PodiumContainer = () => {
  const [podiumLoading, setPodiumLoading] = useState(false);
  const [allPodiums, setAllPodiums] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [buttonComment, setButtonComment] = useState("");
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState(false);
  const [send, setSend] = useState(false);

 
  //!!Referente a comentarios sobre el podium-----------------------
  const handleComment = (id) => {
    setButtonComment(id);
  };
  const formSubmit = async (formData) => {
    // guarda todos lo que manden por register
    // en este caso no hay imagen y nos quedamos con lo que tenemos en el form data
    const customFormData = {
      ...formData,
    };

    setSend(true);
    setRes(await createPodiumComment(buttonComment,customFormData));
    setSend(false);
    setButtonComment("");
  };

  //!!-------------------------------------------------------------------------
  //!!----------Traer y pintar el podium--------------------------------------------
  const getPodiums = async () => {
    setPodiumLoading(true);
    const podiumData = await getAllPodiums();
    setAllPodiums(podiumData);

    setPodiumLoading(false);
  };
  useEffect(() => {
    getPodiums();
  }, []);

  //!!-------------------------------------------------------------------------
  //!!--------------------PAginacion-------------------------------------
  const nextPage = () => {
    if (currentPage < allPodiums?.data?.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  //!!---------------------------------------

  useEffect(() => {
    console.log(res);
    console.log(buttonComment);
  }, [buttonComment]);

  return (
    <div className="podiumAbel">
      {allPodiums &&
        allPodiums?.data?.map(
          (item, index) =>
            index + 1 === currentPage && (
              <div className="podiumCardContainer" key={item._id}>
                <div className="nombreYComentario">
                  <h3 className="podiumCard">{item?.name}</h3>
                
                  {buttonComment !== "" ? (
                    <div className="allForm">
                      <div className="formMain">
                        <h1 className="formTitle">CREAR COMENTARIO</h1>
                        <form
                          className="form"
                          onSubmit={handleSubmit(formSubmit)}
                        >
                          <div className="riderInfo formGroup">
                            <label
                              htmlFor="comment"
                              className="customPlaceholder"
                            >
                              comentario
                            </label>
                            <input
                              className="inputForm"
                              type="text"
                              id="comment"
                              name="comment"
                              autoComplete="false"
                              placeholder="Deja tu comentario"
                              {...register("comment", { required: true })}
                            />
                          </div>

                          <div className="btnContainer">
                            <button
                              className="btn"
                              type="submit"
                              disabled={send}
                              style={{
                                background: send ? "#49c1a388" : "#2f7a67",
                              }}
                            >
                              Publicar
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  ) : (
                    <button onClick={() => handleComment(item._id)}>
                      comment here
                    </button>
                  )}
                </div>

                <div className="podiumCartas">
                  <CardPodiums
                    className="primerPuesto"
                    name={item?.firstPlace?.name}
                    image={item?.firstPlace?.image}
                  />
                  <CardPodiums
                    className="segundoPuesto"
                    name={item?.secondPlace?.name}
                    image={item?.secondPlace?.image}
                  />
                  <CardPodiums
                    className="tercerPuesto"
                    name={item?.thirdPlace?.name}
                    image={item?.thirdPlace?.image}
                  />
                </div>
              </div>
            )
        )}
        {buttonComment==""&& <Paginacion
        currentPage={currentPage}
        totalPages={allPodiums?.data?.length}
        onNextPage={nextPage}
        onPrevPage={prevPage}
      />}
     
    </div>
  );
};
