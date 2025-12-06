import { toast } from 'react-toastify';

const toastConfig = {
  position: 'bottom-right' as const,
};

export const notifyCreate = () => {
  toast.success('Добавлена новая задача !', toastConfig);
};

export const notifyUpdate = () => {
  toast.info('Задача обновлена !', toastConfig);
};

export const notifyDelete = () => {
  toast.success('Задача удалена !', toastConfig);
};
