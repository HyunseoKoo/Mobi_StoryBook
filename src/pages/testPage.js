import CustomPagenation from "../components/pagination/pagination";

function TestPage() {
    return(
        <>
            <CustomPagenation 
                variant={"primary"}
                shape={"squareBtn"}
                size={"small"}
                num={10}
                currentPage={1}
            />
        </>
    )
}

export default TestPage;