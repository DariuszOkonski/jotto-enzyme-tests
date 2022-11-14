import PropTypes from "prop-types";

function Input({ secretWord }) {
  return (
    <div data-test="component-input">
      <h1>Input</h1>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
