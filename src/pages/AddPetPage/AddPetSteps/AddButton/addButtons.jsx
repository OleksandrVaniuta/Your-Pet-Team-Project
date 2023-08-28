// import {
//   BtnBox,
//   BtnNextDone,
//   BtnCancelBack,
//   BtnTitle,
//   LinkTitle,
// } from '../Styles/buttonStyles';
// import { useNavigate } from 'react-router-dom';

// export const AddButtons = ({ category, step }) => {
//   const navigate = useNavigate();
  
// const handleOnClick = (e, step) => {
//   e.preventDefault();
// step === 0 ? (() => navigate(-1)) : setStep(step -1)  
// }

// const handleClickNext = e => {
//   e.preventDefault();

//   if (step === 2) {
//     return;
//   }
//   setStep(step + 1);
// };

//   return (
//     <>
//       <BtnBox>
//         step = 0 &&
//         <BtnNextDone
//           type="button"
//           onClick={e => {
//             setTouched({});
//             handleClickNext(e);
//           }}
//         >
//           <BtnTitle>Next</BtnTitle>
//           {/* <BtnIcon/> */}
//         </BtnNextDone>


//         step ===1 &&
//         <BtnNextDone
//           type="button"
//           onClick={e => {
//             validate('name');
//             validate('dateOfBirth');
//             validate('breed');
//             validate('title');
//             setTouched({
//               name: true,
//               dateOfBirth: true,
//               breed: true,
//               title: true,
//             })
//              handleClickNext(e);
//           }}
//         >
//           <BtnTitle>Next</BtnTitle>
//            {/* <BtnIcon/> */}
//         </BtnNextDone>

//         step === 2 &&
//         <BtnNextDone type="submit" onSubmit={onSubmit}>
//          <LinkTitle>Done</LinkTitle>
//           {/* <BtnIcon /> */}
//         </BtnNextDone>
//         <BtnCancelBack type="button" onClick={handleOnClick}>
//           {/* <BtnIcon></BtnIcon> */}
//           step === 0 ? <LinkTitle>Cancel</LinkTitle>:<LinkTitle>Back</LinkTitle>
//         </BtnCancelBack>
//       </BtnBox>
//     </>
//   );
// }

    