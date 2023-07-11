import * as S from './select.style';

function Select(props) {
	const { variant, shape, size, status, ...rest } = props;
	return (
	<S.Select
        variant={variant} 
        shape={shape} 
        status="default" 
        size={size}
    >
    </S.Select>
	);
}

export default Select;