'use client'
import React from 'react';
import styles from "./profile-card.module.scss";
import InputProfile from '@/components/ui/input-profile/input-profile';

function ProfileCard({data}:any) {

  return (
    <li>
      <div className={styles.ProfileContainer}>
        <img className={styles.avatar} src={data?.Profile.Photo.url} alt="profilePhoto" />
        <div className={styles.uploadContainer}>
          <h3 className={styles.editText}>{data.Profile.Photo.buttonUpload}</h3>
          <label className={styles.inputFile}>
            <input type="file" name="file"/>
            <span className={styles.inputFileBtn}>Upload</span>           
          </label>
        </div>
      </div>
      <div className={styles.infoContainer}>
      {data?.Profile.InputPeople.map((el: any, index: number) =>
        <InputProfile key={index} name={el.name || el.People} placeholder={el.description}/>
          )}
      </div>
    </li>
  );
}

export default ProfileCard;