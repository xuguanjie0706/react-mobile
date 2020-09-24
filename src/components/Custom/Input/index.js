import React from 'react';
import './index.less';

const Input = props => {
  const { value, onChange, label = '标题', ...option } = props;
  const handleChange = e => {
    onChange(e.target.value);
  };
  return (
    <div className="hl-input">
      {label && <span>{label}</span>}
      <input
        value={value}
        {...option}
        className="input"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

Input.Group = props => {
  const { value, onChange, label, children } = props;
  return <div className="hl-input-group">{children}</div>;
};

Input.Password = props => {
  const { value, onChange, label = '标题', ...option } = props;
  const handleChange = e => {
    onChange(e.target.value);
  };
  return (
    <div className="hl-input">
      {label && <span>{label}</span>}
      <input
        value={value}
        className="input"
        type="password"
        onChange={handleChange}
        {...option}
      />
    </div>
  );
};

Input.TextArea = props => {
  const { value, onChange, label = '标题', ...option } = props;
  const handleChange = e => {
    onChange(e.target.value);
  };
  return (
    <div className="hl-input">
      {label && <span>{label}</span>}
      <textarea
        value={value}
        className="input"
        onChange={handleChange}
        {...option}
      />
    </div>
  );
};

export default Input;
