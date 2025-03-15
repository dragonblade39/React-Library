import React, { Component } from "react";

interface ListBoxProps {
  options: string[];
  onSelect?: (selected: string) => void; // Make onSelect optional with a default
  defaultSelected?: string;
  layout?: "horizontal" | "vertical";
}

interface ListBoxState {
  selected: string | null;
}

class ListBox extends Component<ListBoxProps, ListBoxState> {
  constructor(props: ListBoxProps) {
    super(props);
    this.state = {
      selected: props.defaultSelected || null,
    };
  }

  handleSelect = (option: string) => {
    this.setState({ selected: option });
    if (this.props.onSelect) {
      this.props.onSelect(option);
    } else {
      console.warn("⚠️ Warning: onSelect function not provided to ListBox");
    }
  };

  render() {
    const { options, layout = "vertical" } = this.props;
    const { selected } = this.state;

    return (
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          display: "flex",
          flexDirection: layout === "horizontal" ? "row" : "column",
          alignItems: "start",
          gap: "10px",
          border: "2px solid #ccc",
          borderRadius: "8px",
          padding: "15px",
          background: "#f9f9f9",
          maxWidth: "fit-content",
        }}
      >
        {options.map((option) => (
          <label
            key={option}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              gap: "5px",
            }}
          >
            <input
              type="radio"
              name="listbox"
              value={option}
              checked={selected === option}
              onChange={() => this.handleSelect(option)}
            />
            {option}
          </label>
        ))}
      </div>
    );
  }
}

export default ListBox;
