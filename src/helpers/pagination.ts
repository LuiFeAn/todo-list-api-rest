
export function Paginate(page: number, quanty: number,resourceTotalenght: number){

    const totalPagesPerResource = Math.ceil(( resourceTotalenght / quanty ));

    page = page > 1 ? (page - 1) * quanty : 0

    return {
        currentPage: page,
        totalPages: totalPagesPerResource,
    }

}