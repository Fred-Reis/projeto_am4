import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Numeral from 'numeral';
import 'numeral/locales/pt-br';

import {
  Container,
  ScrollBox,
  Book,
  Header,
  ShowBox,
  TextBox,
  Title,
  DescTitle,
  Gender,
  DescGender,
  Author,
  DescAuthor,
  Origin,
  DescOrigin,
  EmptyBox,
  EmptyText,
  Description,
  DescDescription,
  Preview,
  DescPreview,
  Down,
  DownText,
  Ebook,
  PriceBox,
  Currency,
  Price,
  PayBox,
  PayCard,
  PayButton,
  PayButtonText,
} from './styles';

export default function Cart({ navigation }) {
  const cart = navigation.getParam('item');

  Numeral.locale('pt-br');
  Numeral.defaultFormat('0.00');

  return (
    <>
      {cart === undefined ? (
        <EmptyBox>
          <Icon name="cart-off" size={90} color="#777" />
          <EmptyText>CARRINHO VAZIO</EmptyText>
        </EmptyBox>
      ) : (
        <>
          <Header>{cart.title}</Header>
          <Container>
            <ScrollBox>
              <ShowBox>
                <Book source={{ uri: cart.image }} />
                <TextBox>
                  <Title>Título original</Title>
                  <DescTitle>{cart.title}</DescTitle>
                  <Gender>Gênero</Gender>
                  <DescGender>{cart.gender}</DescGender>
                  <Author>Autor</Author>
                  <DescAuthor>{cart.author}</DescAuthor>
                  <Origin>Origem</Origin>
                  <DescOrigin>{cart.origin}</DescOrigin>
                </TextBox>
              </ShowBox>
              <Description>Descrição</Description>
              <DescDescription>{cart.description}</DescDescription>
              <Preview>Prévia</Preview>
              <DescPreview>{cart.preview}</DescPreview>
              <Down>
                <DownText>DOWNLOAD PRÉVIA</DownText>
              </Down>
            </ScrollBox>
            <Ebook>E-book Kindle</Ebook>
            <PayBox>
              <PriceBox>
                <Currency>R$</Currency>
                {/* aqui poderia vir o R$ junto com com a função numeral, mas ficaria com a fonte do mesmo tamanho do valor */}
                <Price>{Numeral(cart.price).format()}</Price>
              </PriceBox>
              <PayCard>COMPRA NO DÉBITO</PayCard>
            </PayBox>
            <PayButton>
              <Icon name="cart" size={20} color="#000" />
              <PayButtonText>COMPRAR AGORA</PayButtonText>
            </PayButton>
          </Container>
        </>
      )}
    </>
  );
}
Cart.navigationOptions = {
  title: 'Carrinho',
};

Cart.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
