"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function GaleriaDeResultadosComModal({ imagens }) {
  const [quantidadeExibida, setQuantidadeExibida] = useState(6);
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [indexAtual, setIndexAtual] = useState(0);
  const modalContentRef = useRef(null);

  const imagensExibidas = Array.isArray(imagens)
    ? imagens.slice(0, quantidadeExibida)
    : [];

  const carregarMais = () => {
    setQuantidadeExibida((prev) => prev + 6);
  };

  const abrirModal = (imagem, index) => {
    setImagemSelecionada(imagem);
    setIndexAtual(index);
    document.body.style.overflow = "hidden";
  };

  const fecharModal = useCallback(() => {
    setImagemSelecionada(null);
    document.body.style.overflow = "";
  }, []);

  const proximaImagem = useCallback(() => {
    if (!Array.isArray(imagens) || imagens.length === 0) return;
    const novoIndex = (indexAtual + 1) % imagens.length;
    setIndexAtual(novoIndex);
    setImagemSelecionada(imagens[novoIndex]);
  }, [indexAtual, imagens]);

  const imagemAnterior = useCallback(() => {
    if (!Array.isArray(imagens) || imagens.length === 0) return;
    const novoIndex = (indexAtual - 1 + imagens.length) % imagens.length;
    setIndexAtual(novoIndex);
    setImagemSelecionada(imagens[novoIndex]);
  }, [indexAtual, imagens]);


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!imagemSelecionada) return;

      if (e.key === "ArrowRight") {
        proximaImagem();
      } else if (e.key === "ArrowLeft") {
        imagemAnterior();
      } else if (e.key === "Escape") {
        fecharModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [imagemSelecionada, proximaImagem, imagemAnterior, fecharModal]);

  const handleWheel = (e) => {
    if (!modalContentRef.current) return;

    if (e.deltaY !== 0) {
      e.preventDefault();
      if (e.deltaY > 0) {
        proximaImagem();
      } else {
        imagemAnterior();
      }
    }
  };

  return (
    <div className={styles.galeriaContainer}>
      <div className={styles.galeriaWrapper}>
        <div className={styles.tituloWrapper}>
          <div className={styles.tituloBackground}>
            <h2 className={styles.titulo}>GALERIA DE RESULTADOS</h2>
          </div>
        </div>

        <div className={styles.imageGrid}>
          {imagensExibidas.map((imagem, index) => (
            <div
              key={index}
              className={styles.imageCard}
              onClick={() => abrirModal(imagem, index)}
            >
              <Image
                src={imagem.url}
                alt={imagem.alt || `Resultado ${index + 1}`}
                className={styles.imagem}
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
          ))}
        </div>

        {Array.isArray(imagens) && imagens.length > quantidadeExibida && (
          <div className={styles.botaoContainer}>
            <button onClick={carregarMais} className={styles.botaoVerMais}>
              Ver Mais
            </button>
          </div>
        )}


        {imagemSelecionada && (
          <div className={styles.modalOverlay} onClick={fecharModal}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
              ref={modalContentRef}
              onWheel={handleWheel}
            >
              <button className={styles.botaoFechar} onClick={fecharModal}>
                ✕
              </button>

              <button
                className={`${styles.botaoNavegacao} ${styles.anterior}`}
                onClick={(e) => {
                  e.stopPropagation();
                  imagemAnterior();
                }}
              >
                ‹
              </button>

              <Image
                src={imagemSelecionada.url}
                alt={imagemSelecionada.alt || "Imagem selecionada"}
                className={styles.imagemModal}
                width={1000}
                height={800}
              />

              <button
                className={`${styles.botaoNavegacao} ${styles.proximo}`}
                onClick={(e) => {
                  e.stopPropagation();
                  proximaImagem();
                }}
              >
                ›
              </button>

              <div className={styles.indicadorPosicao}>
                {indexAtual + 1} / {Array.isArray(imagens) ? imagens.length : 0}
              </div>


            </div>
          </div>
        )}
      </div>
    </div>
  );
}
