import Button from 'components/Button/Button.jsx';
import { Section, BtnDiv, Header } from './ApproveAction.styled';

const ModalApproveAction = ({
  toggleModal,
  children,
  type,
  clickHandler,
  icon,
}) => {
  return (
    <Section>
      <Header>{children}</Header>
      <BtnDiv>
        <Button type={type} text="Cancel" clickHandler={toggleModal} short />
        <Button
          type={type}
          text="Yes"
          clickHandler={clickHandler}
          icon={icon}
          short
        />
      </BtnDiv>
    </Section>
  );
};

export default ModalApproveAction;
