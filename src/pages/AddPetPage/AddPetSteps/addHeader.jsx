
import {
  Options,
  OptionDecor,
  OptionName,
  OptionBox,
  TitlePage,
  HeaderBox,
} from '../Styles/addHeader.styled';

const options = [
  { option: 'Choose option', id: 1 },
  { option: 'Personal detalis', id: 2 },
  { option: 'More info', id: 3 },
];

export const AddHeader = () => {

  return (
    <HeaderBox >
     <TitlePage>Add pet</TitlePage> 
        <Options>
        {options.map(({ option, id }) => (
          <li key={id}>
            <OptionBox id={id}>
              <OptionName>{option}</OptionName>
              <OptionDecor></OptionDecor>
            </OptionBox>
          </li>
        ))}
      </Options>
    </HeaderBox>
  );
};

export const AddPetHeader = ({ category, step }) => {

  return (
    <HeaderBox>
      {/* <TitlePage>Add pet</TitlePage>  */}
      {category === 'your pet' ? <TitlePage>Add pet</TitlePage> : null}
      {category === 'sell' ? (
        <TitlePage>Add pet for sell</TitlePage>
      ) : null}
      {category === 'lost/found' ? (
        <TitlePage>Add lost pet</TitlePage>
      ) : null}
      {category === 'in good hands' ? (
        <TitlePage>Add in good hands</TitlePage>
      ) : null}
      <Options>
        {options.map(({ option, id }) => (
          <li key={id}>
            <OptionBox id={id}>
              <OptionName>{option}</OptionName>
              <OptionDecor></OptionDecor>
            </OptionBox>
          </li>
        ))}
      </Options>
    </HeaderBox>
  );
};
