import RenderInput from 'Components/RenderFields/RenderInput'
import RenderSelect from 'Components/RenderFields/RenderSelect'

const RenderField = (props: any) => {
	if (props.field.identity === 'input') return RenderInput(props);
	if (props.field.identity === 'select') return RenderSelect(props);
	return null;
}

export default RenderField;