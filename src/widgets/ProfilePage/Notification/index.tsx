import * as Switch from '@radix-ui/react-switch';
import '../../../app/css/Profile/Notification/notification.css';
import { useState } from 'react';
import useToggleNotification from '../../../app/hooks/Notification/useToggleNotification';

const Notification = () => {
  const [isChecked, setIsChecked] = useState(true);
  const { mutate } = useToggleNotification();

  const handleToggle = () => {
    setIsChecked(!isChecked);
    mutate({ action: !isChecked });
  };

  return (
    <div className="bg-blue-medium h-[50px] flex justify-between items-center rounded-[20px] w-full px-[20px]">
      <p className="font-bold text-[14px]">Уведомления</p>
      <div className="flex gap-[10px]">
        <p>Off</p>
        <Switch.Root
          className="SwitchRoot"
          id="airplane-mode"
          checked={isChecked}
          onCheckedChange={handleToggle}>
          <Switch.Thumb className="SwitchThumb" />
        </Switch.Root>
        <p>On</p>
      </div>
    </div>
  );
};

export default Notification;
