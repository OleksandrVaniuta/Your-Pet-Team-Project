import {
  Options,
  OptionDecor,
  OptionBox,
  TitlePage,
} from '../Styles/addHeader.styled';

const options = [
  { option: 'Choose option', id: 1, index: 0 },
  { option: 'Personal detalis', id: 2, index: 1 },
  { option: 'More info', id: 3, index: 3 },
];

export const AddPetHeader = ({ category, step }) => {
  return (
    <>
      <TitlePage step={step} category={category}>
        {step === 0
          ? 'Add pet'
          : category === 'your pet'
          ? 'Add pet'
          : category === 'sell'
          ? 'Add pet for sell'
          : category === 'lost-found'
          ? 'Add lost pet'
          : category === 'in-good-hands'
          ? 'Add in good hands'
          : null}
      </TitlePage>
      <Options step={step} category={category}>
        {options.map(({ option, id, index }) => (
          <li key={id}>
            <OptionBox step={step} index={index} category={category}>
              {option}
              <OptionDecor step={step} index={index} category={category} />
            </OptionBox>
          </li>
        ))}
      </Options>
    </>
  );
};
