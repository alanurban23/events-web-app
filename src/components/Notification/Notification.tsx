import { StackProps } from '@mui/material';
import { FC, forwardRef, useState } from 'react';
import { Alert, AlertProps, Snackbar, Stack, styled } from '../../material-ui';
import { NotificationType } from '../../models';
import { getEnv } from '../../utils';

export type NotificationProps = {
  message: string;
  type: NotificationType;
  open: boolean;
  vertical: string;
  horizontal: string;
};
export type NotificationState = {
  open: boolean;
};

const NotificationAlert = forwardRef<HTMLDivElement, AlertProps>(() => (
  <Alert elevation={6} variant='filled' />
));
const NotificationStackRef = forwardRef<HTMLDivElement, StackProps>(() => <Stack spacing={2} />);

const NotificationStack = styled(NotificationStackRef)`
  width: 100%;
`;

const autoHideDuration = +`${getEnv('auto_hide_duration')}`;

/** @todo Notification component will be used in future to show notifications and errors */
export const Notification: FC<NotificationProps> = (props) => {
  const { message, type, open, horizontal, vertical } = props;

  const [alert, setAlert] = useState<NotificationState>({ open });

  const handleClose = (): void => {
    setAlert({
      open: false,
    });
  };

  return (
    <div data-testid='Notification'>
      <NotificationStack>
        <Snackbar
          open={alert.open}
          autoHideDuration={autoHideDuration}
          onClose={handleClose}
          key={horizontal + vertical}
        >
          <NotificationAlert onClose={handleClose} severity={type}>
            {message}
          </NotificationAlert>
        </Snackbar>
      </NotificationStack>
    </div>
  );
};
