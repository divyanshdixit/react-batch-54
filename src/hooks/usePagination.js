import { useMemo } from "react";
import { range } from "../utlis";

export const usePagination = ({
    totalCount,
    postPerPage,
    siblingCount,
    currentPage,
    totalPages
  }) => {
    const paginationRange = useMemo(() => {
        const pageCount = Math.ceil(totalCount/postPerPage); // total page count => 7
        // siblingCount + firstPage + lastPage + currentPage + 2* dots => 7 
        const totalPageNumbers = siblingCount + 5; // 1 + 5 => 6 

        /*
      Case 1: 5<7 
      If the pagecount is less than the totalpagenumbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (pageCount <= totalPageNumbers) { // 7<=6
        return totalPages.slice(0,pageCount);
      }

    //   calcuate the left and right sibling index
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1); // (7,1) //8
    const rightSiblingIndex = Math.min(currentPage + siblingCount,pageCount); // (9,10) // 8

    /*
      We do not show dots when there is just one page number to be inserted 
      between the extremes of sibling and the page limits i.e 1 and totalPageCount. 
      Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */

      const shouldShowLeftDots = leftSiblingIndex > 2; // 7>2
      const shouldShowRightDots = rightSiblingIndex <= pageCount - 2; // 9 <= 8

      const firstPageIndex = 1;
      const lastPageIndex = pageCount;

      /*
    	Case 2: No left dots to show (only right dots )
    */

        if (!shouldShowLeftDots && shouldShowRightDots) { //  
            let leftItemCount = 3 + 2 * siblingCount; // 1,3,2,4,5
            let leftRange = totalPages.slice(0,leftItemCount);
            return [...leftRange, 'DOTS', pageCount];
        }

        /*
    	Case 3: No right dots to show, (only left dots)
    */
        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = totalPages.slice(pageCount - rightItemCount, pageCount);
            return [firstPageIndex, 'DOTS', ...rightRange];
        }

         /*
    	Case 4: Both left and right dots to be shown
    */
        if (shouldShowLeftDots && shouldShowRightDots) { // 
            let middleRange = totalPages.slice(leftSiblingIndex-1, rightSiblingIndex);
            return [firstPageIndex, 'DOTS', ...middleRange, 'DOTS', lastPageIndex];
        }
    }, [totalCount, postPerPage, siblingCount, currentPage]);
  
    return paginationRange;
  };