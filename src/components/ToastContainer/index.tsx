import { Container, Toast } from './styles';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';
import { ToastMessageData, useToast } from '../../context/ToastContext';
import { useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ToastContainerProps {
  messages: ToastMessageData[];
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

function ToastContainer({ messages }: ToastContainerProps) {
  const { removeToast } = useToast();

  const handleRemoveToast = useCallback((id: string) => {
    removeToast(id);
  }, []);

  return (
    <Container>
      <AnimatePresence>
        {messages.map((message) => (
          <Toast
            key={message.id}
            type={message.type}
            hasDescriptions={!!message.description}
            initial={{ right: '-120%', transform: 'rotateX(0deg)' }}
            animate={{ right: '0%', transform: 'rotateX(360deg)' }}
            exit={{
              right: '-120%',
              transform: 'rotateX(0deg)',
              transition: { duration: 0.6 },
            }}
          >
            {icons[message.type || 'info']}

            <div>
              <strong>{message.title}</strong>
              {message.description && <p>{message.description}</p>}
            </div>
            <motion.button
              onClick={() => handleRemoveToast(message.id)}
              type="button"
            >
              <FiXCircle size={18} />
            </motion.button>
          </Toast>
        ))}
      </AnimatePresence>
    </Container>
  );
}

export default ToastContainer;
