import { useEffect, useState } from 'react';

import { Message, NotificationStatus, Title } from './style';

function Notification(props) {
  const { requestStatus, requestError } = props;
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (requestStatus === 'pending') {
      setNotification({
        status: 'pending',
        title: 'connection en cours',
        message: 'veuillez patienter',
      });
    }
    if (requestStatus === 'success') {
      setNotification({
        status: 'success',
        title: 'Message envoyé.',
        message: 'Votre a bien été envoyé',
      });
    }
    if (requestStatus === 'userCreated') {
      setNotification({
        status: 'success',
        title: 'Créé.',
        message: 'Votre compte a bien été créé',
      });
    }
    if (requestStatus === 'userExists') {
      setNotification({
        status: 'error',
        title: 'Erreur !',
        message: 'Cet email est deja utilisé',
      });
    }

    if (requestStatus === 'connected') {
      setNotification({
        status: 'success',
        title: 'Vous etes connecté(e)',
        message: '👌',
      });
    }
    if (requestStatus === 'wrongPassword') {
      setNotification({
        status: 'error',
        title: 'Erreur !',
        message: 'votre mot de passe est erronné',
      });
    }
    if (requestError) {
      setNotification({
        status: 'error',
        title: 'Erreur !',
        message: requestError,
      });
    }
    if (requestStatus) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus, requestError]);

  return (
    <>
      {notification && (
        <NotificationStatus status={notification.status}>
          <Title>{notification.title}</Title>
          <Message>{notification.message}</Message>
        </NotificationStatus>
      )}
    </>
  );
}

export default Notification;
