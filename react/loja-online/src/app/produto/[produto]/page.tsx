"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Produto() {
  const [produto, setProduto] = useState<Produto | null>(null);

  const params = useParams();

  useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.produto}`)
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, [params.produto]);

  return (
    <main>
      <div className="container p-5">
        <div className="card mb-4">
          <div className="card-body">
            {produto ? (
              <>
                <h5 className="card-title mb-4 fw-light">
                  Detalhes do produto
                </h5>

                <h5 className="card-title mb-4 fw-bold">{produto.nome}</h5>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mb-3">
                  <Image
                    key={produto.fotos[0].titulo}
                    src={produto.fotos[0].src}
                    alt={produto.fotos[0].titulo}
                    width={300}
                    height={320}
                  />
                </div>

                <p className="card-text fw-medium">
                  Valor: R${Number(2000).toFixed(2)}
                </p>
                <p className="card-text fw-medium">
                  Descrição: {produto.descricao}
                </p>
                <p className="card-text fw-medium">
                  Anunciado por: {produto.usuario_id}
                </p>
              </>
            ) : (
              <h5 className="card-title mb-4 fw-bold">Carregando...</h5>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
