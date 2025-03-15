import { Component } from "react";
interface ListBoxProps {
    options: string[];
    onSelect?: (selected: string) => void;
    defaultSelected?: string;
    layout?: "horizontal" | "vertical";
}
interface ListBoxState {
    selected: string | null;
}
declare class ListBox extends Component<ListBoxProps, ListBoxState> {
    constructor(props: ListBoxProps);
    handleSelect: (option: string) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default ListBox;
