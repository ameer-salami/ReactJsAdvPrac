export interface ChildInfo {
    name:string;
}

export interface TextColor {
    color:string;
}

export interface CounterInputArgs {
    count:number;
    changeEventHandler:React.ChangeEventHandler<HTMLInputElement>;
}

export interface ChildProps {
    onAction: (data:string, isBlank:boolean) => void
}