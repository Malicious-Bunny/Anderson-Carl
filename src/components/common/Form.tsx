'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { FormProps } from '../../shared/types';

const Form = ({
  title,
  description,
  inputs,
  radioBtns,
  textarea,
  checkboxes,
  btn,
  btnPosition,
  containerClass,
}: FormProps) => {
  const [inputValues, setInputValues] = useState({});
  const [radioBtnValue, setRadioBtnValue] = useState('');
  const [textareaValues, setTextareaValues] = useState('');
  const [checkedState, setCheckedState] = useState<boolean[]>(new Array(checkboxes && checkboxes.length).fill(false));

  // Update the value of the entry fields
  const changeInputValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  // Update checked radio buttons
  const changeRadioBtnsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioBtnValue(event.target.value);
  };

  // Update the textarea value
  const changeTextareaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValues(event.target.value);
  };

  // Update checkbox radio buttons
  const changeCheckboxHandler = (index: number) => {
    setCheckedState((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.map(() => {
        newValues[index] = !checkedState[index];
      });
      return newValues;
    });
  };

  // Handle form submission with mailto
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Get the selected service
    const selectedRadio = radioBtns?.radios.find((_, index) => radioBtnValue === `value${index}`);
    const selectedService = selectedRadio ? selectedRadio.label : 'Not specified';

    // Get checkbox status
    const agreementChecked = checkedState[0] ? 'Yes' : 'No';

    // Construct email body
    const emailBody = `
New Consultation Request from Anderson Carl Website

Customer Information:
- Name: ${inputValues['name'] || 'Not provided'}
- Email: ${inputValues['email'] || 'Not provided'}
- Phone: ${inputValues['phone'] || 'Not provided'}

Service Requested: ${selectedService}

Message: ${textareaValues || 'No message provided'}

Marketing Agreement: ${agreementChecked}

---
This message was sent via the Anderson Carl Consultancy contact form.
    `.trim();

    // Create mailto link
    const subject = encodeURIComponent('New Consultation Request - Anderson Carl');
    const body = encodeURIComponent(emailBody);
    const mailtoLink = `mailto:support@andersoncarlconsultancy.uk?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <form id="contactForm" className={twMerge('', containerClass)} onSubmit={handleSubmit}>
      {title && <h2 className={`${description ? 'mb-2' : 'mb-4'} text-2xl font-bold`}>{title}</h2>}
      {description && <p className="mb-4">{description}</p>}
      <div className="mb-6">
        {/* Inputs */}
        <div className="mx-0 mb-1 sm:mb-4">
          {inputs &&
            inputs.map(({ type, label, name, autocomplete, placeholder }, index) => (
              <div key={`item-input-${index}`} className="mx-0 mb-4 sm:mb-6">
                {label && (
                  <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-700">
                    {label}
                  </label>
                )}
                <input
                  type={type}
                  id={name}
                  name={name}
                  autoComplete={autocomplete}
                  value={inputValues[name] || ''}
                  onChange={changeInputValueHandler}
                  placeholder={placeholder}
                  className="w-full rounded-md border border-gray-400 py-3 px-4 shadow-md focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none"
                />
              </div>
            ))}
        </div>
        {/* Radio buttons */}
        {radioBtns && (
          <div className="mx-0 mb-4 sm:mb-6">
            <label className="block mb-3 text-sm font-medium text-gray-700">{radioBtns?.label}</label>
            <div className="space-y-2">
              {radioBtns.radios.map(({ label }, index) => (
                <div key={`radio-btn-${index}`} className="flex items-center">
                  <input
                    id={`radio-${index}`}
                    type="radio"
                    name="service"
                    value={`value${index}`}
                    checked={radioBtnValue === `value${index}`}
                    onChange={changeRadioBtnsHandler}
                    className="cursor-pointer w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 focus:ring-2"
                  />
                  <label htmlFor={`radio-${index}`} className="ml-3 text-sm text-gray-700 cursor-pointer">
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Textarea */}
        {textarea && (
          <div className={`mx-0 mb-4 sm:mb-6`}>
            {textarea.label && (
              <label htmlFor={textarea.name} className="block mb-2 text-sm font-medium text-gray-700">
                {textarea.label}
              </label>
            )}
            <textarea
              id={textarea.name}
              name={textarea.name}
              cols={textarea.cols}
              rows={textarea.rows}
              value={textareaValues}
              onChange={(e) => changeTextareaHandler(e)}
              placeholder={textarea.placeholder}
              className="w-full rounded-md border border-gray-400 py-3 px-4 shadow-md focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none"
            />
          </div>
        )}
        {/* Checkboxes */}
        {checkboxes && (
          <div className="mx-0 mb-4 sm:mb-6">
            {checkboxes.map(({ label }, index) => (
              <div key={`checkbox-${index}`} className="flex items-center">
                <input
                  id={`checkbox-${index}`}
                  type="checkbox"
                  name="agreement"
                  checked={checkedState[index]}
                  onChange={() => changeCheckboxHandler(index)}
                  className="cursor-pointer w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
                />
                <label htmlFor={`checkbox-${index}`} className="ml-3 text-sm text-gray-700 cursor-pointer">
                  {label}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      {btn && (
        <div
          className={`${btnPosition === 'left' ? 'text-left' : btnPosition === 'right' ? 'text-right' : 'text-center'}`}
        >
          <button type={btn.type || 'submit'} className="btn btn-primary sm:mb-0 px-8 py-3 text-lg">
            {btn.title}
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;
