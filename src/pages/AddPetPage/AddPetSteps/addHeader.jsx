
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

export const AddHeader = ({pets, step}) => {
console.log(step)
  return (
    <HeaderBox >
      {step === 0 ? <TitlePage>Add pet</TitlePage> : null}

      {pets.category === 'your pet' ? <TitlePage>Add pet</TitlePage> : null}
      {pets.category === 'sell' ? <TitlePage>Add pet for sell</TitlePage> : null}
      {pets.category === 'lost/found' ? <TitlePage>Add lost pet</TitlePage> : null}
      {pets.category === 'in good hands' ? (
        <TitlePage>Add in good hands</TitlePage>
      ) : null}
      <Options>
        {options.map(({ option, id }) => (
          <li>
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
