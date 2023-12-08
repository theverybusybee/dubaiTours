import styles from "./formInput.module.scss";

export interface InputProps {
    description: string | undefined;
    extraClass?: string;
    refProp?: any;
    name: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
  }
  const FormInput: React.FC<InputProps> = ({
    description,
    extraClass,
    refProp,
    name,
    onChange,
  }) => {
    return (
    <div className={`${styles.inputContainer} ${extraClass}`}>
      <input
        ref={refProp}
        placeholder={description}
        name={name}
        type="text"
        className={styles.input}
        onChange={onChange}
      />
    </div>
    );
}

export default FormInput;