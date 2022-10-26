import Joi from "joi-browser";
import Input from "../components/common/input";

function Form(obj, setObj, schema, doSubmit) {
  this.renderInput = function renderInput(
    id,
    title,
    type,
    placeholder,
    autoComplete,
    autoFocus
  ) {
    return (
      <Input
        id={id}
        title={title}
        type={type}
        error={obj.errors[id]}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        onChange={handleChange}
      />
    );
  };

  this.renderButton = function renderButton(label) {
    const extraClasses =
      (validate() && "disabled:opacity-50 cursor-not-allowed") ||
      "hover:bg-blue-700";

    return (
      <button
        disabled={validate()}
        className={`bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-1 focus:outline-blue-700 focus:shadow-outline mx-auto w-full ${extraClasses}`}
        type="submit"
      >
        {label}
      </button>
    );
  };

  this.handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    const errors = validate() || {};

    setObj({ errors });
    if (Object.keys(errors).length) return;

    return doSubmit();
  };

  function validateProperty(id, value) {
    const obj = { id: value };
    const schemaObj = { id: schema[id] };
    const { error } = Joi.validate(obj, schemaObj);

    return error ? error.details[0].message : null;
  }

  function validate() {
    const errorsObj = {};
    const dataObj = { ...obj.data };
    const options = { abortEarly: false };
    const { error } = Joi.validate(dataObj, schema, options);

    if (error) {
      error.details.map((err) => (errorsObj[err.path[0]] = err.message));
      return errorsObj;
    }
    return null;
  }

  function handleChange({ currentTarget: { id, value } }) {
    const dataObj = { ...obj.data };
    const errorsObj = { ...obj.errors };
    const errorMessage = validateProperty(id, value);

    dataObj[id] = value;

    if (errorMessage) errorsObj[id] = errorMessage;
    else delete errorsObj[id];

    setObj({ data: dataObj, errors: errorsObj });
  }
}

export default Form;
