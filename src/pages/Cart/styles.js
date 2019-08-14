import styled from 'styled-components/native';

export const EmptyBox = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 6px;
  background: #fff;
  margin: 20px;
`;

export const EmptyText = styled.Text`
  margin-top: 20px;
  text-align: center;
  color: #000;
  font-size: 25px;
`;

export const Header = styled.Text`
  text-align: center;
  color: #f0951d;
  padding: 15px 80px;
  font-size: 17px;
  font-weight: bold;
`;

export const Container = styled.View`
  margin: 15px 20px;
  margin-top: 0;
  padding-bottom: 10px;
  flex-direction: column;
  flex: 1;
  max-height: 100%;
`;

export const ScrollBox = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const ShowBox = styled.View`
  flex-direction: row;
`;

export const Book = styled.Image`
  height: 160px;
  width: 100px;
`;

export const TextBox = styled.View`
  flex-direction: column;
  padding: 0 13px;
  width: 260px;
`;

export const Title = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #000;
`;

export const DescTitle = styled.Text`
  font-size: 13px;
  color: #000;
`;

export const Gender = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #000;
`;

export const DescGender = styled.Text`
  font-size: 13px;
  color: #000;
`;

export const Author = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #000;
`;

export const DescAuthor = styled.Text`
  font-size: 13px;
  color: #000;
`;

export const Origin = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #000;
`;

export const DescOrigin = styled.Text`
  font-size: 13px;
  color: #000;
`;

export const Description = styled.Text`
  margin-top: 15px;
  font-size: 12px;
  font-weight: bold;
  color: #000;
`;

export const DescDescription = styled.Text`
  margin-top: 10px;
  font-size: 12px;
  color: #000;
`;

export const Preview = styled.Text`
  margin-top: 15px;
  font-size: 12px;
  font-weight: bold;
  color: #000;
`;

export const DescPreview = styled.Text`
  margin-top: 10px;
  font-size: 12px;
  color: #000;
  margin-bottom: 10px;
`;

export const Down = styled.TouchableOpacity`
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  border: 2px solid #f0951d;
  background: #ddd;
  border-radius: 17px;
  width: 220px;
`;

export const DownText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  padding: 5px;
  color: #f0951d;
`;

export const Ebook = styled.Text`
  margin-top: 15px;
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: bold;
  color: #000;
`;

export const PayBox = styled.View`
  margin-top: auto;
  flex-direction: column;
  background: #ccc;
  border-radius: 4px;
  padding-bottom: 22px;
`;

export const PriceBox = styled.View`
  padding-top: 15px;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
`;

export const Currency = styled.Text`
  margin-right: 10px;
  font-weight: bold;
  font-size: 15px;
  color: #000;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 40px;
  color: #000;
  text-align: center;
`;

export const PayCard = styled.Text`
  color: #000;
  font-size: 10px;
  text-align: center;
`;

export const PayButton = styled.TouchableOpacity`
  padding: 5px 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: -17px auto 5px auto;
  background: #f0951d;
  border-radius: 17px;
  width: 220px;
  height: 34px;
`;

export const PayButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
  color: #000;
`;
