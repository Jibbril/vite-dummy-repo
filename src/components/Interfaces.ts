import { ChangeEvent } from "react";

export interface BaseProps {
    id?: string;
    name: string;
    value?: string;
}

export interface InputProps extends BaseProps {
    type?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;

}

export interface TextAreaProps extends BaseProps {
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface Todo {
    id: number
    todo: string
}

export interface Product {
    id: number
    title: string
}