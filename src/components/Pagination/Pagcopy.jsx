import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectTotalPages } from 'redux/notices/selectors';
import css from './Pagination.module.css';
import { ReactComponent as VectorLeft } from './icons/vector-left.svg';
import { ReactComponent as VectorRight } from './icons/vector-right.svg';

const Pagination = ({handlePagination, category, search}) => {
    const firstLiRef = useRef();
    const secondLiRef = useRef();
    const thirdLiRef = useRef();
    const fourthLiRef = useRef();
    const fifthLiRef = useRef();
    const leftBtnRef = useRef();
    const rightBtnRef = useRef();

    const firstElem = firstLiRef.current;
    const[currentElem, setCurrentElem] = useState(firstElem);
    const[currentPage, setCurrentPage] = useState(1);
    const totalPages = useSelector(selectTotalPages);

    const handleCurrentPage = (e) => {
        currentElem.classList.remove(css.current);
        const currentNumber = Number(e.target.textContent);
        setCurrentPage(currentNumber);

        if (currentNumber <= 5 && totalPages > 5) {
            firstLiRef.current.textContent = '1';
            secondLiRef.current.textContent = '2';
            thirdLiRef.current.textContent = '3';
            fourthLiRef.current.textContent = '4';
            fifthLiRef.current.textContent = '5';

            if (currentNumber === 1) {
                setCurrentElem(firstLiRef.current);
                firstLiRef.current.classList.add(css.current);
            }
            else if (currentNumber === 2) {
                setCurrentElem(secondLiRef.current);
                secondLiRef.current.classList.add(css.current);
            }
            else if (currentNumber === 3) {
                setCurrentElem(thirdLiRef.current);
                thirdLiRef.current.classList.add(css.current);
            }
            else if (currentNumber === 4) {
                setCurrentElem(fourthLiRef.current);
                fourthLiRef.current.classList.add(css.current);
            }
            else if (currentNumber === 5) {
                setCurrentElem(fifthLiRef.current);
                fifthLiRef.current.classList.add(css.current);
            }
        }
        else {
            setCurrentElem(e.target);
            e.target.classList.add(css.current);
        }   
    };

    const switchLeftBtn = (e) => {
        currentElem.classList.remove(css.current);
        const currentNumber = currentPage - 1;
        setCurrentPage(currentNumber);

        if (currentNumber >= 5) {
            setCurrentElem(fifthLiRef.current);
            fifthLiRef.current.classList.add(css.current);

            firstLiRef.current.textContent = `${currentNumber - 4}`;
            secondLiRef.current.textContent = `${currentNumber - 3}`;
            thirdLiRef.current.textContent = `${currentNumber - 2}`;
            fourthLiRef.current.textContent = `${currentNumber - 1}`;
            fifthLiRef.current.textContent = `${currentNumber}`;
        }
        else {
            if (Number(firstLiRef.current.textContent) === currentNumber) {
                setCurrentElem(firstLiRef.current);
                firstLiRef.current.classList.add(css.current);
            }
            else if (Number(secondLiRef.current.textContent) === currentNumber) {
                setCurrentElem(secondLiRef.current);
                secondLiRef.current.classList.add(css.current);
            }
            else if (Number(thirdLiRef.current.textContent) === currentNumber) {
                setCurrentElem(thirdLiRef.current);
                thirdLiRef.current.classList.add(css.current);
            }
            else if (Number(fourthLiRef.current.textContent) === currentNumber) {
                setCurrentElem(fourthLiRef.current);
                fourthLiRef.current.classList.add(css.current);
            }
        }
    };

    const switchRightBtn = (e) => {
        currentElem.classList.remove(css.current);
        const currentNumber = currentPage + 1;
        setCurrentPage(currentNumber);

        if (currentNumber >= 5) {
            setCurrentElem(fifthLiRef.current);
            fifthLiRef.current.classList.add(css.current);

            firstLiRef.current.textContent = `${currentNumber - 4}`;
            secondLiRef.current.textContent = `${currentNumber - 3}`;
            thirdLiRef.current.textContent = `${currentNumber - 2}`;
            fourthLiRef.current.textContent = `${currentNumber - 1}`;
            fifthLiRef.current.textContent = `${currentNumber}`;
        }
        else {
            if (Number(secondLiRef.current.textContent) === currentNumber) {
                setCurrentElem(secondLiRef.current);
                secondLiRef.current.classList.add(css.current);
            }
            else if (Number(thirdLiRef.current.textContent) === currentNumber) {
                setCurrentElem(thirdLiRef.current);
                thirdLiRef.current.classList.add(css.current);
            }
            else if (Number(fourthLiRef.current.textContent) === currentNumber) {
                setCurrentElem(fourthLiRef.current);
                fourthLiRef.current.classList.add(css.current);
            }
        }
    }; 

    useEffect(() => {
        if (totalPages === 2) {
            thirdLiRef.current.style.display = "none";
            fourthLiRef.current.style.display = "none";
            fifthLiRef.current.style.display = "none";
        }
        else if (totalPages === 3) {
            thirdLiRef.current.style.display = "flex";
            fourthLiRef.current.style.display = "none";
            fifthLiRef.current.style.display = "none";
        }
        else if (totalPages === 4) {
            thirdLiRef.current.style.display = "flex";
            fourthLiRef.current.style.display = "flex";
            fifthLiRef.current.style.display = "none";
        }
        else if (totalPages >= 5) {
            thirdLiRef.current.style.display = "flex";
            fourthLiRef.current.style.display = "flex";
            fifthLiRef.current.style.display = "flex";
        }    
    }, [totalPages]);

    useEffect(() => {
        if (firstElem) {
            secondLiRef.current.classList.remove(css.current);
            thirdLiRef.current.classList.remove(css.current);
            fourthLiRef.current.classList.remove(css.current);
            fifthLiRef.current.classList.remove(css.current);

            setCurrentElem(firstElem);
            firstElem.classList.add(css.current);
        }
    }, [firstElem, category, search]);

    useEffect(() => {
        handlePagination(currentPage);
    }, [currentPage, handlePagination]);
    
    return (
        <>
            {(totalPages > 1) && (
                <div className={css.pagination}>
                    <div ref={leftBtnRef} 
                    className={`${css.btn} ${currentPage === 1 && css.disableEffects}`}
                    onClick={switchLeftBtn}>
                        <VectorLeft/> 
                    </div>
                    <ul className={css.paginationList}>
                        <li ref={firstLiRef} 
                        className={css.paginationNumber}
                        onClick={handleCurrentPage} >1</li>
                        <li ref={secondLiRef}
                        className={css.paginationNumber} 
                        onClick={handleCurrentPage} >2</li>
                        <li ref={thirdLiRef}
                        className={css.paginationNumber}
                        onClick={handleCurrentPage} >3</li>
                        <li ref={fourthLiRef}
                        className={css.paginationNumber}
                        onClick={handleCurrentPage} >4</li>
                        <li ref={fifthLiRef}
                        className={css.paginationNumber}
                        onClick={handleCurrentPage} >5</li>
                    </ul>
                    <div ref={rightBtnRef} 
                    className={`${css.btn} ${currentPage === totalPages && css.disableEffects}`}
                    onClick={switchRightBtn}>
                        <VectorRight/> 
                    </div>          
                </div>
            )}
        </>
    )     
};

// export default Pagination;