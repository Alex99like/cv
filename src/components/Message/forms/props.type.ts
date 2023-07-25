import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { FieldError, UseFormGetValues } from "react-hook-form";
import { IconType } from "react-icons/lib";
import { IMessageForm } from "../Message";

export interface IFieldProps {
  placeholder: string;
  active?: boolean;
  Icon: IconType;
  getValue: { get: UseFormGetValues<IMessageForm>; name: keyof IMessageForm };
 //getValueBoard?: { fn: UseFormGetValues<IFormBoard>; name: keyof IFormBoard };
 //getValueColumn?: { fn: UseFormGetValues<IFormColumn>; name: keyof IFormColumn };
 //getValueTask?: { fn: UseFormGetValues<IFormTask>; name: keyof IFormTask };
  error?: FieldError | undefined;
  delay: number
}

export interface ITextAreaProps {
  placeholder: string;
  active?: boolean;
  getValue: { get: UseFormGetValues<IMessageForm>; name: keyof IMessageForm };
 //getValueBoard?: { fn: UseFormGetValues<IFormBoard>; name: keyof IFormBoard };
 //getValueColumn?: { fn: UseFormGetValues<IFormColumn>; name: keyof IFormColumn };
 //getValueTask?: { fn: UseFormGetValues<IFormTask>; name: keyof IFormTask };
  error?: FieldError | undefined;
  delay: number
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;
type TypeAreaPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> & ITextAreaProps;

export type IField = TypeInputPropsField;
export type IArea = TypeAreaPropsField