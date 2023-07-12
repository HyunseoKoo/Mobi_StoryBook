import { useEffect, useState } from "react";
import * as S from "./pagination.style";

const CustomPagenation = (props) => {
    const { variant, shape, size, num, currentPage } = props;
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    if(currentPage !== null) {
        setPage(currentPage);
    }
  },[currentPage])

  return (
    <>
      <S.Nav variant={variant} shape={shape} size={size}>
        <S.Button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          variant={variant}
          shape={shape}
          size={size}
        >
          &lt;
        </S.Button>
        {Array(num)
          .fill()
          .map((_, i) => (
            <S.Button
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
              variant={variant}
              shape={shape}
              size={size}
            >
              {i + 1}
            </S.Button>
          ))}
        <S.Button
          onClick={() => setPage(page + 1)}
          disabled={page === num}
          variant={variant}
          shape={shape}
          size={size}
        >
          &gt;
        </S.Button>
      </S.Nav>
    </>
  );
};
export default CustomPagenation;
