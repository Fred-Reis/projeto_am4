import styled from 'styled-components/native';

export const Header = styled.Text`
  text-align: center;
  color: #f0951d;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const Container = styled.View`
  background: #ccc;
  margin: 15px 20px;
  margin-top: 0;
  flex-direction: row;
`;

export const Book = styled.Image`
  height: 200px;
  width: 130px;
`;

export const DescBox = styled.View`
  flex-direction: column;
  padding: 15px 10px;
  width: 260px;
`;

export const NavButton = styled.TouchableOpacity`
  border: none;
  background: #ccc;
  margin-right: 20px;
  width: 180;
`;

export const Title = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #000;
`;

export const Gender = styled.Text`
  margin-top: auto;
  font-size: 14px;
  color: #000;
`;

export const Censor = styled.Text`
  font-size: 14px;
  color: #000;
`;

export const RatingBox = styled.View`
  margin: 8px 0px;
  flex-direction: row;
`;

export const Down = styled.TouchableOpacity`
  margin-top: 10px;
  border: 2px solid #f0951d;
  background: #ccc;
  border-radius: 17px;
  width: 165px;
`;

export const DownText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  padding: 5px;
  color: #f0951d;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
