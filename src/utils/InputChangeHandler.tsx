import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { tFile } from "../types/tFile";

const convertFilesToBase64 = (files: File[]): Promise<tFile[]> => {
  return new Promise((resolve, reject) => {
    Promise.all(files.map(file => {
      return new Promise<tFile>((resolve, reject) => {
        const reader = new FileReader();
    
        reader.onloadend = () => {
          resolve({
            filename: file.name,
            type: file.type,
            base64: (reader.result as string).split(',')[1]
          });
        };
    
        reader.onerror = () => reject(reader.error);
    
        reader.readAsDataURL(file);
      });
    }))
    .then(resolve)
    .catch(reject)
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputChangeHandler = async (setter: Dispatch<SetStateAction<any>>, event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent | SelectChangeEvent<string[]>) => {
  const name = event.target.name;

  let value: string | string[] | number | boolean | tFile | tFile[] = event.target.value;

  const target = event.target as HTMLInputElement;
  if(target.type === 'checkbox') value = target.checked;
  if(target.type === 'file') {
    if(target.multiple) {
      if(!target.files) value = [];
      else value = await convertFilesToBase64(Array.from(target.files));
    }
    else{
      if(!target.files) value = false;
      else value = (await convertFilesToBase64(Array.from(target.files)))[0];
    }
  }

  const propertyParts = name.split('.');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const update = (previous: any, propertyParts: string[], value: string | string[] | number | boolean | tFile | tFile[], index: number | null): any => {
    if(propertyParts.length === 1) {
      if(index === null || !Array.isArray(previous)) return { ...previous, [propertyParts[0]]: value };

      const arr = previous;
      arr[index][propertyParts[0]] = value;
      
      return arr;
    }

    let prop = propertyParts[0];
    let arrayIndex = null;

    const regex = /\[(\d+)\]/;
    const match = regex.exec(propertyParts[0]);

    if(match) {
      arrayIndex = parseInt(match[1], 10);
      prop =  propertyParts[0].replace(regex, "");
    }

    return { ...previous, [prop]: update(previous[prop], propertyParts.slice(1), value, arrayIndex )};
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setter((previous: any) => update(previous, propertyParts, value, null));
}

export default InputChangeHandler;