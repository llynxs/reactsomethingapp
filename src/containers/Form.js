import React, { useState, useEffect } from 'react';
import { Input, Button, List } from '../components';

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState([]);
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleEmailInput = data => setEmail(data);
    // setIsEmailValid(false);
  // };

  const handleNameInput = data => setName(data);

  const handleSubmitFormData = () => {
    setFormData(prev => {
      return (
        [
          ...prev,
          {
            userName: name,
            userEmail: email,
          }
        ]
      );
    });
    setName('');
    setEmail('');
    setIsEmailValid(null);
    setIsButtonDisabled(true);
  };

  const handleValidateEmail = () => {
    const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

    if (!isValid) {
      setIsEmailValid(false);
      setIsButtonDisabled(true);
      return;
    }

    console.log(isValid, 'email', email);
    
    setIsButtonDisabled(false);
    handleEmailInput(email);
  };

  // useEffect(() => {
  //   console.log('useEffect render');
  // }, [isEmailValid, name]);

  return (
    <div className="App-form-wrapper">
      <h3>Form</h3>
      <div className="App-form">
        <div className="App-form-fields">
          <div className="App-form-fields-name">
            <Input
              type="text"
              onChange={handleNameInput}
              value={name}
              placeholder={'Enter your name'}
            />
          </div>
          <div className="App-form-fields-email">
            <Input
              type="email"
              onChange={handleEmailInput}
              value={email}
              placeholder={'Enter your email'}
              isValid={isEmailValid}
            />
            <Button value="Validate" onClick={handleValidateEmail} />
          </div>
        </div>
        <div className="App-form-name">
          <Button
            disabled={isButtonDisabled}
            type="submit"
            value="Subscribe"
            onClick={handleSubmitFormData}
          />
        </div>
      </div>
      <div>
        {
          formData.length !== 0
          && formData.map((el, i) => {
            const { userName, userEmail } = el;
            return (
              <li className="App-item-list-item" key={i + userName}>
                <div><b>Email:</b> {userEmail}</div>
                <div><b>User name:</b> {userName}</div>
              </li>
            );
          })
        }
        {/*<List list={formData} />*/}
      </div>
    </div>
  );
};
