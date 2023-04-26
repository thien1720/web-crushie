import { useEffect, useState , memo } from "react";

import ReactPaginate from "react-paginate";
import { v4 as uuidv4 } from 'uuid';

import CardIteam from "~/components/CardIteamShops";


function Filter({ filter }) {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(filter.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filter.length / itemsPerPage));
    }, [itemOffset, itemsPerPage , filter]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % filter.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return <>
        {currentItems.map((card, index) => {
            return <CardIteam
                card = {card}
                key={uuidv4()}
                id={card.id}
                image={card.image}
                coin={card.coin}
                title={card.title}
                optionColor={card.optionColor}
            />

        })}

        <ReactPaginate
            breakLabel="..."
            previousLabel="<"
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
        />


    </>
}

export default memo(Filter)