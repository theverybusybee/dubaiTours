'use client'
import React,{useState} from 'react';
import styles from "./input-profile.module.scss";

function InputProfile({name, placeholder}: any) {
    const [form, setValue] = useState<any>(placeholder);
    const onInputChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
    
    };
  
  return (
    <div className={styles.container}>
      <p className={styles.content}>{name}</p>
      <input type="text" value={form} onChange={onInputChange} className={styles.input}/>
    </div>
  );
}

export default InputProfile;
