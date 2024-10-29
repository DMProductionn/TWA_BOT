import * as Switch from '@radix-ui/react-switch';
import '../../../app/css/Profile/Notification/notification.css';

const Notification = () => {
  return (
    <div className="bg-blue-medium pb-[8px] flex justify-between w-full h-auto border-b-[15px] border-blue-dark px-[10px]">
      <p>Уведомления</p>
      <div className="flex gap-[10px]">
        <p>On</p>
        <div>
          <Switch.Root className="SwitchRoot" id="airplane-mode">
            <Switch.Thumb className="SwitchThumb" />
          </Switch.Root>
        </div>
        <p>Off</p>
      </div>
    </div>
  );
};

export default Notification;
