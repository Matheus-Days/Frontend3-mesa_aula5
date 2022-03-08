import './style.css';

export default function PuppyListItem({puppyData}) {
  const {nome, idade, genero, tamanho} = puppyData;
  
  return (
    <li>
      <p className="nome">Nome: {nome}</p>
      <ul className="lista-caracteristicas">
        <li>Idade: {idade}</li>
        <li>Gênero: {genero}</li>
        <li>tamanho: {tamanho}</li>
      </ul>
    </li>
  )
}