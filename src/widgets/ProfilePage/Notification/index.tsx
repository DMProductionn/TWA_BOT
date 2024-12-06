import * as Switch from '@radix-ui/react-switch';
import '../../../app/css/Profile/Notification/notification.css';
import { useState } from 'react';
import useToggleNotification from '../../../app/hooks/Notification/useToggleNotification';

const Notification = () => {
  const [isChecked, setIsChecked] = useState(true);
  const { mutate } = useToggleNotification();

  const handleToggle = () => {
    setIsChecked(!isChecked); 
    mutate({action: !isChecked});   
  };
  
  

  return (
    <div className="bg-blue-medium pb-[8px] flex justify-between w-full h-auto border-b-[15px] border-blue-dark px-[10px]">
      <p>Уведомления</p>
      <div className="flex gap-[10px]">
        <p>Off</p>
        <div>
          <Switch.Root className="SwitchRoot" id="airplane-mode" checked={isChecked} onCheckedChange={handleToggle}>
            <Switch.Thumb className="SwitchThumb" />
          </Switch.Root>
        </div>
        <p>On</p>
      </div>
    </div>
  );
};

export default Notification;
