import React, { useState } from 'react';
import StarRating from 'react-native-star-rating';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  Book,
  DescBox,
  Title,
  Censor,
  Gender,
  RatingBox,
  Down,
  DownText,
  List,
  NavButton,
} from './styles';

export default function Main({ navigation }) {
  const [book, setBook] = useState([
    {
      id: 1,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/51nDIuUny1L._SX346_BO1,204,203,200_.jpg',
      title: 'Harry Potter e a Criança Amaldiçoada',
      gender: 'INFANTO JUVENIL',
      censor: '12 ANOS',
      originalTitle: 'Harry Potter and the Cursed Child',
      author: 'J.K ROWLING',
      origin: 'INGLATERRA',
      description:
        'Sempre foi difícil ser Harry Potter e não é mais fácil agora que ele é um sobrecarregado funcionário do Ministério da Magia, marido e pai de três crianças em idade escolar. Enquanto Harry lida com um passado que se recusa a ficar para trás, seu filho mais novo, Alvo, deve lutar com o peso de um legado de família que ele nunca quis. À medida que passado e presente se fundem de forma ameaçadora, ambos, pai e filho, aprendem uma incômodaverdade: às vezesas trevas vêmde lugares inesperados.',
      preview:
        'Tenha acesso ao primeiro capítulo do livro por tempo determinado e aproveite sua experiência',
      price: 25.9,
      star: 0,
    },
    {
      id: 2,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/51RlUeEoCAL._SX334_BO1,204,203,200_.jpg',
      title: 'Cidade dos ossos',
      gender: 'FANTASIA/AVENTURA',
      censor: '16 ANOS',
      originalTitle: 'The Mortal Instruments: City of Bones',
      author: 'CASSANDRA CLARE',
      origin: 'EUA',
      description:
        'O primeiro volume da série best-seller Os Instrumentos Mortais, de Cassandra Clare Depois ser apresentada ao Mundo de Sombras e a Jace ― um Caçador que tem a aparência de um anjo, mas a língua tão afiada quanto Lúcifer ―, Clary Fray só queria que sua vida voltasse ao normal. Mas o que é “normal” quando você é uma Caçadora de Sombras assassina de demônios, sua mãe está em um coma magicamente induzido e você de repente descobre que criaturas como lobisomens, vampiros e fadas realmente existem? Para complicar ainda mais, alguém na cidade de Nova York está matando jovens do Submundo. Quando o segundo dos Instrumentos Mortais, a Espada da Alma, é roubada, a aterrorizante Inquisidora chega ao Instituto para investigar ― e suas suspeitas caem diretamente sobre Jace. Como Clary pode impedir os planos malignos de Valentim se Jace está disposto a trair tudo aquilo em que acredita para ajudar o pai? Nessa sequência de tirar o fôlego da série Os Instrumentos Mortais, Cassandra Clare atrai os leitores de volta para o lado mais obscuro do submundo de Nova York, onde amar nunca é seguro e o poder se torna a mais mortal das tentações.',
      preview:
        'Tenha acesso ao primeiro capítulo do livro por tempo determinado e aproveite sua experiência',
      price: 22.89,
      star: 0,
    },
    {
      id: 3,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/514SAmYA1dL._SX346_BO1,204,203,200_.jpg',
      title: 'Fortaleza digital',
      gender: 'POLICIAL',
      censor: '16 ANOS',
      originalTitle: 'Digital Fortress',
      author: 'DAN BROWN',
      origin: 'EUA',
      description:
        'Em Fortaleza Digital, Brown mergulha no intrigante universo dos serviços de informação e ambienta sua história na ultra-secreta e multibilionária NSA, a Agência de Segurança Nacional americana, mais poderosa do que a CIA ou qualquer outra organização de inteligência do mundo. Quando o supercomputador da NSA, até então considerado uma arma invencível para decodificar mensagens terroristas transmitidas pela Internet, se depara com um novo código que não pode ser quebrado, a agência recorre à sua mais brilhante criptógrafa, a bela matemática Susan Fletcher. Presa numa teia de segredos e mentiras, sem saber em quem confiar, Susan precisa encontrar a chave do engenhoso código para evitar o maior desastre da história da inteligência americana e para salvar a sua vida e a do homem que ama. ',
      preview:
        'Tenha acesso ao primeiro capítulo do livro por tempo determinado e aproveite sua experiência',
      price: 19.9,
      star: 0,
    },
  ]);

  function handleNavigate(item) {
    navigation.navigate('Cart', { item });
  }

  function handleChange(rating, id) {
    setBook(
      book.map(item => (item.id === id ? { ...item, star: rating } : item))
    );
  }

  return (
    <>
      <Header>Popular</Header>
      <List
        data={book}
        keyExtractor={b => String(b.id)}
        renderItem={({ item }) => (
          <Container>
            <Book
              source={{
                uri: item.image,
              }}
            />
            <DescBox>
              <NavButton onPress={() => handleNavigate(item)}>
                <Title>{item.title}</Title>
              </NavButton>
              <Gender>{item.gender}</Gender>
              <Censor>{item.censor}</Censor>
              <RatingBox>
                <StarRating
                  disabled={false}
                  emptyStar="star"
                  fullStar="star"
                  iconSet="MaterialCommunityIcons"
                  maxStars={5}
                  rating={item.star}
                  selectedStar={rating => handleChange(rating, item.id)}
                  fullStarColor="#f0951d"
                  emptyStarColor="#fff"
                  starSize={30}
                />
              </RatingBox>
              <Down>
                <DownText>DOWNLOAD PRÉVIA</DownText>
              </Down>
            </DescBox>
          </Container>
        )}
      />
    </>
  );
}

Main.navigationOptions = {
  title: 'Loja',
};

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
