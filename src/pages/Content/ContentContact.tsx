import { Typography, Divider, TextField, InputAdornment, Button } from "@mui/material";
import useTextForCurrentLanguage from "../../hooks/useTextForCurrentLanguage";
import Card from "../../components/Miscellaneous/Card";
import EmailIcon from "../../assets/icons/email.png";
import LinkedInIcon from "../../assets/icons/linkedin.png";
import { List, Mail, Person, Send } from "@mui/icons-material";
import { useState } from "react";
import API from "../../utils/API";
import { AxiosError } from "axios";
import useAlert from "../../hooks/useAlert";
import useLocalStorage from "../../hooks/useLocalStorage";

const ContentContact = () => {
  const { setAlert } = useAlert();
  const { language } = useLocalStorage();

  const [ formName, setFormName ] = useState<string>('');
  const [ formNameError, setFormNameError ] = useState<boolean>(false);

  const [ formEmail, setFormEmail ] = useState<string>('');
  const [ formEmailError, setFormEmailError ] = useState<boolean>(false);

  const [ formSubject, setFormSubject ] = useState<string>('');
  const [ formSubjectError, setFormSubjectError ] = useState<boolean>(false);

  const [ formMessage, setFormMessage ] = useState<string>('');
  const [ formMessageError, setFormMessageError ] = useState<boolean>(false);

  const handleSendForm = async () => {
    if(formName.trim() === '') setFormNameError(true);
    if(formEmail.trim() === '') setFormEmailError(true);
    if(formSubject.trim() === '') setFormSubjectError(true);
    if(formMessage.trim() === '') setFormMessageError(true);

    if(formName.trim() === '' || formEmail.trim() === '' || formSubject.trim() === '' || formMessage.trim() === '') return;
    
    try {
      await API.post('/content/contact', { name: formName, email: formEmail, subject: formSubject, message: formMessage }, { withCredentials: true });
      setAlert({ severity: 'success', children: language === 'de' ? 'Das Formular wurde erfolgreich abgeschickt!' : 'The form was successfully submitted!'})
    } catch (err) {
      const error = err as AxiosError;
      setAlert({ severity: 'error', children: `${language === 'de' ? 'Das Formular konnte serverseitig nicht verarbeitet werden!' : 'The form could not be processed on the server side!'} - Status ${error.response?.status}` })
    }
  }

  return (
    <div className="min-h-full w-full flex items-center justify-center p-1">
      <div className="w-[60%] max-lg:h-full max-lg:w-full max-lg:p-[10%]">
        <Card className="w-full">
          <div className="flex items-baseline gap-4 flex-wrap">
            <Typography 
              variant="h2" 
              fontWeight={200}
              children={useTextForCurrentLanguage([
                { lang: 'en', text: 'Contact' },
                { lang: 'de', text: 'Kontakt' }
              ])}
            />
          </div>
          <Divider className="bg-white/75" />
          <div className="flex gap-4 max-lg:flex-col">
            <Card className="flex-1 flex flex-col items-center gap-1 ring-0 bg-[#1e1e1e]/10">
              <a
                href="mailto:maxlehmann1404@gmail.com"
                target="_blank"
                children={(
                  <img
                    src={EmailIcon}
                    alt="Email icon"
                    className="h-auto w-[50px] aspect-square rounded-full hover:scale-105 duration-200"
                  />
                )}
              />
              <Typography>{useTextForCurrentLanguage([{ lang: 'en', text: 'Write me an E-Mail' }, { lang: 'de', text: 'Schreib mir eine E-Mail' }])}</Typography>
            </Card>
            <Card className="flex-1 flex flex-col items-center gap-1 ring-0 bg-[#1e1e1e]/10">
              <a
                href="https://www.linkedin.com/in/max-lehmann-3a476526a/"
                target="_blank"
                children={(
                  <img
                    src={LinkedInIcon}
                    alt="Email icon"
                    className="h-auto w-[50px] aspect-square rounded-full hover:scale-105 duration-200"
                  />
                )}
              />
              <Typography>{useTextForCurrentLanguage([{ lang: 'en', text: 'Reach me via LinkedIn' }, { lang: 'de', text: 'Erreich mich über LinkedIn' }])}</Typography>
            </Card>
          </div>
          <Divider className="bg-white/75" />
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-4 flex-wrap">
              <Typography 
                variant="h2" 
                fontWeight={200}
                children={useTextForCurrentLanguage([
                  { lang: 'en', text: 'Or fill out this contact form.' },
                  { lang: 'de', text: 'Oder fülle dieses Kontaktformular aus.' }
                ])}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 max-lg:flex-col">
                <TextField
                  placeholder={useTextForCurrentLanguage([{ lang: 'en', text: 'Your Name' }, { lang: 'de', text: 'Dein Name' }])}
                  InputProps={{ startAdornment: (
                    <InputAdornment 
                      position="start" 
                      children={(
                        <Person 
                          fontSize="small" 
                          className="text-white" 
                        />
                      )} 
                    />
                  )}}
                  className="rounded-[10px] bg-[#1e1e1e]/30 flex-1"
                  value={formName}
                  onChange={(event) => {
                    setFormNameError(false); 
                    setFormName(event.target.value)
                  }}
                  error={formNameError}
                  helperText={useTextForCurrentLanguage([{ lang: 'en', text: formNameError ? 'Name is required' : '' }, { lang: 'de', text: formNameError ? 'Name ist erforderlich' : '' }])}
                />
                <TextField
                  placeholder={useTextForCurrentLanguage([{ lang: 'en', text: 'Your E-Mail' }, { lang: 'de', text: 'Deine E-Mail' }])}
                  InputProps={{ startAdornment: (
                    <InputAdornment 
                      position="start" 
                      children={(
                        <Mail 
                          fontSize="small" 
                          className="text-white" 
                        />
                      )} 
                    />
                  )}}
                  className="rounded-[10px] bg-[#1e1e1e]/30 flex-1"
                  value={formEmail}
                  onChange={(event) => {
                    setFormEmailError(false); 
                    setFormEmail(event.target.value)
                  }}
                  error={formEmailError}
                  helperText={useTextForCurrentLanguage([{ lang: 'en', text: formEmailError ? 'E-Mail is required' : '' }, { lang: 'de', text: formEmailError ? 'E-Mail ist erforderlich' : '' }])}
                />
              </div>
              <TextField
                placeholder={useTextForCurrentLanguage([{ lang: 'en', text: 'Subject' }, { lang: 'de', text: 'Betreff' }])}
                InputProps={{ startAdornment: (
                  <InputAdornment 
                    position="start" 
                    children={(
                      <List 
                        fontSize="small" 
                        className="text-white" 
                      />
                    )} 
                  />
                )}}
                className="rounded-[10px] bg-[#1e1e1e]/30"
                value={formSubject}
                onChange={(event) => {
                  setFormSubjectError(false); 
                  setFormSubject(event.target.value)
                }}
                error={formSubjectError}
                helperText={useTextForCurrentLanguage([{ lang: 'en', text: formSubjectError ? 'Subject is required' : '' }, { lang: 'de', text: formSubjectError ? 'Betreff ist erforderlich' : '' }])}
              />
              <TextField
                placeholder={useTextForCurrentLanguage([{ lang: 'en', text: 'Your Message' }, { lang: 'de', text: 'Deine Nachricht' }])}
                className="rounded-[10px] bg-[#1e1e1e]/30"
                value={formMessage}
                onChange={(event) => {
                  setFormMessageError(false); 
                  setFormMessage(event.target.value)
                }}
                error={formMessageError}
                helperText={useTextForCurrentLanguage([{ lang: 'en', text: formMessageError ? 'Message is required' : '' }, { lang: 'de', text: formMessageError ? 'Nachricht ist erforderlich' : '' }])}
                multiline
                rows={10}
              />
              <Button
                children={useTextForCurrentLanguage([{ lang: 'en', text: 'Send' }, { lang: 'de', text: 'Senden' }])}
                size="large"
                variant="contained"
                color="primary"
                startIcon={(
                  <Send fontSize="small" />
                )}
                onClick={handleSendForm}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ContentContact;