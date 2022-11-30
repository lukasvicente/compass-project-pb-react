import { ButtonHTMLAttributes, HTMLAttributes, HTMLProps, InputHTMLAttributes } from "react";

export const enum VariantsEnum {
  standard = 'standard',
  arround = 'arround',
  secondary = 'secondary',
 }

 export const enum IconEndEnum {
  inside = 'inside',
  outside = 'outside',
 }
 
export declare type IPropsVariants = keyof typeof VariantsEnum
 
export declare type IPropsIconEnd = keyof typeof IconEndEnum
 
export declare interface IPrposTextField extends InputHTMLAttributes<HTMLInputElement> {
   children?: React.ReactNode,
   variant?: IPropsVariants,
   error?: boolean,
   helpText?: string,
   icon?: IconBaseProps,
   iconEnd?: IPropsIconEnd

 }

 export declare type IPropsVariantsButton = keyof typeof VariantsButtonEnum

 export const enum VariantsButtonEnum {
  default = 'default',
  primary = 'primary',
  secondary = 'secondary',
 }

 export declare interface IPrposButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode,
  variant?: IPropsVariantsButton,
  color?: string,
  background?: string,
}

export declare type IPropsVariantsTypography = keyof typeof VariantsTypographyEnum

export const enum VariantsTypographyEnum {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
  a = 'a',
 }


export declare interface IPrposTypography extends HTMLProps<HTMLElement> {
  children?: React.ReactNode,
  variant?: IPropsVariantsTypography,
  color?: string
}

