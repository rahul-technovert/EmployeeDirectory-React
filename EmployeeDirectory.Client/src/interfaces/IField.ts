export default interface IField<T>{
    value : T;
    error : string;
    regexp : RegExp | null;
}