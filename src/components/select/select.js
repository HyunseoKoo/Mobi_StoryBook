import * as S from './select.style';

function Select(props) {
	const { variant, shape, size, children, ...rest } = props;
	return (
	<S.Select
        variant={variant} 
        shape={shape} 
        size={size}
    >
        {children.map((selects)=><option>{selects}</option> )}
    </S.Select>
	);
}

export default Select;