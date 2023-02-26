import { Label, StyledForm, InvalidValue } from './PhoneBook.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { getContacts } from 'Redux/selector';
import { addContact } from 'Redux/operations';

const phoneRegexp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
const scheme = yup.object().shape({
  number: yup
    .string()
    .trim()
    .matches(phoneRegexp, 'add correct format phone +380ххххххххх')
    .required(),
  name: yup.string().min(3).max(40).required(),
});
const initialValues = {
  number: '',
  name: '',
};

export const PhoneBook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts)
  const isAlredyExistInContact = (name) => {
    return contacts
      .some(contact =>
        contact.name.toLowerCase()
        === name.toLowerCase())
  }
  const onSubmit = (value, { resetForm }) => {
    const { name, number } = value;
    if (isAlredyExistInContact(name))
      toast.error("Contact alredy exists")
    else {
      const seconds = 60
      const miliseconds = 1000
      const createdAt = new Date(Date.now()
        - new Date()
          .getTimezoneOffset()
        * seconds
        * miliseconds)
        .toISOString()
      dispatch(addContact({ name, number, createdAt }))
      resetForm();
    }
  };

  return (
    <>
      <h1>Phone Book</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={scheme}
        onSubmit={onSubmit}
      >
        <StyledForm>
          <Label>Name</Label>
          <Field type="text" name="name" />
          <ErrorMessage component={InvalidValue} name="name" />
          <Label>Number</Label>
          <Field type="tel" name="number" />
          <ErrorMessage component={InvalidValue} name="number" />
          <Label htmlFor="">
            <button type="submit">Add contact</button>
          </Label>
        </StyledForm>
      </Formik>
    </>
  );
};
// ContactForm.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
// };
