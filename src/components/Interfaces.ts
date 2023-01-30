

export interface BaseProps{
    id?     : string;
    name    : string;
}

export interface InputProps extends BaseProps { 
    type?   : string;
}