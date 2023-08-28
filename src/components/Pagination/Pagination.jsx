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

    const firstElem = firstLiRef.current;
    const[currentElem, setCurrentElem] = useState(firstElem);
    const totalPages = useSelector(selectTotalPages);

    const handleCurrentPage = (e) => {
        currentElem.classList.remove(css.current);
        setCurrentElem(e.target);
        e.target.classList.add(css.current);

        const currentPage = Number(e.target.textContent);
        handlePagination(currentPage);
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

            firstElem.classList.add(css.current);
            setCurrentElem(firstElem);
        }
    }, [firstElem, category, search]);
    
    return (
        <>
            {(totalPages > 1) && (
                <div className={css.pagination}>
                    <div className={css.btn}>
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
                    <div className={css.btn}>
                        <VectorRight/> 
                    </div>          
                </div>
            )}
        </>
    )     
};

export default Pagination;