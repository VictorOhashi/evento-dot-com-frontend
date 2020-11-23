import { CardEvento } from '../../../components';
import { ListBanner, ListContainer, LoadMore } from './styled';

const cards = [
  {
    name: 'Lorem Ipsum',
    descricao:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
  },
  {
    name: 'Where does it come from',
    descricao:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. .',
  },
  {
    name: 'What is Lorem Ipsum',
    descricao: 'words',
  },
  {
    name: 'Why do we use it',
    descricao:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
];

const ListEventos = () => {
  return (
    <ListBanner>
      <ListContainer>
        {cards.map((card, index) => (
          <CardEvento key={index} {...card} />
        ))}
      </ListContainer>
      <LoadMore variant="contained" color="secondary">
        Ver mais eventos
      </LoadMore>
    </ListBanner>
  );
};

export default ListEventos;
