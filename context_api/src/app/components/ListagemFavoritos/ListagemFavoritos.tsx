import {
  FavoritosContext,
  useProdutosFavoritos,
} from "@/app/state/FavoritosProvider";
import ItemFavorito from "../ItemFavorito/ItemFavorito";

export default function ListagemFavoritos() {
  const favoritos = useProdutosFavoritos();

  return (
    <div className="card mb-4">
      <div className="row card-body">
        <h5 className="card-title mb-4 fw-light">Lista de favoritos:</h5>
        <div className="table-responsive">
          <table className="table ">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {favoritos.map((item) => (
                <ItemFavorito key={item.id} itemFavorito={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
