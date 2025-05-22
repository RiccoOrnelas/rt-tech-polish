"use client"
import { useState, useRef, useEffect } from 'react';
import styles from './page.module.css';

export default function GaleriaDeResultadosComModal({ imagens }) {
  const [quantidadeExibida, setQuantidadeExibida] = useState(6);
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [indexAtual, setIndexAtual] = useState(0);
  const modalContentRef = useRef(null);

  // Imagens a serem exibidas (quantidade controlada)
  const imagensExibidas = Array.isArray(imagens)
    ? imagens.slice(0, quantidadeExibida)
    : [];

  // Função para carregar mais imagens
  const carregarMais = () => {
    setQuantidadeExibida(prev => prev + 6);
  };

  // Abrir modal com a imagem selecionada
  const abrirModal = (imagem, index) => {
    setImagemSelecionada(imagem);
    setIndexAtual(index);
    document.body.style.overflow = 'hidden'; // Impede rolagem do corpo quando o modal está aberto
  };

  // Fechar modal
  const fecharModal = () => {
    setImagemSelecionada(null);
    document.body.style.overflow = ''; // Restaura rolagem do corpo
  };

  // Navegar para a próxima imagem
  const proximaImagem = () => {
    const novoIndex = (indexAtual + 1) % imagens.length;
    setIndexAtual(novoIndex);
    setImagemSelecionada(imagens[novoIndex]);
  };

  // Navegar para a imagem anterior
  const imagemAnterior = () => {
    const novoIndex = (indexAtual - 1 + imagens.length) % imagens.length;
    setIndexAtual(novoIndex);
    setImagemSelecionada(imagens[novoIndex]);
  };

  // Handler para teclas de navegação
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!imagemSelecionada) return;

      if (e.key === 'ArrowRight') {
        proximaImagem();
      } else if (e.key === 'ArrowLeft') {
        imagemAnterior();
      } else if (e.key === 'Escape') {
        fecharModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imagemSelecionada, indexAtual]);

  // Implementação de rolagem horizontal no modal
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
        {/* Título da galeria */}
        <div className={styles.tituloWrapper}>
          <div className={styles.tituloBackground}>
            <h2 className={styles.titulo}>GALERIA DE RESULTADOS</h2>
          </div>
        </div>

        {/* Grid de imagens */}
        <div className={styles.imageGrid}>
          {imagensExibidas.map((imagem, index) => (
            <div
              key={index}
              className={styles.imageCard}
              onClick={() => abrirModal(imagem, index)}
            >
              <img
                src={imagem.url}
                alt={imagem.alt || `Resultado ${index + 1}`}
                className={styles.imagem}
              />
            </div>
          ))}
        </div>

        {/* Botão Ver Mais */}
        {imagens.length > quantidadeExibida && (
          <div className={styles.botaoContainer}>
            <button
              onClick={carregarMais}
              className={styles.botaoVerMais}
            >
              Ver Mais
            </button>
          </div>
        )}

        {/* Modal para visualização ampliada com navegação */}
        {imagemSelecionada && (
          <div className={styles.modalOverlay} onClick={fecharModal}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
              ref={modalContentRef}
              onWheel={handleWheel}
            >
              <button
                className={styles.botaoFechar}
                onClick={fecharModal}
              >
                ✕
              </button>

              {/* Botão para navegar para a imagem anterior */}
              <button
                className={`${styles.botaoNavegacao} ${styles.anterior}`}
                onClick={(e) => {
                  e.stopPropagation();
                  imagemAnterior();
                }}
              >
                ‹
              </button>

              <img
                src={imagemSelecionada.url}
                alt={imagemSelecionada.alt}
                className={styles.imagemModal}
              />

              {/* Botão para navegar para a próxima imagem */}
              <button
                className={`${styles.botaoNavegacao} ${styles.proximo}`}
                onClick={(e) => {
                  e.stopPropagation();
                  proximaImagem();
                }}
              >
                ›
              </button>

              {/* Indicador de posição */}
              <div className={styles.indicadorPosicao}>
                {indexAtual + 1} / {imagens.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}