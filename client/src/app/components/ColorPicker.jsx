import React from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

// TODO
// - convert to Styled Component on having time
// - convert to functional component
class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    // disableAlpha: true,
    color: {
      r: '4',
      g: '87',
      b: '201',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = color => {
    this.setState({ color: color.rgb });
    this.props.onColorPickerChange && this.props.onColorPickerChange(color.hex);
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: '80px',
          height: '32px',
          borderRadius: '4px',
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          padding: '3px',
          display: 'inline-block',
          cursor: 'pointer',
          borderRadius: '4px',
          border: 'solid 1px #d9d9d7',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker
              // disableAlpha={true}
              presetColors={[]}
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </>
    );
  }
}

export default ColorPicker;
