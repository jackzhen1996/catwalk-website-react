import React, { useState } from 'react';
import axios from 'axios';
import { FormView } from './styles.js';
import SelectStars from './SelectStars.js';
import RadioArray from './RadioArray.js';
import Input from './Input.js';
import Button from '../../../../../components/Button';

const notes = [
  'For authentication reasons, you will not be emailed',
  'For privacy reasons, do not use your full name or email address',
];

const labels = {
  size: ['Too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'Too big'],
  width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  quality: ['Poor', 'Below Average', 'Expected', 'Pretty great', 'Perfect'],
  length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
};

const Form = ({ closeModal, metaData }) => {
  // handle all form inputs here
  const [form, setForm] = useState({
    rating: 0,
    size: '',
    width: '',
    length: '',
    comfort: '',
    quality: '',
    recommend: '',
    summary: '',
    body: '',
    name: '',
    email: '',
  });

  const [images, setImage] = useState([]);

  // returns an object containing characteristic Ids and the score for that id
  // from form data
  const transformCharactersitics = (formData, metaData) => {
    // use meta data from get request
    const refData = metaData.characteristics;
    const obj = {};
    // iterate the form data and find all matching keys in both form and meta data
    for (const factor in formData) {
      // if key exists then set the key to be the id and value to be the score from user input
      const metaFactor = factor[0].toUpperCase().concat(factor.slice(1));
      if (refData[metaFactor]) {
        // this line can be optimized
        obj[refData[metaFactor].id] = labels[factor].indexOf(formData[factor]) + 1;
      }
    }
    return obj;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // construct the object to submit
    const recommend = form.recommend === 'true';
    const submitObj = {
      // photos: images,
      rating: form.rating,
      recommend, summary: form.summary,
      body: form.body,
      name: form.name,
      email: form.email,
      product_id: parseInt(metaData.product_id),
      characteristics: transformCharactersitics(form, metaData),
    };
    console.log(submitObj);
    // submit the content through POST request
    axios.post('/api/reviews/post', submitObj)
      .then((result) => console.log('sucess post!'))
      .catch((err) => console.log(err));
  // close the page
  };

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const uploadImg = (e) => {
    if (images.length < 5) {
      const array = [...images];
      array.push(URL.createObjectURL(e.target.files[0]));
      setImage(array);
    }
  };

  const renderImages = (data) => data.map((img, index) => <img key={index} alt="uploaded pic" className="img" src={img} />);

  // map out all radio components
  const renderRadio = (data, form) => Object.keys(data).map((label, index) => (
    <div key={index} className={label}>
      <span>{label}</span>
      <div>{form[label] ? <span className="selected">{form[label]}</span> : <span className="message">Please select</span>}</div>
      <RadioArray
        onChange={handleChange}
        checked={form[label]}
        labelList={data[label]}
        name={label}
      />
    </div>
  ));

  // get the rating from stars
  const getRating = (rating) => {
    setForm({
      ...form,
      rating,
    });
  };

  return (
    <FormView onSubmit={handleSubmit}>
      <div className="inner">
        <div className="top">
          <h2 className="title">Write Your Review</h2>
          <h3 className="about">About Your Product</h3>
        </div>

        <div className="ratingAndRec">
          <div className="rating">
            <span>Your Overall Rating</span>
            <SelectStars getRating={getRating} />
          </div>
          <div className="rec">
            <div className="label">
              Do you recommend this product?
            </div>
            <label className="answer">Yes</label>
            <input name="recommend" onChange={handleChange} value="true" checked={form.recommend === 'true'} type="radio" />
            <label className="answer">No</label>
            <input name="recommend" onChange={handleChange} value="false" checked={form.recommend === 'false'} type="radio" />
          </div>
        </div>

        <div className="overall">
          {renderRadio(labels, form)}
        </div>

        <h3>Your Comment</h3>
        <div className="comment">
          <Input max="60" type="text" label="summary" handleChange={handleChange} />
          <div className="upload">
            <span>Upload Photo</span>
            <input onChange={uploadImg} type="file" accept="image/*" multiple />
            {images
              && <div className="imageRow">{renderImages(images)}</div>}
          </div>
          <Input max="1000" type="textarea" label="body" handleChange={handleChange} />
        </div>

        <h3>Personal Info</h3>
        <div className="info">
          <Input note={notes[1]} max="60" type="text" label="name" handleChange={handleChange} />
          <Input note={notes[0]} max="60" type="text" label="email" handleChange={handleChange} />
        </div>
        <div className="buttons">
          <input className="button" onClick={closeModal} type="button" value="CANCEL" />
          <input className="button" type="submit" value="SUBMIT REVIEW" />
        </div>
      </div>
    </FormView>
  );
};

export default Form;
