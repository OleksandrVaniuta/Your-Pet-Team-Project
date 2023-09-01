import React, { useState } from 'react';
import { ChooseOption } from './AddPetSteps/chooseOption';
import { PersonalDetals } from './AddPetSteps/personalDetalis';
import { MoreInfo } from './AddPetSteps/moreInfo';
import { useDispatch } from 'react-redux';
import { addPet, addMyPet } from 'redux/AddPets/AddpetsOperations';
import { useNavigate } from 'react-router-dom';
import { UserAddPetContainer } from './addPetPage.styled';

const AddPetPage = () => {
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState('your pet');
  const [pets, setPets] = useState({
    name: '',
    date: '',
    type: '',
    title: '',
    file: null,
    sex: '',
    price: '',
    city: '',
    comments: '',
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleNext = values => {
    setPets(prevState => ({ ...prevState, ...values }));
    setStep(2);
  };

  const handleBack = () => {
    setStep(step => step - 1);
  };

  const handleFinalState = values => {
    setPets(prevState => ({ ...prevState, ...values }));
  };

  const handlePets = async (sex, comments, city, price) => {
    const formData = new FormData();

    formData.append('type', pets.type);
    formData.append('name', pets.name);

    console.log(Object.entries(formData));

    if (category === 'sell') {
      formData.append('category', category);
      formData.append('avatarURL', pets.file);
      formData.append('title', pets.title);
      formData.append('location', city);
      formData.append('birthday', pets.date);
      formData.append('sex', sex);
      formData.append('comment', comments);
      formData.append('price', price);
    }

    if (category === 'lost-found' || category === 'in-good-hands') {
      formData.append('category', category);
      formData.append('avatarURL', pets.file);
      formData.append('title', pets.title);
      formData.append('location', city);
      formData.append('birthday', pets.date);
      formData.append('sex', sex);
      formData.append('comment', comments);
    }

    if (category === 'your pet') {
      formData.append('avatarPet', pets.file);
      formData.append('dateOfBirth', pets.date);
      formData.append('comments', comments);
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      await dispatch(addMyPet(formData));
      navigate('/user');
      return;
    }
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    await dispatch(addPet(formData));

    navigate('/notices/my-ads');
  };

  return (
    <UserAddPetContainer>
      {step === 0 && (
        <ChooseOption
          category={category}
          setStep={setStep}
          setCategory={setCategory}
        />
      )}

      {step === 1 && (
        <PersonalDetals
          setStep={setStep}
          setPets={setPets}
          pets={pets}
          category={category}
          step={step}
          handleNext={handleNext}
          handleFinalState={handleFinalState}
        />
      )}

      {step === 2 && (
        <MoreInfo
          step={step}
          category={category}
          pets={pets}
          handleFinalState={handleFinalState}
          handleBack={handleBack}
          handlePets={handlePets}
        />
      )}
    </UserAddPetContainer>
  );
};
export default AddPetPage;
