import { useEffect, useState } from "react";

import { Button } from "components/data";

import { getNotification } from "src/utils/getNotifications";

export function Notifications() {
  const [notificationCount, setNotificationCount] = useState<string>("0");

  useEffect(() => {
    const fetchNotificationCount = async () => {
      const count = await getNotification();
      setNotificationCount(count);
    };

    fetchNotificationCount();
  }, []);

  return (
    <div className="box-notifications">
      <Button className="btn-notifications" text={notificationCount} />
    </div>
  );
}
