import React, { useState } from 'react';
import { ChooseOption } from './/AddPetSteps/chooseOption';
import { PersonalDetals } from './AddPetSteps/personalDetalis';
import { MoreInfo } from './AddPetSteps/moreInfo';
import { useDispatch } from 'react-redux';
import { addPet } from 'redux/AddPets/AddpetsOperations';

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
  //Click для повернення на попередній крок та звідки прийшов

  //click  для переходу вперед для 1 та 2 кроку

  //фінальний сабміт : валідація, пердача нанних та перехід до сторінок
  // const handleSubmit = async pets => {
  //   const formData = new FormData();

  //   formData.append('category', pets.category);
  //   formData.append('name', pets.name);
  //   formData.append('type', pets.type);
  //   formData.append('fil', pets.file);
  //   formData.append('comments', pets.comments);
  //   formData.append('date', pets.date);

  //   formData.append('title', pets.title);
  //   formData.append('city', pets.city);
  //   formData.append('sex', pets.sex);

  //   if (pets.category === 'lost/found' || pets.category === 'in good handle') {
  //     try {
  //       const request = new XMLHttpRequest();
  //       await request.open('POST', formData, 'https://localhost:3000/api/pets');

  //       pets.category === 'lost/found'
  //         ? navigate('Notice/lost/found')
  //         : navigate('Notice/in good handle');
  //       // resetForm();
  //     } catch (error) {
  //       return error.message;
  //     }
  //   }

  //   formData.append('price', pets.price);

  //   if (pets.category === 'sell') {
  //     try {
  //       const request = new XMLHttpRequest();
  //       await request.open('POST', formData, 'https://localhost:3000/api/pets');

  //       navigate('sell');
  //     } catch (error) {
  //       return error.message;
  //     }
  //   }
  //   const entries = Object.entries(formData);
  //   console.log(entries);
  // };

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

    formData.append('avatarURL', pets.file);
    formData.append('category ', category);
    formData.append('title', pets.title);
    formData.append('name', pets.name);
    formData.append('type', pets.type);
    formData.append('location', pets.city);
    formData.append('birthday', pets.date);
    formData.append('sex', pets.sex);
    formData.append('comment', pets.comments);
    formData.append('price', pets.price);
    for (const pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
    await dispatch(addPet(formData));
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
