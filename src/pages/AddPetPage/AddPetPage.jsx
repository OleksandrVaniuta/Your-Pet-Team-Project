import React, { useState } from 'react';
import { ChooseOption } from './/AddPetSteps/chooseOption';
import { PersonalDetals } from './AddPetSteps/personalDetalis';
import { MoreInfo } from './AddPetSteps/moreInfo';
import { useDispatch } from 'react-redux';
import { addPet, addMyPet } from 'redux/AddPets/AddpetsOperations';
import { useNavigate, useLocation } from 'react-router-dom';

export const AddPetPage = () => {
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

  const location = useLocation();
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

  const handlePets = async () => {
    const formData = new FormData();

    formData.append('category', category);
    formData.append('type', pets.type);
    formData.append('name', pets.name);

    if (category === 'sell') {
      formData.append('avatarURL', pets.file);
      formData.append('title', pets.title);
      formData.append('location', pets.city);
      formData.append('birthday', pets.date);
      formData.append('sex', pets.sex);
      formData.append('comment', pets.comments);
      formData.append('price', pets.price);
    }

    if (category === 'lost/found' || category === 'lost/found') {
      formData.append('avatarURL', pets.file);
      formData.append('title', pets.title);
      formData.append('location', pets.city);
      formData.append('birthday', pets.date);
      formData.append('sex', pets.sex);
      formData.append('comment', pets.comments);
    }

    if (category === 'your pet') {
      formData.append('avatarPet', pets.file);
      formData.append('dateOfBirth', pets.date);
      formData.append('comments', pets.comments);
      await dispatch(addMyPet(formData));
      return;
    }

    await dispatch(addPet(formData));

    navigate(location.state?.from);
  };

  return (
    <div>
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
    </div>
  );
};
