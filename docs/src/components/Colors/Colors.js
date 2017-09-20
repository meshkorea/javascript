import React, { Component } from 'react';

const BOX_WIDTH = 140;
const BOX_HEIGHT = 40;

const defaultStyle = {
  width: BOX_WIDTH,
  height: BOX_HEIGHT,
  lineHeight: `${BOX_HEIGHT}px`,
  fontSize: '12px',
  display: 'flex',
  justifyContent: 'space-around',
};

const ColorBox = (props) => {
  const { label, color, fontColor, left } = props;
  const style = {
    backgroundColor: color,
    color: fontColor || '#fff',
    marginLeft: (left && (left * BOX_WIDTH)) || 0,
  }
  return (
    <div
      className="box"
      style={style}
    >
      <div style={defaultStyle}>
        <span>{label}</span>
        <span>{color}</span>
      </div>
    </div>
  );
}
const rowStyle = {
  display: 'flex',
  flexDirection: 'row',
};

export class Colors extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={rowStyle}>
          <ColorBox label="Gray 110" color="#303545" left={1} />
          <ColorBox label="Excel Green" color="#338D46" left={2} />
        </div>
        <div style={rowStyle}>
          <ColorBox label="Primary 100" color="#1b3993" />
          <ColorBox label="Gray 100" color="#444a5c" />
          <ColorBox label="Red 100" color="#ef3636" />
          <ColorBox label="Orange 100" color="#e8a206" />
          <ColorBox label="Green 100" color="#6acf1b" />
          <ColorBox label="Blue 100" color="#4882e4" />
          <ColorBox label="Violet 100" color="#ad3df3" />
        </div>
        <div style={rowStyle}>
          <ColorBox label="Gray 80" color="#676d7e" left={1} />
          <ColorBox label="Red 80" color="#ee5e5e" />
          <ColorBox label="Orange 80" color="#e7b036" />
          <ColorBox label="Green 80" color="#85d844" />
          <ColorBox label="Blue 80" color="#6293e6" />
          <ColorBox label="Violet 80" color="#b65bef" />
        </div>
        <div style={rowStyle}>
          <ColorBox label="Primary 60" color="#8d9cc9" />
          <ColorBox label="Gray 60" color="#8c909d" />
          <ColorBox label="Red 60" color="#f17474" />
          <ColorBox label="Orange 60" color="#e8bb58" />
          <ColorBox label="Green 60" color="#95e15a" />
          <ColorBox label="Blue 60" color="#86aded"/>
          <ColorBox label="Violet 60" color="#c581f0" />
         </div>
        <div style={rowStyle}>
          <ColorBox label="Gray 40" color="#a5a9b5" left={1} />
          <ColorBox label="Red 40" color="#f48e8e" fontColor="#444a5c" />
          <ColorBox label="Orange 40" color="#e8c477" fontColor="#444a5c" />
          <ColorBox label="Green 40" color="#a4e174" fontColor="#444a5c" />
          <ColorBox label="Blue 40" color="#a5bfea" fontColor="#444a5c" />
          <ColorBox label="Violet 40" color="#d6a7f4" fontColor="#444a5c" />
        </div>
        <div style={rowStyle}>
          <ColorBox label="Primary 30" color="#b9c3e1" />
          <ColorBox label="Gray 30" color="#bec0c8" fontColor="#444a5c" />
        </div>
        <div style={rowStyle}>
          <ColorBox label="Gray 20" color="#dadbe0" fontColor="#444a5c" left={1} />
          <ColorBox label="Red 20" color="#f0b6b6" fontColor="#444a5c" />
          <ColorBox label="Orange 20" color="#f1d69b" fontColor="#444a5c" />
          <ColorBox label="Green 20" color="#bbed95" fontColor="#444a5c" />
          <ColorBox label="Blue 20" color="#bdd1f5" fontColor="#444a5c" />
          <ColorBox label="Violet 20" color="#e5caf7" fontColor="#444a5c" />
        </div>
        <div style={rowStyle}>
          <ColorBox label="Gray 15" color="#e5e7ec" fontColor="#444a5c" left={1} />
        </div>
        <div style={rowStyle}>
          <ColorBox label="Gray 10" color="#f0f2f5" fontColor="#444a5c" left={1} />
          <ColorBox label="Red 10" color="#fce4e0" fontColor="#444a5c" />
          <ColorBox label="Orange 10" color="#f8eed7" fontColor="#444a5c" />
          <ColorBox label="Green 10" color="#e9fdda" fontColor="#444a5c" />
          <ColorBox label="Blue 10" color="#e1eafa" fontColor="#444a5c"  />
          <ColorBox label="Violet 10" color="#f0e8f5" fontColor="#444a5c" />
        </div>
        <div style={rowStyle}>
          <ColorBox label="Gray 5" color="#f8f9fd" fontColor="#444a5c" left={1} />
        </div>
        <div style={rowStyle}>
          <ColorBox label="White" color="#fff" fontColor="#444a5c" left={1} />
        </div>
        <p>
          110단계는 입력 가능한 텍스트에 사용됩니다.<br />
          100단계는 본문 텍스트에 사용됩니다.<br />
          30단계는 Disabled 텍스트, Form의 hover/focused 이벤트에 사용됩니다.<br />
          20단계 이하는 배경색 또는 구분선(border)으로만 사용하는 것을 권고합니다.<br />
          40단계는 배경색으로 사용을 금지합니다.<br />
          Primary는 UI상으로 강조할 필요가 있을 때 사용됩니다.
        </p>
      </div>
    );
  }
}