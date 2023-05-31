import { RadioButton } from 'primereact/radiobutton';
import { useStylesInputRatio } from './inputRatio.style';

const InputRatio = ({name, label, setValue, checked}) => {
    const classes = useStylesInputRatio();   
    return (
        <div className={classes.container}>
            <RadioButton  inputId={name} name={name} value={label} onChange={setValue} checked={checked} />
            <label htmlFor={name} style={{paddingLeft: 7}}>{label}</label>
        </div>
    );
};

export default InputRatio;
